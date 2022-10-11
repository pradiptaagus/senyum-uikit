import React from 'react';
import type { Icon } from '../type';
import ZoomInIcon from './zoom-in.svg';

export const ZoomIn = (props: Icon) => (
  <ZoomInIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
