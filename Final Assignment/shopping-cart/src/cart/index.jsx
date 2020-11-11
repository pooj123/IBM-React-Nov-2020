import React, { useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActionCreators from '../cart/actions/index';
import CartList from '../cart/views/CartList'

class Cart extends React.Component {
    render() {
        return (
            <div>
                <h1>Cart</h1>
                <h4>Number of Items in cart: {this.props.cart.length}</h4>
                <CartList 
                    cartItems={this.props.cart}
                    products={this.props.products}
                />
            </div>
        )
    }
}

const mapStateToProps = ({products, cart}) => {
    return {
        cart,
        products,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cart);