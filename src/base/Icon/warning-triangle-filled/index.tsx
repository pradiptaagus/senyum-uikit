import React from 'react';
import type { Icon } from '../type';
import WarningTriangleFilledIcon from './warning-triangle-filled.svg';

export const WarningTriangleFilled = (props: Icon) => (
  <WarningTriangleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
