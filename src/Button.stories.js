import React from 'react';
import { wInfo } from './utils'
import { storiesOf } from '@storybook/react'
import {Button} from './Button'

storiesOf('Button', module)
  .addWithJSX('with background pink', wInfo(`
    description

    ~~~js
    <Button>This is</Button>
    ~~~
    `)(() => (
    <Button bg="pink">Hello pink</Button>
  )))
  .addWithJSX('with background yellow', () => (
    <Button bg="yellow">Hello  Yellow</Button>
  ))