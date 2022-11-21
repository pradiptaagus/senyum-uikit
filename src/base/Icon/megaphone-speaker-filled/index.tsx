import React from 'react';
import type { Icon } from '../type';
import MegaphoneSpeakerFilledIcon from './megaphone-speaker-filled.svg';

export const MegaphoneSpeakerFilled = (props: Icon) => (
  <MegaphoneSpeakerFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
