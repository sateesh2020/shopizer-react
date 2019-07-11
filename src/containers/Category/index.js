import React, { Component } from 'react';
import { connect } from 'react-redux';

import Products from './Products';
import { ProductFilter } from '../../components/Widgets';

import { loadProducts } from '../../redux/modules/products';
import { loadCategory } from '../../redux/modules/categories';

class Category extends Component {
  componentDidMount() {
    let categoryId = this.props.location.id;
    if (!categoryId) {
      //categoryId = 1;
      this.props.history.goBack();
    } else {
      this.props.loadProducts({
        category: categoryId,
      });
      this.props.loadCategory(categoryId);
    }
  }
  componentDidUpdate(prevProps) {
    let categoryId = this.props.location.id;
    if (categoryId && categoryId !== prevProps.location.id) {
      this.props.loadProducts({
        category: categoryId,
      });
      this.props.loadCategory(categoryId);
    }
  }

  render() {
    let { products, category } = this.props;
    console.log(category);
    return (
      <section className="shop_grid_area section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <ProductFilter categories={category.children} />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <Products products={products} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ products, categories }) => ({
  products: products.products,
  category: categories.category,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: filter => dispatch(loadProducts(filter)),
  loadCategory: categoryId => dispatch(loadCategory(categoryId)),
});

Category = connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

export default Category;
