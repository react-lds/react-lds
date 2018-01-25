import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Carousel, CarouselPanel, Button } from '../src';

const stories = storiesOf('Carousel', module);

stories
  .add('Default', () => (
    <Carousel
      icon={text('Icon', 'contact')}
      sprite={text('Sprite', 'standard')}
      title={text('Title', 'Base Carousel')}
      headerRight={<Button flavor="neutral" title="New" onClick={action('click')} />}
      body="Body would be here"
      footer="Footer"
    >
      <CarouselPanel id="panel-1" imageUrl="/assets/images/carousel/carousel-01.jpg" title="Visit App Exchange">
        Extend Salesforce with the #1 business marketplace.
      </CarouselPanel>
      <CarouselPanel id="panel-2" imageUrl="/assets/images/carousel/carousel-02.jpg" title="Click to Customize">
        Use the Object Manager to add fields, build layouts, and more.
      </CarouselPanel>
      <CarouselPanel id="panel-3" imageUrl="/assets/images/carousel/carousel-03.jpg" title="Download SalesforceA">
        Get the mobile app that&#x27;s just for Salesforce admins.
      </CarouselPanel>
    </Carousel>
  ));
