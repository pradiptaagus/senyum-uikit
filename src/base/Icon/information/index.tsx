import React from 'react';
import type { Icon } from '../type';
import InformationIcon from './information.svg';

export const Information = (props: Icon) => (
  <InformationIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
