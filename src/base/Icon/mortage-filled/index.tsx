import React from 'react';
import type { Icon } from '../type';
import MortageFilledIcon from './mortage-filled.svg';

export const MortageFilled = (props: Icon) => (
  <MortageFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
