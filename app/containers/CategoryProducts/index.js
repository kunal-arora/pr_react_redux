import React from 'react';
import { connect } from 'react-redux';
import CategoryList from 'components/CategoryList';
import FlexBox from 'components/FlexBox';

export class CategoryProducts extends React.PureComponent {
  render() {
    const item = this.props.catProducts;
    // console.log(item);
    let productList = false;

    if (item) {
      productList = item.map(function (it, index) {
        return (
          <CategoryList
            key={index}
          >

            {it.sku}

          </CategoryList>
        );
      }, this);
    }

    if (productList != false) {
      return (
        <FlexBox>
          { productList }
        </FlexBox>
      );
    } else {
      return (
        <FlexBox>
          select a category with products in it.
        </FlexBox>
      );
    }
  }
}

CategoryProducts.propTypes = {
  catProducts: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.any,
  ]),
};

export default connect(null, null)(CategoryProducts);
