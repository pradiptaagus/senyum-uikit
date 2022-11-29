import React from 'react';
import type { Icon } from '../type';
import ChatBubbleIcon from './chat-bubble.svg';

export const ChatBubble = (props: Icon) => (
  <ChatBubbleIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
