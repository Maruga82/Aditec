import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">E-Mail</Link>
        </li>
        <li>
          <Link to="#0">Telefono</Link>
        </li>
        <li>
          <Link to="#0">Indirizzo</Link>
        </li>
        <li>
          <Link to="#0">Supporto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;