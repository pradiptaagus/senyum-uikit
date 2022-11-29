import React from 'react';
import type { Icon } from '../type';
import PictureImage1Icon from './picture-image-1.svg';

export const PictureImage1 = (props: Icon) => (
  <PictureImage1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
