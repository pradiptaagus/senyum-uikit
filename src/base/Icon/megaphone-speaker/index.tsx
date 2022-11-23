import React from 'react';
import type { Icon } from '../type';
import MegaphoneSpeakerIcon from './megaphone-speaker.svg';

export const MegaphoneSpeaker = (props: Icon) => (
  <MegaphoneSpeakerIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
