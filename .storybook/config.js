import { addDecorator, configure } from '@storybook/react';
import { setDefaults, withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withContext, withSpacing } from '../stories/utils/helpers';

// addon-info
setDefaults({
  header: false,
  inline: true,
  source: true,
  propTables: [/* Components used in story */],
  propTablesExclude: [],
  maxPropsIntoLine: 1, // Max props to display per line in source code
  maxPropObjectKeys: 20,
  maxPropArrayLength: 20,
  maxPropStringLength: 100,
});

const req = require.context('../stories', true, /.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

addDecorator((story, context) => withInfo('Usage')(story)(context));
addDecorator(withContext);
addDecorator(withSpacing);
addDecorator(withKnobs);

configure(loadStories, module);
