import React from 'react';
import type { Icon } from '../type';
import AppsFilledIcon from './apps-filled.svg';

export const AppsFilled = (props: Icon) => (
  <AppsFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
