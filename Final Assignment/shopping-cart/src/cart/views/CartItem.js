import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActionCreators from '../actions/index';

class CartItem extends Component {
    render() {
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
            </li>
        )
    }
} 

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators,dispatch);

export default connect(null,mapDispatchToProps)(CartItem)
