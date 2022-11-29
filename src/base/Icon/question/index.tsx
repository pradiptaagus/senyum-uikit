import React from 'react';
import type { Icon } from '../type';
import QuestionIcon from './question.svg';

export const Question = (props: Icon) => (
  <QuestionIcon
    width={props.size || props.width}
    height={props.size || props.height}
    color={props.color}
    {...props.style}
  />
);
