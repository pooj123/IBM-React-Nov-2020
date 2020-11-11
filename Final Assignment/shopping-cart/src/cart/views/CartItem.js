import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActionCreators from '../actions/index';

class CartItem extends Component {
    render() {
        const {cartItem , productsList ,cartItems} = this.props;
        const product = productsList.find((item) => {
            return item.id === cartItem.productID;
        });
    const { name, description, price, category } = product;
        
        return (
            <li>
                <span className="name" >{name}</span>
                <span> {category} </span>
                <div>{description}</div>
                <div className="price">Rs.{price}</div>
            </li>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        productsList : state.products,
        cartItems: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)
