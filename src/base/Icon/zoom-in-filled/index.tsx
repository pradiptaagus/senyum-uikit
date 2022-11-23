import React from 'react';
import type { Icon } from '../type';
import ZoomInFilledIcon from './zoom-in-filled.svg';

export const ZoomInFilled = (props: Icon) => (
  <ZoomInFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
