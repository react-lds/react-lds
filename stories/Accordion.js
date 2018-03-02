import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { array, boolean, select } from '@storybook/addon-knobs';
import { Accordion, AccordionSection } from '../src';

const stories = storiesOf('Accordion', module);

stories
  .add('Uncontrolled', () => (
    <Accordion defaultOpen="02" styled={boolean('Styled', true)}>
      <AccordionSection summary="Section 1 summary" id="01">
        <p>test 123</p>
      </AccordionSection>
      <AccordionSection summary="Section 2 summary" id="02">
        <p>test 456</p>
      </AccordionSection>
      <AccordionSection summary="Section 3 summary" id="03">
        <p>test 789</p>
      </AccordionSection>
    </Accordion>
  ))
  .add('Uncontrolled with multiple sections open', () => (
    <Accordion defaultOpen={['02', '03']} styled={boolean('Styled', true)} multiple>
      <AccordionSection summary="Section 1 summary" id="01">
        <p>test 123</p>
      </AccordionSection>
      <AccordionSection summary="Section 2 summary" id="02">
        <p>test 456</p>
      </AccordionSection>
      <AccordionSection summary="Section 3 summary" id="03">
        <p>test 789</p>
      </AccordionSection>
    </Accordion>
  ))
  .add('Controlled', () => (
    <Accordion
      styled={boolean('Styled', true)}
      open={select('Open', ['01', '02', '03'], '01')}
      onSectionClick={action()}
    >
      <AccordionSection summary="Section 1 summary" id="01">
        <p>test 123</p>
      </AccordionSection>
      <AccordionSection summary="Section 2 summary" id="02">
        <p>test 456</p>
      </AccordionSection>
      <AccordionSection summary="Section 3 summary" id="03">
        <p>test 789</p>
      </AccordionSection>
    </Accordion>
  ))
  .add('Controlled with multiple sections open', () => (
    <Accordion
      styled={boolean('Styled', true)}
      open={array('Open', ['01', '02'])}
      onSectionClick={action()}
    >
      <AccordionSection summary="Section 1 summary" id="01">
        <p>test 123</p>
      </AccordionSection>
      <AccordionSection summary="Section 2 summary" id="02">
        <p>test 456</p>
      </AccordionSection>
      <AccordionSection summary="Section 3 summary" id="03">
        <p>test 789</p>
      </AccordionSection>
    </Accordion>
  ));
