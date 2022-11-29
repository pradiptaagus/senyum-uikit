import React from 'react';
import type { Icon } from '../type';
import PictureImage2FilledIcon from './picture-image-2-filled.svg';

export const PictureImage2Filled = (props: Icon) => (
  <PictureImage2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
