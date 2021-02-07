import e from 'express';
import React from 'react';
import { useTask } from '../../hooks/task';

export interface ButtonProps {
  className?: string;
  text: string;
  activeText: string;
  action: () => any;
  disabled?: boolean;
}

export default ({ className, text, activeText, action, disabled }: ButtonProps) => {
  const { trigger, isActive } = useTask(action);

  return (
    <button className={className} disabled={disabled || isActive} onClick={trigger}>
      {isActive ? activeText : text}
    </button>
  );
};
