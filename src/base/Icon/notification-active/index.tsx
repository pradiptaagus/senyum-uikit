import React from 'react';
import type { Icon } from '../type';
import NotificationActiveIcon from './notification-active.svg';

export const NotificationActive = (props: Icon) => (
  <NotificationActiveIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
