import React from 'react';
import type { Icon } from '../type';
import EmailIcon from './email.svg';

export const Email = (props: Icon) => (
  <EmailIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
