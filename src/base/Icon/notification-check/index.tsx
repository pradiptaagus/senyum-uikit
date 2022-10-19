import React from 'react';
import type { Icon } from '../type';
import NotificationCheckIcon from './notification-check.svg';

export const NotificationCheck = (props: Icon) => (
  <NotificationCheckIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
