import React from 'react';
import type { Icon } from '../type';
import PhoneInTalkIcon from './phone-in-talk.svg';

export const PhoneInTalk = (props: Icon) => (
  <PhoneInTalkIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
