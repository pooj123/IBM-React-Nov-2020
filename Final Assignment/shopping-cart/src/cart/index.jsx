import React, { useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Cart extends React.Component {
    render() {
        const {id} = this.props.data
        console.log(this.props.data)
        return (
            <div>
                <h1>Cart</h1>
                <span>Cart count: {this.props.data.length} </span>
                <div>Cart Items:  </div>
                <span>id: {id}</span>
            </div>
        )
    }
}

const mapStateToProps = ({ cart }) => {
    return {
        data: cart, 
    }      
}

export default connect(mapStateToProps, null)(Cart);