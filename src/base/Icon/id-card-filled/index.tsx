import React from 'react';
import type { Icon } from '../type';
import IdCardFilledIcon from './id-card-filled.svg';

export const IdCardFilled = (props: Icon) => (
  <IdCardFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
