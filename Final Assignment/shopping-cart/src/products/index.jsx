import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductStats from './views/ProductStats';
import ProductEditor from './views/ProductEditor';
import ProductsList from './views/ProductsList';
import './index.css';
import productActionCreators from './actions';
import cartActionCreators from '../cart/actions/index';
import addItemToCart from '../cart/actions/addItemToCart';

/* class Products extends React.Component {
    componentDidMount() {
        this.props.load();
    }
    render() {
        const { data, categories, toggleOutOfStock, remove, removeOutOfStock, addNew, load } = this.props;
        return (
            <div>
                <h3>Products</h3>
                <hr />
                <ProductStats products={data} />
                <ProductEditor addNew={addNew} categories={categories} />
                <ProductsList
                    products={data}
                    toggleOutOfStock={toggleOutOfStock}
                    remove={remove}
                    removeOutOfStock={removeOutOfStock}
                />
            </div>
        )
    }
} */

 const Products = ({ data, categories, toggleOutOfStock, remove, removeOutOfStock, addNew, load, addItemToCart, cart }) => {
    useEffect(load, [load]);
     return (
        <div>
            <h3>Products</h3>
            <input type="button" value="LOAD PRODUCTS" onClick={load}/>
            <hr />
            <ProductStats products={data} />
            <ProductEditor addNew={addNew} categories={categories} />
            <ProductsList
                products={data}
                toggleOutOfStock={toggleOutOfStock}
                remove={remove}
                removeOutOfStock={removeOutOfStock}
                addItemToCart={addItemToCart}
                cart={cart}
            />
        </div>
    );
}

const mapStateToProps = ({ products, categories, cart}) => {
    const selectedCatgory = categories.selectedCategory;
    if (selectedCatgory !== "")
      return {
        data: products.filter(p => p.category === selectedCatgory),
        categories : categories.categoryList,
        cart: cart,
      };
    return { data: products, categories : categories.categoryList, cart: cart };
}

/* function mapDispatchToProps(dispatch){
    const productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    return productActionDispatchers;
} */

// const mapDispatchToProps = (dispatch) => bindActionCreators({...productActionCreators, ...cartActionCreators}, dispatch);

const mapDispatchToProps = dispatch => {
    return {...bindActionCreators(productActionCreators, dispatch), ...bindActionCreators(cartActionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);