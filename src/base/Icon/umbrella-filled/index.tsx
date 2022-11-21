import React from 'react';
import type { Icon } from '../type';
import UmbrellaFilledIcon from './umbrella-filled.svg';

export const UmbrellaFilled = (props: Icon) => (
  <UmbrellaFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
