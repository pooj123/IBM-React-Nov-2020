import React, { useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CartItem from '../cart/views/CartItem';
import cartActionCreators from '../cart/actions/index';
import CartList from '../cart/views/CartList'

class Cart extends React.Component {
    render() {
        return (
            <div>
                <h1>Cart</h1>
                <CartList 
                    cartItems={this.props.cart}
                    products={this.props.products}
                />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart,
//         products: state.products,
//     }
// }
const mapStateToProps = ({products, cart}) => {
    return {
        cart,
        products,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cart);