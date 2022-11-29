import React from 'react';
import type { Icon } from '../type';
import MoneyCoinDollarFilledIcon from './money-coin-dollar-filled.svg';

export const MoneyCoinDollarFilled = (props: Icon) => (
  <MoneyCoinDollarFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
