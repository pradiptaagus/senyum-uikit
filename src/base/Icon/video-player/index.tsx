import React from 'react';
import type { Icon } from '../type';
import VideoPlayerIcon from './video-player.svg';

export const VideoPlayer = (props: Icon) => (
  <VideoPlayerIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
