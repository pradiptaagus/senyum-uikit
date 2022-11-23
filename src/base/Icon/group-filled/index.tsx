import React from 'react';
import type { Icon } from '../type';
import GroupFilledIcon from './group-filled.svg';

export const GroupFilled = (props: Icon) => (
  <GroupFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
