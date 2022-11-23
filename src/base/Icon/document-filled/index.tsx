import React from 'react';
import type { Icon } from '../type';
import DocumentFilledIcon from './document-filled.svg';

export const DocumentFilled = (props: Icon) => (
  <DocumentFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
