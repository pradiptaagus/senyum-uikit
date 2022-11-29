import React from 'react';
import type { Icon } from '../type';
import ChatMessageNotificationFilledIcon from './chat-message-notification-filled.svg';

export const ChatMessageNotificationFilled = (props: Icon) => (
  <ChatMessageNotificationFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
