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
import { createStructuredSelector } from 'reselect';
// import {Tabs, Tab} from 'material-ui/Tabs';
import { makeSelect, catProductsSelect } from 'containers/HomePage/selectors';
import CategoryList from 'components/CategoryList';
import FlexBox from 'components/FlexBox';
import H2 from 'components/H2';
import AllCategories from 'containers/AllCategories';
import CategoryProducts from 'containers/CategoryProducts';
import { loadCategory } from './action';
import { loadCategoryProduct } from '../AllCategories/action';
// import H1 from 'components/H1';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onLoadCategory();
  }

  handleCLick = () => {
    console.log('handleCLick');
  }


  render() {
    // console.log(this.props);
    const { categories, catProducts } = this.props;

    const AllCategoriesProps = {
      categories,
    };

    const CategoryProductsProps = {
      catProducts,
    };

    // const item = this.props.catProducts;
    // console.log(item);
    let productList = false;

    if (this.props.categories) {
      productList = this.props.categories.map(function (it, index) {
        return (
          <div>
          <button
            key={it.id}
            label={it.name}
            onClick={() => this.props.onLoadCategoryProduct(it.id)}
          >
          {it.name}

          </button>
        </div>
        );
      }, this);
    }

    if (productList !== false) {
      return (
        <div>
        <FlexBox>
          {productList}
        </FlexBox>
        <FlexBox>
          <CategoryProducts {...CategoryProductsProps} />
        </FlexBox>
        </div>
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

HomePage.propTypes = {
  categories: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.any,
  ]),
  catProducts: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.any,
  ]),
  onLoadCategory: React.PropTypes.func,
  onLoadCategoryProduct: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadCategory: () => dispatch(loadCategory()),
    onLoadCategoryProduct: (id) => dispatch(loadCategoryProduct(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  categories: makeSelect(),
  catProducts: catProductsSelect(),
});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
