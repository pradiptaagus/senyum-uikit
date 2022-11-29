import React from 'react';
import type { Icon } from '../type';
import MoneyCoinDollarIcon from './money-coin-dollar.svg';

export const MoneyCoinDollar = (props: Icon) => (
  <MoneyCoinDollarIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
