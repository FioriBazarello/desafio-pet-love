import React from 'react';
import cx from 'classnames';

import './index.css';

const Input = ({ error, value, onChange, ...otherProps }) => {
  const inputClasses = cx({
    'input': true,
    'input--state-error': error && error !== '',
  });

  return (
    <div className={inputClasses}>
      <input value={value} onChange={onChange} {...otherProps}/>
      {
        error && error !== '' &&
        <p className="error">{error}</p>
      }
    </div>
  );
}

export default Input;