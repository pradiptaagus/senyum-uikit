import React from 'react';
import type { Icon } from '../type';
import NotificationBellMinusFilledIcon from './notification-bell-minus-filled.svg';

export const NotificationBellMinusFilled = (props: Icon) => (
  <NotificationBellMinusFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
