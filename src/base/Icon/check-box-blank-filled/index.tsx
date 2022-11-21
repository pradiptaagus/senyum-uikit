import React from 'react';
import type { Icon } from '../type';
import CheckBoxBlankFilledIcon from './check-box-blank-filled.svg';

export const CheckBoxBlankFilled = (props: Icon) => (
  <CheckBoxBlankFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
