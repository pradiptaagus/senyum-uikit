import React from 'react';
import type { Icon } from '../type';
import Book1Icon from './book-1.svg';

export const Book1 = (props: Icon) => (
  <Book1Icon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
