import React from 'react';
import type { Icon } from '../type';
import ZoomOutFilledIcon from './zoom-out-filled.svg';

export const ZoomOutFilled = (props: Icon) => (
  <ZoomOutFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
