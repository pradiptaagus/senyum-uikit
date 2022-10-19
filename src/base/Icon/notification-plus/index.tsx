import React from 'react';
import type { Icon } from '../type';
import NotificationPlusIcon from './notification-plus.svg';

export const NotificationPlus = (props: Icon) => (
  <NotificationPlusIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
