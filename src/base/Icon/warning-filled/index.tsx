import React from 'react';
import type { Icon } from '../type';
import WarningFilledIcon from './warning-filled.svg';

export const WarningFilled = (props: Icon) => (
  <WarningFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
