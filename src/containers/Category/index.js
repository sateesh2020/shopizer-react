import React, { Component } from 'react';
import { connect } from 'react-redux';

import Products from './Products';
import { ProductFilter } from '../../components/Widgets';

import { loadProducts, filterProducts } from '../../redux/modules/products';
import { loadCategory } from '../../redux/modules/categories';

class Category extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    let categoryId = this.props.location.id;
    if (!categoryId) {
      categoryId = 1;
      //this.props.history.goBack();
    } else {
      this.props.loadProducts({
        category: categoryId,
      });
      this.props.loadCategory(categoryId);
    }
  }
  componentDidUpdate(prevProps) {
    let categoryId = this.props.location.id;
    categoryId = categoryId || 1;
    if (categoryId && categoryId !== prevProps.location.id) {
      this.props.loadProducts({
        category: categoryId,
      });
      this.props.loadCategory(categoryId);
    }
  }
  filter(filterType, filterVal) {
    this.props.filterProducts({ [filterType]: filterVal });
  }
  render() {
    let { products, category, filters } = this.props;
    return (
      <section className="shop_grid_area section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <ProductFilter
                filter={this.filter}
                categories={category.children}
                filters={filters}
              />
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
  filters: products.filters,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: filter => dispatch(loadProducts(filter)),
  filterProducts: filters => dispatch(filterProducts(filters)),
  loadCategory: categoryId => dispatch(loadCategory(categoryId)),
});

Category = connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

export default Category;
