import React from 'react';
import type { Icon } from '../type';
import InformationFilledIcon from './information-filled.svg';
  
  export const InformationFilled = (props: Icon) => (
    <InformationFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
    />
);