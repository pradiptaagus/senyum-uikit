import React from 'react';
import type { Icon } from '../type';
import PresentIcon from './present.svg';

export const Present = (props: Icon) => (
  <PresentIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
