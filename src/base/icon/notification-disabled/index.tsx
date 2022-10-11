import React from 'react';
import type { Icon } from '../type';
import NotificationDisabledIcon from './notification-disabled.svg';

export const NotificationDisabled = (props: Icon) => (
  <NotificationDisabledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
