import React from 'react';
import { Modal, ModalHeader, ModalContent, ModalFooter, Backdrop, Button } from 'react-lds';

const modalLabel = 'example-large';

const onClick = () => {};

const ExampleLarge = () =>
  <div className="demo-modal">
    <Modal label={modalLabel} large open descriptionId="example-large">
      <ModalHeader title="Modal Header" />
      <ModalContent id="example-large">
        <div>
          <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
          incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
          quis. Cillum sunt ad dolore quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat
          consequat elit dolor adipisicing.</p> <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit
          officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum
          eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud ad veniam nulla aute est. Labore esse
          esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button neutral title="Cancel" onClick={onClick} />
        <Button brand title="Save" onClick={onClick} />
      </ModalFooter>
    </Modal>
    <Backdrop open />
  </div>;

export default ExampleLarge;
