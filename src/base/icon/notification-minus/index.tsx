import React from 'react';
import type { Icon } from '../type';
import NotificationCheckIcon from './notification-minus.svg';

export const NotificationMinus = (props: Icon) => (
  <NotificationCheckIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
