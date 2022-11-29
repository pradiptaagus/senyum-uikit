import React from 'react';
import type { Icon } from '../type';
import EmailNotificationIcon from './email-notification.svg';

export const EmailNotification = (props: Icon) => (
  <EmailNotificationIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
