import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button, Modal, ModalContent, ModalFooter } from '../src';
import { ModalDecorator } from './utils/decorators';

const stories = storiesOf('Modal', module);

stories
  .addDecorator(ModalDecorator)
  .add('Default', () => (
    <div>
      <Modal
        id="modal-id"
        onClose={action('Modal closing')}
        open={boolean('Open', true)}
        tagline={text('ModalHeader Tagline', '') || undefined}
        title={text('ModalHeader Title', 'Modal Header')}
        transitionStyle={select('Transition', [
          'fade-in-open',
          'slide-up-saving',
          'slide-up-open',
          'slide-down-cancel'
        ], 'fade-in-open')}
      >
        <ModalContent>
          <div>
            <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
            incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
            quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor
            consequat elit dolor adipisicing.</p>
            <button>Focusable</button>
          </div>
        </ModalContent>
        <ModalFooter directional={boolean('ModalFooter Directional', false)}>
          <Button
            flavor="brand"
            title="Save"
            onClick={action('Button \'Save\' clicked')}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  ));
