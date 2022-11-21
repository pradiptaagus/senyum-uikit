import React from 'react';
import type { Icon } from '../type';
import PhoneInTalkFilledIcon from './phone-in-talk-filled.svg';

export const PhoneInTalkFilled = (props: Icon) => (
  <PhoneInTalkFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
