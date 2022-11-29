import React from 'react';
import type { Icon } from '../type';
import Book2Icon from './book-2.svg';

export const Book2 = (props: Icon) => (
  <Book2Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
