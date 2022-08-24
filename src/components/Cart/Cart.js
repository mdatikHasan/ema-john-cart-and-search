import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(3))
    const grandTotal = total+ shipping + tax
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {quantity}</p>

            <p>Total Price: ${total}</p>
            <p>Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${(grandTotal.toFixed(2))}</h3>
            {/* <button onClick={() => clearCart(cart)}>Clear Cart</button> */}
        </div>
    );
};

export default Cart;