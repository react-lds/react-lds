/* eslint-disable function-paren-newline */
import React from 'react';
import { shallow } from 'enzyme';
import WelcomeMatContent from '../components/WelcomeMatContent';
import { WelcomeMatStep } from '../components/WelcomeMatStep';

const getComponent = (props = {}) => shallow(
  <WelcomeMatContent
    onClose={jest.fn()}
    id="test-modal"
    description="foo-description"
    title="foo-title"
    {...props}
  />
);

const sampleSteps = [
  {
    title: 'a',
    description: 'a-desc',
    id: 1,
    icon: 'chevron-right',
    sprite: 'utility',
  },
  {
    title: 'b',
    description: 'a-desc',
    id: 1,
    icon: 'chevron-right',
    isCompleted: true,
    sprite: 'utility',
  },
  {
    title: 'c',
    description: 'a-desc',
    id: 1,
    icon: 'chevron-right',
    sprite: 'utility',
  },
];

describe('<WelcomeMat />', () => {
  describe('Layout & Content', () => {
    it('always renders a title', () => {
      const stub = <span>Stub</span>;
      const cmp = getComponent({ id: 'foo-id', title: stub });

      expect(cmp
        .find('.slds-welcome-mat__info-content')
        .find('#foo-id-label.slds-welcome-mat__info-title')
        .contains(stub)
      ).toBeTruthy();
    });

    it('always renders a description', () => {
      const stub = <span>Stub</span>;
      const cmp = getComponent({ id: 'foo-id', description: stub });

      expect(cmp
        .find('.slds-welcome-mat__info-content')
        .find('.slds-welcome-mat__info-description')
        .contains(stub)
      ).toBeTruthy();
    });

    it('renders with custom styles', () => {
      const customStyle = {
        color: '#fff'
      };

      const cmp = getComponent({ customStyle });
      expect(cmp.find('.slds-welcome-mat__info').prop('style')).toEqual(customStyle);
    });
  });

  describe('Actions & Callbacks', () => {
    it('renders an optional cta via `renderAction`', () => {
      const onCloseMock = jest.fn();
      const mockEl = <p className="cta">cta</p>;
      const renderAction = jest.fn(() => mockEl);

      const cmp = getComponent({
        onClose: onCloseMock,
        renderAction,
        steps: sampleSteps,
      });

      expect(renderAction).toBeCalledWith({ steps: sampleSteps, onClose: onCloseMock });
      expect(cmp
        .find('.slds-welcome-mat__info-actions')
        .contains(mockEl)
      ).toBeTruthy();
    });

    it('renders as dismissable via `renderDismiss`', () => {
      const onCloseMock = jest.fn();
      const mockEl = <p className="cta">cta</p>;
      const renderDismiss = jest.fn(() => mockEl);

      const cmp = getComponent({
        id: 'foo-id',
        onClose: onCloseMock,
        renderDismiss,
        steps: sampleSteps,
      });

      expect(renderDismiss).toBeCalledWith({
        id: 'foo-id',
        onClose: onCloseMock,
        steps: sampleSteps,
      });
      expect(cmp
        .find('.slds-welcome-mat__info-actions')
        .contains(mockEl)
      ).toBeTruthy();
    });

    it('wraps `onComplete` and passes to `steps`', () => {
      const onCompleteMock = jest.fn();

      const cmp = getComponent({
        onCompleteStep: onCompleteMock,
        steps: sampleSteps,
      });

      cmp.find(WelcomeMatStep).at(0).simulate('complete', {
        currentTarget: {
          dataset: { targetId: '1' }
        },
      });

      expect(onCompleteMock).toBeCalledWith({ id: 1, step: sampleSteps[0] });
    });
  });

  describe('Variant: Steps', () => {
    it('renders steps variant if empty array is passed for `steps`', () => {
      const cmp = getComponent({ steps: [] });
      expect(cmp.find('.slds-welcome-mat__info').prop('sizeOf')).toEqual('1-2');
      expect(cmp.find('.slds-welcome-mat__tiles').exists()).toBeTruthy();
    });

    it('renders steps when step objects are passed for `steps`', () => {
      const cmp = getComponent({ steps: sampleSteps });
      expect(cmp.find(WelcomeMatStep).length).toEqual(3);
    });

    it('renders `infoOnly` variant', () => {
      const cmp = getComponent({ isInfoOnly: true, steps: sampleSteps });
      const tilesEl = cmp.find('.slds-welcome-mat__tiles');
      expect(tilesEl.hasClass('slds-welcome-mat__tiles_info-only')).toBeTruthy();
      expect(tilesEl.find(WelcomeMatStep).at(0).prop('isInfoOnly')).toBeTruthy();
    });

    it('renders a progress element when `renderProgress()` is provided', () => {
      const renderProgress = jest.fn(({ steps }) => <p className="stub">{steps.length}</p>);
      const cmp = getComponent({ steps: sampleSteps, renderProgress });
      expect(renderProgress).toBeCalledWith({ steps: sampleSteps });
      expect(cmp.find('.stub').exists()).toBeTruthy();
    });
  });

  describe('Variant: Splash', () => {
    it('renders splash variant if empty array is passed for `steps`', () => {
      const cmp = getComponent({ steps: null });
      expect(cmp.find('.slds-welcome-mat__info').prop('sizeOf')).toEqual('1-1');
      expect(cmp.find('.slds-welcome-mat__tiles').exists()).toBeFalsy();
    });
  });
});
