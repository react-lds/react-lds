import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Backdrop,
  Button,
 Notification,
  Grid,
  Column,
  Icon,
} from 'react-lds';

const ExampleModalToast = () => (
  <div className="demo-modal">
    <Modal large open>
      <ModalHeader title="Modal Header">
        <Notification toast title="Error" theme="error">
          <Grid className="slds-notify__content">
            <Column className="slds-m-right--small" no-flex>
              <Icon sprite="utility" icon="warning" size="small" />
            </Column>
            <Column className="slds-m-right--small">
              <h2 className="slds-text-heading--small">
                You&#x27;ve encountered some errors when trying to save edits to Samuel Smith.
              </h2>
            </Column>
          </Grid>
        </Notification>
      </ModalHeader>
      <ModalContent>
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
        <Button neutral title="Cancel" />
        <Button brand title="Save" />
      </ModalFooter>
    </Modal>
    <Backdrop open />
  </div>
);

export default ExampleModalToast;
