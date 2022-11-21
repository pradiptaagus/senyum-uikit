import React from 'react';
import type { Icon } from '../type';
import AppsIcon from './apps.svg';

export const Apps = (props: Icon) => (
  <AppsIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
