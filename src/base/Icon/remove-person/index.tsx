import React from 'react';
import type { Icon } from '../type';
import RemovePerson1Icon from './remove-person.svg';

export const RemovePerson = (props: Icon) => (
  <RemovePerson1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
