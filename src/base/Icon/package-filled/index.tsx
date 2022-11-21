import React from 'react';
import type { Icon } from '../type';
import PackageFilledIcon from './package-filled.svg';

export const PackageFilled = (props: Icon) => (
  <PackageFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
