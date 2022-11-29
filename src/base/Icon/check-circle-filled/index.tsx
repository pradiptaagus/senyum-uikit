import React from 'react';
import type { Icon } from '../type';
import CheckCircleFilledIcon from './check-circle-filled.svg';

export const CheckCircleFilled = (props: Icon) => (
  <CheckCircleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
