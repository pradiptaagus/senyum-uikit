import React from 'react';
import type { Icon } from '../type';
import PictureImage1FilledIcon from './picture-image-1-filled.svg';

export const PictureImage1Filled = (props: Icon) => (
  <PictureImage1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
