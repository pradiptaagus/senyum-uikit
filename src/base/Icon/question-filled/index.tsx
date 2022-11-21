import React from 'react';
import type { Icon } from '../type';
import QuestionFilledIcon from './question-filled.svg';

export const QuestionFilled = (props: Icon) => (
  <QuestionFilledIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
