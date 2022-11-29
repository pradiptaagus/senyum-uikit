import React from 'react';
import type { Icon } from '../type';
import TableClockFilledIcon from './table-clock-filled.svg';

export const TableClockFilled = (props: Icon) => (
  <TableClockFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
