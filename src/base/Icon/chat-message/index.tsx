import React from 'react';
import type { Icon } from '../type';
import ChatMessageIcon from './chat-message.svg';

export const ChatMessage = (props: Icon) => (
  <ChatMessageIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
