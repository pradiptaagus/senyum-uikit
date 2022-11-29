import React from 'react';
import type { Icon } from '../type';
import PackageIcon from './package.svg';

export const Package = (props: Icon) => (
  <PackageIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
