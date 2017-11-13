import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Backdrop, Button, Modal, ModalContent, ModalFooter, ModalHeader } from '../src';
import { ModalDecorator } from './utils/decorators';

const stories = storiesOf('Modal', module);

stories
  .addDecorator(ModalDecorator)
  .add('Default', () => (
    <div>
      <Modal
        descriptionId="example-normal"
        dialog={boolean('Modal Dialog', false) || undefined}
        label={text('Modal Label', 'example-normal')}
        large={boolean('Modal Large', false) || undefined}
        open={boolean('Modal & Backdrop Open', true) || undefined}
        prompt={boolean('Modal Prompt', false) || undefined}
      >
        <ModalHeader
          tagline={text('ModalHeader Tagline', '') || undefined}
          title={text('ModalHeader Title', 'Modal Header')}
          uncloseable={boolean('ModalHeader Uncloseable', false) || undefined}
          onClickClose={action('Button \'Close\' clicked')}
        />
        <ModalContent
          id="example-normal"
          menu={boolean('ModalContent Menu', false) || undefined}
        >
          <div>
            <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
            incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
            quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor
            consequat elit dolor adipisicing.</p> <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
            officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum
            eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute est. Labore
            esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
          </div>
        </ModalContent>
        <ModalFooter
          defaultTheme={boolean('ModalFooter DefaultTheme') || undefined}
          directional={boolean('ModalFooter Directional', false) || undefined}
        >
          <Button flavor="neutral" title="Cancel" onClick={action('Button \'Cancel\' clicked')} />
          <Button flavor="brand" title="Save" onClick={action('Button \'Save\' clicked')} />
        </ModalFooter>
      </Modal>
      <Backdrop open={boolean('Modal & Backdrop Open', true) || undefined} />
    </div>
  ));
