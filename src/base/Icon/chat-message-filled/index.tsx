import React from 'react';
import type { Icon } from '../type';
import ChatMessageFilledIcon from './chat-message-filled.svg';

export const ChatMessageFilled = (props: Icon) => (
  <ChatMessageFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
