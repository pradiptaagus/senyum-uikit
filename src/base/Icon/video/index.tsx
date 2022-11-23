import React from 'react';
import type { Icon } from '../type';
import VideoIcon from './video.svg';
  
  export const Video = (props: Icon) => (
    <VideoIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);