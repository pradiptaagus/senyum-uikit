import React from 'react';
import type { Icon } from '../type';
import EmailNotificationFilledIcon from './email-notification-filled.svg';

export const EmailNotificationFilled = (props: Icon) => (
  <EmailNotificationFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
