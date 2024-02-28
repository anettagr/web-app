import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/data';
import PropTypes from 'prop-types';

const propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
const DataList = (props) => {
  const {
    fetchProducts,
    products,
    isLoading,
  } = props;

  const [filterCategories, setFilterCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // fetchProducts();
    const updateFilteredProducts = products.map((product) => ({...product, selected: false}))
    setFilterCategories(updateFilteredProducts);
    setFilteredProducts(updateFilteredProducts);
  }, []);

  const onChange = (value) => {
    const newProducts = products.filter((product) => product.category === value.target.value);
    setFilteredProducts(newProducts);
  };

  const getDate = (date) => {
    const [year, month, day] = date.split("-");
    return new Date(year, month - 1, day).toDateString();
  };

  const setSelected = (selectedProduct) => {
    const newFilteredProducts = filteredProducts.map((product) => ({...product, selected: product.id === selectedProduct.id ? !product.selected : product.selected}))
    setFilteredProducts(newFilteredProducts);
  };

  const clearFilter = () => {
    setFilteredProducts(products);
  };

  return (
    <div>
      <h1> List of Products </h1>
      <div>
        <h2>
          Filter products
        </h2>
        <select id="category" name="category" onChange={onChange}>
          {filterCategories.map((value) => (
            <option value={value.category}>{value.category}</option>
          ))}
        </select>
        <button onClick={clearFilter}> Clear filter </button>
      </div>
      {!isLoading ? (
        <div className="products-list">
          {filteredProducts.map((product) => (
            <Fragment>
              <div className="box" key={product.id}>
                <div className="image">
                  <img src={"https://" + product.picture} loading="lazy" alt="picture" />

                </div>
                <div className="content">
                  <h2>
                    {product.title}
                  </h2>
                  <p>
                    {product.description}
                  </p>
                </div>
                <div className="content-right">
                  <div className="content-price">
                    <div>{product.price} €</div>
                    <div>{product.category}</div>
                    <p>Added:</p>
                    <div>{getDate(product.dateAdded)}</div>
                  </div>
                  <div>
                    <p>Add to favorites</p>
                    <button onClick={() => setSelected(product)} className={product.selected ? "dot-selected" : "dot"} />
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

DataList.propTypes = propTypes;
export default connect((state) => ({
  products: state.products,
  isLoading: state.isLoading,
  error: state.error,
}),
  {
    fetchProducts,
  })(DataList);