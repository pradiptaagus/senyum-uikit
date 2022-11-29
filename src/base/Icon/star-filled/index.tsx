import React from 'react';
import type { Icon } from '../type';
import StarFilledIcon from './star-filled.svg';

export const StarFilled = (props: Icon) => (
  <StarFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
