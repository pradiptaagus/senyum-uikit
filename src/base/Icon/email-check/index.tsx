import React from 'react';
import type { Icon } from '../type';
import EmailCheckIcon from './email-check.svg';

export const EmailCheck = (props: Icon) => (
  <EmailCheckIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
