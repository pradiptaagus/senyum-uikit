import React from 'react';
import type { Icon } from '../type';
import ProcessFilledIcon from './process-filled.svg';

export const ProcessFilled = (props: Icon) => (
  <ProcessFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
