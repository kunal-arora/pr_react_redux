import React from 'react';
import Navigation from './Navigation';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar
          title="Navigation">
        </AppBar>
      </div>
    );
  }
}

export default Header;
