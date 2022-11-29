import React from 'react';
import type { Icon } from '../type';
import ChatMessageForwardIcon from './chat-message-forward.svg';

export const ChatMessageForward = (props: Icon) => (
  <ChatMessageForwardIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
