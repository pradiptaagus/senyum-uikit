import React from 'react';
import type { Icon } from '../type';
import EmailForwardFilledIcon from './email-forward-filled.svg';

export const EmailForwardFilled = (props: Icon) => (
  <EmailForwardFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
