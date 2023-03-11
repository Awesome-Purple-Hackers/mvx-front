import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  newTab?: boolean;
  link?: string;
  customClassName?: string;
  children?: any;
}

const Button = ({
  onClick,
  label,
  newTab,
  link,
  customClassName,
  children
}: ButtonProps) => {
  return (
    <a
      href={link}
      target={newTab ? '_blank' : ''}
      rel='noreferrer'
      onClick={onClick}
      className={`btn ${customClassName} `}
    >
      {children}
    </a>
  );
};

export default Button;
