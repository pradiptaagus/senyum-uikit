import React from 'react';
import type { Icon } from '../type';
import FaceScanIcon from './face-scan.svg';

export const FaceScan = (props: Icon) => (
  <FaceScanIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
