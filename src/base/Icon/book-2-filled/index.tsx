import React from 'react';
import type { Icon } from '../type';
import Book2FilledIcon from './book-2-filled.svg';

export const Book2Filled = (props: Icon) => (
  <Book2FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
