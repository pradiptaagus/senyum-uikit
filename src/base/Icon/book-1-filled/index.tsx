import React from 'react';
import type { Icon } from '../type';
import Book1FilledIcon from './book-1-filled.svg';

export const Book1Filled = (props: Icon) => (
  <Book1FilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
