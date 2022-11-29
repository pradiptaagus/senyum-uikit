import React from 'react';
import type { Icon } from '../type';
import GroupIcon from './group.svg';

export const Group = (props: Icon) => (
  <GroupIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
