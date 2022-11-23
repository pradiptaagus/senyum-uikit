import React from 'react';
import type { Icon } from '../type';
import PhonePauseIcon from './phone-pause.svg';

export const PhonePause = (props: Icon) => (
  <PhonePauseIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
