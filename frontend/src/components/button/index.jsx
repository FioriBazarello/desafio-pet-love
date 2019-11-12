import React from 'react';
import './index.css';

const Button = ({ isLoading, children, onClick, ...otherProps }) => {
  return (
    <button {...otherProps} className='button' onClick={onClick}>
    {
      isLoading
      ? 'Buscando...'
      : children
    }
    </button>
  );
}

export default Button;