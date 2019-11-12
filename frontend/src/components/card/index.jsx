import React from 'react';
import cx from 'classnames';

import './index.css';

const Card = ({ children, className, ...otherProps }) => {
  const cardClasses = cx({
    'card': true,
    [className]: className,
  });

  return (
    <div className={cardClasses} {...otherProps}>{children}</div>
  )
}

export default Card;