import React from 'react';
import type { Icon } from '../type';
import EmailCheckFilledIcon from './email-check-filled.svg';

export const EmailCheckFilled = (props: Icon) => (
  <EmailCheckFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
