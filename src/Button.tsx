import * as React from 'react';
import './Button.css';

export interface Props {
  /** This dictates what the button content */
  children: React.ReactNode;
  /** This dictates what the button doing when clicked */
  onClick: () => void;
  /**
   * Disable on click
   * @default false
   * */
  disabled: boolean;
}

const noop = () => {};

export const Button = (props: Props) => {
  const { children, onClick, disabled = false } = props;
  const disabledClass = disabled ? 'Button_disabled' : '';

  return (
    <div
      className={`Button ${disabledClass}`}
      onClick={!disabled ? onClick : noop}
    >
      <span>{children}</span>
    </div>
  )
}