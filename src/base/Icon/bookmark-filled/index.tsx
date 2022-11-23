import React from 'react';
import type { Icon } from '../type';
import BookmarkFilledIcon from './bookmark-filled.svg';

export const BookmarkFilled = (props: Icon) => (
  <BookmarkFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
