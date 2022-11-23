import React from 'react';
import type { Icon } from '../type';
import EmailAttachIcon from './email-attach.svg';

export const EmailAttach = (props: Icon) => (
  <EmailAttachIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
