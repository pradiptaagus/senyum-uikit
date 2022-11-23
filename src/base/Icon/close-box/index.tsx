import React from 'react';
import type { Icon } from '../type';
import CloseBoxIcon from './close-box.svg';

export const CloseBox = (props: Icon) => (
  <CloseBoxIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
