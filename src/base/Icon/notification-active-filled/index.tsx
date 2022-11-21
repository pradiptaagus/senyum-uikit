import React from 'react';
import type { Icon } from '../type';
import NotificationActiveFilledIcon from './notification-active-filled.svg';

export const NotificationActiveFilled = (props: Icon) => (
  <NotificationActiveFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
