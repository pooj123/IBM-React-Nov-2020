import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActionCreators from '../actions/index';
import removeItemFromCart from '../actions/removeFromCart';

class CartItem extends Component {
    render() {
        const {removeItemFromCart, cartItems} = this.props;
        const product = this.props.products.filter((item) => {
            return item.id === this.props.cart.productID;
        });
        
        return (
            <li>
                <span className="name" >{product[0].name}</span>
                <span> {product[0].category} </span>
                <div>{product[0].description}</div>
                <div><h4>Quantity: {this.props.cart.quantity}</h4> </div>
                <div className="price">Rs.{product[0].price}</div>
                <input 
                    type="button" 
                    value="Remove From Cart" 
                    onClick={() => removeItemFromCart(product[0], cartItems)} /> 
            </li>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeItemFromCart: (product, cart) => dispatch(removeItemFromCart(product, cart))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartItem)
