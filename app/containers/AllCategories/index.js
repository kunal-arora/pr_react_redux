import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelect } from 'containers/HomePage/selectors';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

export class AllCategories extends React.PureComponent {
    render() {

      const item = this.props.myData;

        // console.log("all cat component");
        // console.log(this.props);
        // if (!this.props.data) {
        //     return (<div>not clicked</div>);
        // }
        return (
            <div>
                <h3>{item.body}</h3>
            </div>
        );
    }
}


AllCategories.propTypes = {
  myData: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.any,
  ]),
};
const mapStateToProps = createStructuredSelector({
  myData: makeSelect(),
});

export default connect(mapStateToProps)(AllCategories);
