import React from 'react';
import type { Icon } from '../type';
import MoneyPaperFilledIcon from './money-paper-filled.svg';

export const MoneyPaperFilled = (props: Icon) => (
  <MoneyPaperFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
