import React from 'react';
import type { Icon } from '../type';
import VideoFilledIcon from './video-filled.svg';

export const VideoFilled = (props: Icon) => (
  <VideoFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
