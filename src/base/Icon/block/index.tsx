import React from 'react';
import type { Icon } from '../type';
import BlockIcon from './block.svg';

export const Block = (props: Icon) => (
  <BlockIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
