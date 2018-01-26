import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import { Carousel, CarouselPanel } from '../src';

const stories = storiesOf('Carousel', module);

stories
  .add('Default', () => (
    <div style={{ width: '480px', maxWidth: '100%' }}>
      <Carousel
        autoPlay={boolean('Auto play', false)}
        autoPlayActive={boolean('Auto play active', false)}
        autoPlayInterval={number('Auto play interval', 4000)}
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
    </div>
  ));
