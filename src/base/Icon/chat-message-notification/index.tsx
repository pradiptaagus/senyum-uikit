import React from 'react';
import type { Icon } from '../type';
import ChatMessageNotificationIcon from './chat-message-notification.svg';

export const ChatMessageNotification = (props: Icon) => (
  <ChatMessageNotificationIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
