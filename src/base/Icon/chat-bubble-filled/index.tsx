import React from 'react';
import type { Icon } from '../type';
import ChatBubbleFilledIcon from './chat-bubble-filled.svg';

export const ChatBubbleFilled = (props: Icon) => (
  <ChatBubbleFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
