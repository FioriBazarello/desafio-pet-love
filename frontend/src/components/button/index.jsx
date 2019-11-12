import React from 'react';
import './index.css';

const Button = ({ isLoading, children, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
    {
      isLoading
      ? 'Buscando...'
      : children
    }
    </button>
  );
}

export default Button;