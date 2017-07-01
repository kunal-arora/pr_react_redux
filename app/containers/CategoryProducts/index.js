import React from 'react';
import { Link } from 'react-router';
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
          <FlexBox key={it.sku}>
            <Link
              to={'/product/' + it.sku}
            >

              {it.sku}

            </Link>
          </FlexBox>
        );
      }, this);
    }

    if (productList != false) {
      return (
        <div>
          { productList }
        </div>
      );
    } else {
      return (
        <div>
          select a category with products in it.
        </div>
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
