import React from 'react';
import Navigation from './Navigation';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Navigation>
          <p>Navigation</p>
        </Navigation>
      </div>
    );
  }
}

export default Header;
