import React from 'react';
import type { Icon } from '../type';
import PhonePauseFilledIcon from './phone-pause-filled.svg';

export const PhonePauseFilled = (props: Icon) => (
  <PhonePauseFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
