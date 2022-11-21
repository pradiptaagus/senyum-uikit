import React from 'react';
import type { Icon } from '../type';
import NotificationBellCancelFilledIcon from './notification-bell-cancel-filled.svg';

export const NotificationBellCancelFilled = (props: Icon) => (
  <NotificationBellCancelFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
