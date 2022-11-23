import React from 'react';
import type { Icon } from '../type';
import ChatMessageReadFilledIcon from './chat-message-read-filled.svg';

export const ChatMessageReadFilled = (props: Icon) => (
  <ChatMessageReadFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
