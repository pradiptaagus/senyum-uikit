import React from 'react';
import type { Icon } from '../type';
import EmailFilledIcon from './email-filled.svg';

export const EmailFilled = (props: Icon) => (
  <EmailFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
