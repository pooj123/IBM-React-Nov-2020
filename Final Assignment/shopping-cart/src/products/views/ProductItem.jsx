import React, { Component } from 'react';
// import cartApi from '../../cart/services/cartApi';

class ProductItem extends Component {
    render() {
        const { product, toggleOutOfStock, remove, addItemToCart, cart } = this.props,
            { id, name, description, price, isOutOfStock, category } = product;
        
        return (
            <li>
                <span className={'name ' + (isOutOfStock ? 'outofstock' : '')}>
                    {name}
                </span>
                <span> {category} </span>
                <div>{description}</div>
                <div className="price">Rs.{price}</div>
                <input type="checkbox"
                    checked={isOutOfStock}
                    onChange={() => toggleOutOfStock(product)}
                />
                <label htmlFor="">Out of Stock</label>
                <br />
                <input type="button" value="Remove" onClick={() => remove(product)} />
                {isOutOfStock ? 
                    <input type="button" value="Add to Cart" disabled onClick={() => addItemToCart(product.id, cart)} /> :
                    <input type="button" value="Add to Cart" onClick={() => addItemToCart(product.id, cart)} />
                }
            </li>
        )
    }
} 

// const ProductItem = ({ product, toggleOutOfStock, remove, addItemToCart, cart }) => {
//     const { name, description, price, isOutOfStock, category } = product;
//     const productToCart = {
//         id: product.id,
//     }
//     getAllCartItemsFromServer = () => {

//     }
//     return (
//         <li>
//             <span className={'name ' + (isOutOfStock ? 'outofstock' : '')}>
//                 {name}
//             </span>
//             <span> {category} </span>
//             <div>{description}</div>
//             <div className="price">Rs.{price}</div>
//             <input type="checkbox"
//                 checked={isOutOfStock}
//                 onChange={() => toggleOutOfStock(product)}
//             />
//             <label htmlFor="">Out of Stock</label>
//             <br />
//             <input type="button" value="Remove" onClick={() => remove(product)} />
//             {isOutOfStock ? 
//                 <input type="button" value="Add to Cart" disabled onClick={() => addItemToCart(productToCart, cart)} /> :
//                 <input type="button" value="Add to Cart" onClick={() => addItemToCart(productToCart, cart)} />
//             }
//             {/* <input type="button" value="Add to Cart" onClick={() => addItemToCart(productToCart, cart)} /> */}
//         </li>
//     )
// }

export default ProductItem;