import React from 'react';

import PropTypes from 'prop-types';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import '@material/button/dist/mdc.button.css';

import Navbar from '../components/Navbar/Navbar';
import Root from './Root/Root';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import { ROUTES } from '../utils/routes';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Route exact path={ROUTES.root()} component={Root} />
        <Route exact path={ROUTES.about()} component={About} />
        <Route exact path={ROUTES.contacts()} component={Contacts} />
      </main>
    </Router>
  )
}

App.propTypes = {
  theme: PropTypes.object,
};

App.defaultProps = {
  theme: {},
};

export default React.memo(App);