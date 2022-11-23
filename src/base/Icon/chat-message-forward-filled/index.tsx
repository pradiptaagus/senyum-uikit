import React from 'react';
import type { Icon } from '../type';
import ChatMessageForwardFilledIcon from './chat-message-forward-filled.svg';

export const ChatMessageForwardFilled = (props: Icon) => (
  <ChatMessageForwardFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
