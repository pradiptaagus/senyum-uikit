import React from 'react';
import type { Icon } from '../type';
import ChatMessageReadIcon from './chat-message-read.svg';

export const ChatMessageRead = (props: Icon) => (
  <ChatMessageReadIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
