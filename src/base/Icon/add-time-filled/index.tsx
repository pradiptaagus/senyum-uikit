import React from 'react';
import type { Icon } from '../type';
import AddTimeFilledIcon from './add-time-filled.svg';

export const AddTimeFilled = (props: Icon) => (
  <AddTimeFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
