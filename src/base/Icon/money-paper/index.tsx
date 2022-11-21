import React from 'react';
import type { Icon } from '../type';
import MoneyPaperIcon from './money-paper.svg';

export const MoneyPaper = (props: Icon) => (
  <MoneyPaperIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
