import React from 'react';
import type { Icon } from '../type';
import BookmarkIcon from './bookmark.svg';

export const Bookmark = (props: Icon) => (
  <BookmarkIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
