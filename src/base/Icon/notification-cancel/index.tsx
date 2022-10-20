import React from 'react';
import type { Icon } from '../type';
import NotificationCancelIcon from './notification-cancel.svg';

export const NotificationCancel = (props: Icon) => (
  <NotificationCancelIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
