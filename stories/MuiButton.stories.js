import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '@material-ui/core/Button';

storiesOf('MaterialUI Button', module)
  .add('Text', () => (
    <div style={{ backgroundColor: '#fafafa', padding: '1em' }}>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
    </div>
  ))
  .add('Contained', () => (
    <div style={{ backgroundColor: '#fafafa', padding: '1em' }}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </div>
  ))
  .add('Outlined', () => (
    <div style={{ backgroundColor: '#fafafa', padding: '1em' }}>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
    </div>
  ));
