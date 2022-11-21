import React from 'react';
import type { Icon } from '../type';
import EmailAttachFilledIcon from './email-attach-filled.svg';

export const EmailAttachFilled = (props: Icon) => (
  <EmailAttachFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
