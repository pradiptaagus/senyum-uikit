import React from 'react';
import type { Icon } from '../type';
import UnfoldMoreIcon from './unfold-more.svg';

export const UnfoldMore = (props: Icon) => (
  <UnfoldMoreIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
