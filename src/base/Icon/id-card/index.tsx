import React from 'react';
import type { Icon } from '../type';
import IdCardIcon from './id-card.svg';

export const IdCard = (props: Icon) => (
  <IdCardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
