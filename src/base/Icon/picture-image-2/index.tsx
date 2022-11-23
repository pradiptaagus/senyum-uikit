import React from 'react';
import type { Icon } from '../type';
import PictureImage2Icon from './picture-image-2.svg';
  
  export const PictureImage2 = (props: Icon) => (
    <PictureImage2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);