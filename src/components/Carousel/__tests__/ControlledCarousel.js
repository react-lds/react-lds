import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { ControlledCarousel as Carousel, CarouselPanel } from '..';

describe('<Carousel />', () => {
  const context = { assetBasePath: '/' };
  const childContextTypes = { assetBasePath: PropTypes.string };
  const options = { context, childContextTypes };
  const onPanelChange = jest.fn();

  const getComponent = (props, panels = []) => mount(
    <Carousel {...props}>
      {panels.map((panelProps, i) => (
        <CarouselPanel
          id={`panel-${i}`}
          imageUrl={`/assets/images/carousel/carousel-0${i}.jpg`}
          key={`p${i}`} // eslint-disable-line react/no-array-index-key
          {...panelProps}
        />
      ))}
    </Carousel>, options);

  it('renders without crashing', () => {
    expect(getComponent({ onPanelChange }).find(Carousel).length).toEqual(1);
  });

  it('renders every panel', () => {
    const mounted = getComponent({ onPanelChange }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find(CarouselPanel))
      .toHaveLength(2);
  });

  it('activates the first panel', () => {
    const mounted = getComponent({ onPanelChange }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find(CarouselPanel).at(0).prop('active'))
      .toBe(true);
    expect(mounted.find(CarouselPanel).at(1).prop('active'))
      .toBe(false);
  });

  it('handles keyboard interaction', () => {
    const mounted = getComponent({ onPanelChange }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    mounted.find(CarouselPanel).at(0).find('a').simulate('keydown', { key: 'ArrowRight' });

    expect(onPanelChange).toHaveBeenCalledWith(1);
  });

  it('returns the right index on arrow keydown and also wraps around', () => {
    const mounted = getComponent({ onPanelChange }, [
      { title: 'Title 1', children: 'Content 1' },
    ]);

    mounted.find(CarouselPanel).at(0).find('a').simulate('keydown', { key: 'ArrowRight' });
    expect(onPanelChange).toHaveBeenCalledWith(0);
  });

  it('does not render the autplay controls by default', () => {
    const mounted = getComponent({
      onPanelChange,
    }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find('.slds-carousel__autoplay')).toHaveLength(0);
  });

  it('shows the autoplay controls correctly', () => {
    let mounted = getComponent({
      autoPlay: true,
      autoPlayActive: true,
      autoPlayStartText: 'play',
      autoPlayStopText: 'pause',
      onPanelChange,
    }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find('.slds-carousel__autoplay')).toHaveLength(1);
    expect(mounted.find('.slds-carousel__autoplay span').at(1).text()).toEqual('pause');

    mounted = getComponent({
      autoPlay: true,
      autoPlayActive: false,
      onPanelChange,
    }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find('.slds-carousel__autoplay')).toHaveLength(1);
  });

  it('calls the autoplay handler', () => {
    const onToggleAutoPlay = jest.fn();

    const mounted = getComponent({
      autoPlay: true,
      onPanelChange,
      onToggleAutoPlay,
    }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find('.slds-carousel__autoplay')).toHaveLength(1);
    mounted.find('Button').simulate('click');
    expect(onToggleAutoPlay).toHaveBeenCalled();
  });
});
