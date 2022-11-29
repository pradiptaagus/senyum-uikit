import React from 'react';
import type { Icon } from '../type';
import Tax1Icon from './tax-1.svg';

export const Tax1 = (props: Icon) => (
  <Tax1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
