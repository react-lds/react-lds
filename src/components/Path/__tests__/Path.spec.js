import React from 'react';
import { render, shallow } from 'enzyme';

import { Path } from '../Path';
import { PathStage } from '../PathStage';

describe('<Path />', () => {
  it('renders the correct html and classes', () => {
    const mounted = render(
      <Path button={(<p className="whatishappening">test</p>)}>
        <PathStage label="testLabel" onStageClick={() => {}} />
      </Path>
    );
    expect(mounted.find('div.slds-path-coach').length).toBe(1);
    expect(mounted.find('div.slds-grid').length).toBe(1);
    expect(mounted.find('div.slds-tabs_path').length).toBe(1);
  });

  it('renders the button', () => {
    const mounted = render(
      <Path button={(<p className="whatishappening">test</p>)}>
        <PathStage label="testLabel" onStageClick={() => {}} />
      </Path>
    );
    expect(mounted.find('p.whatishappening').length).toBe(1);
  });

  it('applies className and rest-properties', () => {
    const mounted = shallow(
      <Path button={(<p className="whatishappening">test</p>)}>
        <PathStage label="testLabel" onStageClick={() => {}} />
      </Path>
    );
    mounted.setProps({ className: 'foo', 'data-test': 'bar' });
    expect(mounted.find('.slds-path-coach').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-path-coach').prop('data-test')).toEqual('bar');
  });
});
