import React from 'react';
import type { Icon } from '../type';
import MortageIcon from './mortage.svg';

export const Mortage = (props: Icon) => (
  <MortageIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
