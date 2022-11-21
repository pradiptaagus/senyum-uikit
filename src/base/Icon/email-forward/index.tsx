import React from 'react';
import type { Icon } from '../type';
import EmailForwardIcon from './email-forward.svg';

export const EmailForward = (props: Icon) => (
  <EmailForwardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
