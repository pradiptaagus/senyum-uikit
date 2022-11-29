import React from 'react';
import type { Icon } from '../type';
import AddTimeIcon from './add-time.svg';

export const AddTime = (props: Icon) => (
  <AddTimeIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
