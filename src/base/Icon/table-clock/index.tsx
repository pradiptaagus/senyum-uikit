import React from 'react';
import type { Icon } from '../type';
import TableClockIcon from './table-clock.svg';

export const TableClock = (props: Icon) => (
  <TableClockIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
