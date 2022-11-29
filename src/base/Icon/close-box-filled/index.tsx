import React from 'react';
import type { Icon } from '../type';
import CloseBoxFilledIcon from './close-box-filled.svg';

export const CloseBoxFilled = (props: Icon) => (
  <CloseBoxFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
