import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';

import { Carousel, CarouselPanel } from '..';
import { Button } from '../../..';

jest.useFakeTimers();

describe('<Carousel />', () => {
  const context = { assetBasePath: '/' };
  const childContextTypes = { assetBasePath: PropTypes.string };
  const options = { context, childContextTypes };

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
    </Carousel>, options
  );

  it('renders without crashing', () => {
    expect(getComponent().find('.slds-carousel').length).toEqual(1);
  });

  it('renders every panel', () => {
    const mounted = getComponent({}, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find('.slds-carousel__panel'))
      .toHaveLength(2);
  });

  it('activates the first panel', () => {
    const mounted = getComponent({}, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find(CarouselPanel).at(0).prop('active'))
      .toBe(true);
    expect(mounted.find(CarouselPanel).at(1).prop('active'))
      .toBe(false);
  });

  it('handles keyboard interaction', () => {
    const mounted = getComponent({}, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    mounted.find(CarouselPanel).at(0).find('a').simulate('keydown', { keyCode: 39 });

    expect(mounted.find(CarouselPanel).at(0).prop('active'))
      .toBe(false);
    expect(mounted.find(CarouselPanel).at(1).prop('active'))
      .toBe(true);
  });

  it('wraps around when cycling over the last panel', () => {
    const mounted = getComponent({}, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    mounted.find(CarouselPanel).at(0).find('a').simulate('keydown', { keyCode: 39 });
    mounted.find(CarouselPanel).at(1).find('a').simulate('keydown', { keyCode: 39 });

    expect(mounted.find(CarouselPanel).at(0).prop('active'))
      .toBe(true);
    expect(mounted.find(CarouselPanel).at(1).prop('active'))
      .toBe(false);
  });

  it('Can autoplay panels', () => {
    const mounted = getComponent({ autoPlay: true, autoPlayActive: true }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find(CarouselPanel).at(0).prop('active'))
      .toBe(true);

    jest.runOnlyPendingTimers();
    mounted.update();

    expect(mounted.find(CarouselPanel).at(1).prop('active'))
      .toBe(true);

    jest.runOnlyPendingTimers();
    mounted.update();

    expect(mounted.find(CarouselPanel).at(0).prop('active'))
      .toBe(true);
  });

  it('Can stop autoplaying panels', () => {
    const mounted = getComponent({ autoPlay: true, autoPlayActive: true }, [
      { title: 'Title 1', children: 'Content 1' },
      { title: 'Title 2', children: 'Content 2' },
    ]);

    expect(mounted.find(CarouselPanel).at(0).prop('active'))
      .toBe(true);

    jest.runOnlyPendingTimers();
    mounted.update();

    expect(mounted.find(CarouselPanel).at(1).prop('active'))
      .toBe(true);

    mounted.find(Button).simulate('click');

    jest.runOnlyPendingTimers();
    mounted.update();

    expect(mounted.find(CarouselPanel).at(1).prop('active'))
      .toBe(true);
  });
});
