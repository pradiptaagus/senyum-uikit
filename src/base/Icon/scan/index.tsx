import React from 'react';
import type { Icon } from '../type';
import ScanIcon from './scan.svg';

export const Scan = (props: Icon) => (
  <ScanIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
