import React from 'react';
import type { Icon } from '../type';
import EuroIcon from './euro.svg';

export const Euro = (props: Icon) => (
  <EuroIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
