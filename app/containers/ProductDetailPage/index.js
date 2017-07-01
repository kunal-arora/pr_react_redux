import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { productDetailsSelect } from './selectors';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import {Tabs, Tab} from 'material-ui/Tabs';

import { loadProduct } from './action';


export class ProductDetailPage extends React.PureComponent {
  componentWillMount() {
    this.props.onLoadProductDetails(this.props.params.sku);
  }

  render() {
    console.log(this.props.productDetails);

    const product = this.props.productDetails;

    if (product) {
      return (
        <div>
          <p>Name : {product.name}</p>
          <p>Price : {product.price}</p>
        </div>
      );
    }
    return (
      <div>
        Product not loaded
      </div>
    );
  }
}

ProductDetailPage.propTypes = {
  onLoadProductDetails: React.PropTypes.func,
  productDetails: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.any,
  ]),
  params: React.PropTypes.object,
  sku: React.PropTypes.string,
};


export function mapDispatchToProps(dispatch) {
  return {
    onLoadProductDetails: (sku) => dispatch(loadProduct(sku)),
  };
}

const mapStateToProps = createStructuredSelector({
  productDetails: productDetailsSelect(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);
