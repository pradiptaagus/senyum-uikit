import React from 'react';
import type { Icon } from '../type';
import UploadIcon from './upload.svg';

export const Upload = (props: Icon) => (
  <UploadIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
