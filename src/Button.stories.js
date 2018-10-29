import React from 'react';

import {storiesOf} from '@storybook/react'
import {Button} from './Button'

storiesOf('Button', module)
  .add('with background pink', () => (
    <Button bg="pink">Hello pink</Button>
  ))
  .add('with background yellow', () => (
    <Button bg="yellow">Hello  Yellow</Button>
  ))