import React from 'react';
import type { Icon } from '../type';
import TableClockDisabledFilledIcon from './table-clock-disabled-filled.svg';

export const TableClockDisabledFilled = (props: Icon) => (
  <TableClockDisabledFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
