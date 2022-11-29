import React from 'react';
import type { Icon } from '../type';
import EmailAlternateIcon from './email-alternate.svg';

export const EmailAlternate = (props: Icon) => (
  <EmailAlternateIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
