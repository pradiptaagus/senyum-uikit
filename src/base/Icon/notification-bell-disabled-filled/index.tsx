import React from 'react';
import type { Icon } from '../type';
import NotificationBellDisabledFilledIcon from './notification-bell-disabled-filled.svg';

export const NotificationBellDisabledFilled = (props: Icon) => (
  <NotificationBellDisabledFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
