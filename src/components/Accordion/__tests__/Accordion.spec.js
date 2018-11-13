import React from 'react';
import { render, mount } from 'enzyme';

import Accordion from '../Accordion';
import AccordionSection from '../AccordionSection';

describe('<Accordion />', () => {
  it('renders the first section initially open by default', () => {
    const mounted = render(
      <Accordion>
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
        <AccordionSection
          summary="summary for 3rd section"
          id="section-3"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('ul > li').find('section').first().hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('#section-1').first().hasClass('slds-is-open')).toBeTruthy();
  });

  it('renders the other sections initially closed', () => {
    const mounted = mount(
      <Accordion>
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
        <AccordionSection
          summary="summary for 3rd section"
          id="section-3"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('#section-2').first().hasClass('slds-is-open')).toBeFalsy();
    expect(mounted.find('#section-3').first().hasClass('slds-is-open')).toBeFalsy();
  });

  it('defaults to default classes', () => {
    const mounted = mount(
      <Accordion>
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
        <AccordionSection
          summary="summary for 3rd section"
          id="section-3"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('ul').hasClass('slds-accordion')).toBeTruthy();
    expect(mounted.find('li').first().hasClass('slds-accordion__list-item')).toBeTruthy();
    expect(mounted.find('li').first().find('section').first()
      .hasClass('slds-accordion__section')).toBeTruthy();
    expect(mounted.find('li').first().find('section').first()
      .find('div')
      .first()
      .hasClass('slds-accordion__summary')).toBeTruthy();
    expect(mounted.find('li').first().find('section').first()
      .find('div')
      .first()
      .find('h3')
      .first()
      .hasClass('slds-accordion__summary-heading')).toBeTruthy();
  });

  it('applies className and rest-properties to Accordion', () => {
    const mounted = mount(
      <Accordion className="foo" data-test="bar">
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
        <AccordionSection
          summary="summary for 3rd section"
          id="section-3"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('.slds-accordion').hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-accordion').prop('data-test')).toEqual('bar');
  });

  it('applies className and rest-properties to AccordionSection', () => {
    const mounted = mount(
      <Accordion>
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
          className="foo"
          data-test="bar"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
        <AccordionSection
          summary="summary for 3rd section"
          id="section-3"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('.slds-accordion__list-item').first().hasClass('foo')).toBeTruthy();
    expect(mounted.find('.slds-accordion__list-item').first().prop('data-test')).toEqual('bar');
  });

  it('takes styled prop and wraps Accordion in slds-card', () => {
    const mounted = mount(
      <Accordion styled>
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('div').first().hasClass('slds-card')).toBeTruthy();
  });

  it('takes defaultOpen prop and renders with that section open', () => {
    const mounted = mount(
      <Accordion styled defaultOpen="section-2">
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('section#section-2').first().hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('section#section-1').first().hasClass('slds-is-open')).toBeFalsy();
  });

  it('takes array as defaultOpen and renders those sections open', () => {
    const mounted = mount(
      <Accordion styled defaultOpen={['section-2', 'section-1']}>
        <AccordionSection
          summary="summary for 1st section"
          id="section-1"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
        <AccordionSection
          summary="summary for 2nd section"
          id="section-2"
        >
          <div>
            <p>One little paragraph</p>
            <p>Two little paragraphs</p>
          </div>
        </AccordionSection>
        <AccordionSection
          summary="summary for 1st section"
          id="section-3"
        >
          <p>Testing testing 123</p>
        </AccordionSection>
      </Accordion>
    );

    expect(mounted.find('section#section-1').first().hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('section#section-2').first().hasClass('slds-is-open')).toBeTruthy();
    expect(mounted.find('section#section-3').first().hasClass('slds-is-open')).toBeFalsy();
  });
});
