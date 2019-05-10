import React from 'react';

import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

function Navbar() {
  return (
    <header>
      <NavLink to={ROUTES.root()}>HOME</NavLink>
      <NavLink to={ROUTES.about()}>ABOUT</NavLink>
      <NavLink to={ROUTES.contacts()}>CONTACTS</NavLink>
    </header>
  )
}

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default React.memo(Navbar);