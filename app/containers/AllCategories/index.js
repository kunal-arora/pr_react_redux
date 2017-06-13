import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelect } from 'containers/HomePage/selectors';
import CategoryList from 'components/CategoryList';
import FlexBox from 'components/FlexBox';
import { loadCategoryProduct } from './action';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

export class AllCategories extends React.PureComponent {
    render() {


      const item = this.props.myData;
        // console.log(item);
        var namesList = false;
          if (item) {
            namesList = item.map(function (it, index) {
              return (
                <CategoryList
                  key={index}
                  onClick={() => this.props.onLoadCategoryProduct(it.id)}
                >

                  {it.name} - {it.id}

                </CategoryList>
              );
            }, this);
          }
        // console.log("all cat component");
        // console.log(this.props);
        // if (!this.props.data) {
        //     return (<div>not clicked</div>);
        // }
        if (namesList != false){
          return (
            <div>
              <FlexBox>{ namesList }</FlexBox>
            </div>
          );
        } else {
          return (
            <div>
              <FlexBox>Loading...</FlexBox>
            </div>
          );
        }
    }
}


AllCategories.propTypes = {
  onLoadCategoryProduct: React.PropTypes.func,
  myData: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.any,
  ]),
};


// const mapStateToProps = createStructuredSelector({
//   myData: makeSelect(),
// });

export function mapDispatchToProps(dispatch) {
  return {
    onLoadCategoryProduct: (id) => dispatch(loadCategoryProduct(id)),
  };
}

export default connect(null, mapDispatchToProps)(AllCategories);
