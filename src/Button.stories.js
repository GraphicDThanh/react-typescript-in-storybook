import React from 'react';
import { wInfo } from './utils'
import { storiesOf } from '@storybook/react'
import {Button} from './Button'
import { text, color, boolean } from '@storybook/addon-knobs/react';
storiesOf('Button', module)
  .addWithJSX('with background pink', wInfo(`
    description

    ~~~js
    <Button>This is</Button>
    ~~~
    `)(() => (
    <Button bg={text('bg', 'pink')}>Hello pink</Button>
  )))
  .addWithJSX('with background yellow', () => (
    <Button disabled={boolean('disabled', false)}>
      {text('text', 'Helo world')}
    </Button>
  ))