import React from 'react';
import type { Icon } from '../type';
import AddPerson2Icon from './add-person-2.svg';

export const AddPerson2 = (props: Icon) => (
  <AddPerson2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
