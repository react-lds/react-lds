import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, select, text } from '@storybook/addon-knobs';
import { Box, Column, Grid, Container } from '../src';
import { getThemes } from './utils/helpers';

const stories = storiesOf('Grid System', module);

const sizeOptions = [
  'xxx-small',
  'xx-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  'xx-large',
];

const containerSizes = [
  '',
  'small',
  'medium',
  'large',
  'x-large'
];

const alignOptions = ['', 'center', 'end', 'space', 'spread'];
const vAlignOptions = ['center', 'end', 'start'];

stories
  .add('Automatic sizing', () => (
    <Grid
      className="slds-m-bottom--large"
      flavor={array('Grid Flavor', [])}
      gutters={select('Gutters', sizeOptions, 'small')}
      align={select('Horizontal Alignment', alignOptions) || undefined}
      verticalAlign={select('Vertical Alignment', vAlignOptions, 'start')}
    >
      <Column flavor={array('Column Flavor', [])}>
        <Box theme={getThemes('Box Theme')}>col 1 lalalalallala</Box>
      </Column>
      <Column flavor={array('Column Flavor', [])}>
        <Box className="pb-test" theme={getThemes('Box Theme')}>col 2 lololololollo</Box>
      </Column>
    </Grid>
  ))
  .add('Manual sizing', () => (
    <Grid
      flavor={array('Grid Flavor', [])}
      pullPadding="small"
      align={select('Horizontal Alignment', alignOptions) || undefined}
      verticalAlign={select('Vertical Alignment', vAlignOptions, 'start')}
      wrap
    >
      <Column
        className="slds-m-bottom--large slds-p-horizontal_small"
        variation={array('Column Variation', [])}
        sizeOf={text('SizeOf Column 1', '1-1')}
      >
        <Box theme={getThemes('Box Theme')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.</Box>
      </Column>
      <Column
        className="slds-m-bottom--large slds-p-horizontal_small"
        sizeOf={text('SizeOf Column 2', '1-2')}
        medium-sizeOf={text('Medium-sizeOf Column 2', '5-6')}
        large-sizeOf={text('Large-sizeOf Column 2', '8-12')}
      >
        <Box theme={getThemes('Box Theme')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.</Box>
      </Column>
      <Column
        className="slds-m-bottom--large slds-p-horizontal_small"
        sizeOf={text('SizeOf Column 3', '1-2')}
        medium-sizeOf={text('Medium-sizeOf Column 3', '1-6')}
        large-sizeOf={text('Large-sizeOf Column 3', '4-12')}
      >
        <Box theme={getThemes('Box Theme')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Box>
      </Column>
      <Column
        className="slds-m-bottom--large slds-p-horizontal_small"
        sizeOf={text('SizeOf Column 4', '1-2')}
        medium-sizeOf={text('Medium-sizeOf Column 4', '1-2')}
        large-sizeOf={text('Large-sizeOf Column 4', '1-3')}
      >
        <Box theme={getThemes('Box Theme')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.</Box>
      </Column>
    </Grid>
  ))
  .add('Containers', () => (
    <div>
      <Container
        flavor={array('Flavor0', [])}
        size={select('Size0', containerSizes, 'small') || undefined}
      >
        <Box theme="default" size="small">Max Width: 480px</Box>
      </Container>
      <Container
        flavor={array('Flavor1', [])}
        className="slds-m-top--medium"
        size={select('Size1', containerSizes, 'medium') || undefined}
      >
        <Box theme="default" size="small">Max Width: 768px</Box>
      </Container>
      <Container
        flavor={array('Flavor2', [])}
        className="slds-m-top--medium"
        size={select('Size2', containerSizes, 'large') || undefined}
      >
        <Box theme="default" size="small">Max Width: 1024px</Box>
      </Container>
      <Container
        flavor={array('Flavor3', [])}
        className="slds-m-top--medium"
        size={select('Size3', containerSizes, 'x-large') || undefined}
      >
        <Box theme="default" size="small">Max Width: 1280px</Box>
      </Container>
      <Container
        flavor={array('Flavor4', ['fluid'])}
        className="slds-m-top--medium"
        size={select('Size4', containerSizes, '') || undefined}
      >
        <Box theme="default" size="small">Width: 100%</Box>
      </Container>
      <Container
        flavor={array('Flavor5', ['fluid'])}
        className="slds-m-top--medium"
        size={select('Size5', containerSizes, 'small') || undefined}
      >
        <Box theme="default" size="small">Left Aligned</Box>
      </Container>
      <Container
        flavor={array('Flavor6', ['center'])}
        className="slds-m-top--medium"
        size={select('Size6', containerSizes, 'small') || undefined}
      >
        <Box theme="default" size="small">Center Aligned</Box>
      </Container>
      <Container
        flavor={array('Flavor7', ['right'])}
        className="slds-m-top--medium"
        size={select('Size7', containerSizes, 'small') || undefined}
      >
        <Box theme="default" size="small">Right Aligned</Box>
      </Container>
    </div>
  ));
