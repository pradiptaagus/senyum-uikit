import React from 'react';
import type { Icon } from '../type';
import NotificationNewIcon from './notification-new.svg';

export const NotificationNew = (props: Icon) => (
  <NotificationNewIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
