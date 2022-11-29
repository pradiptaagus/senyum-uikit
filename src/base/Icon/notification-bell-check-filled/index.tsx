import React from 'react';
import type { Icon } from '../type';
import NotificationBellCheckFilledIcon from './notification-bell-check-filled.svg';

export const NotificationBellCheckFilled = (props: Icon) => (
  <NotificationBellCheckFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
