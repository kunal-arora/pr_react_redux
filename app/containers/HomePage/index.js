/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { makeSelectLoading } from 'containers/App/selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import H2 from 'components/H2';
import AllCategories from 'containers/AllCategories';
import { loadCategory } from './action';
// import H1 from 'components/H1';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="container">
        <H2>
          ustraa categories
          <button onClick={() => this.props.onLoadCategory()}>Load cat</button>
        </H2>
        <AllCategories />

      </div>
    );
  }
}

HomePage.propTypes = {
  onLoadCategory: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadCategory: () => dispatch(loadCategory()),
  };
}

export function mapStateToProps() {
  return {};
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
