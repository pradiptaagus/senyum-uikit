import React from 'react';
import type { Icon } from '../type';
import TableClockDisabledIcon from './table-clock-disabled.svg';
  
  export const TableClockDisabled = (props: Icon) => (
    <TableClockDisabledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);