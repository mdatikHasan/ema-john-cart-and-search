import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Selected Item: {cart.length}</p>

            {/* <p>Total Price: ${sum}</p>
            <p>Shipping Charge: ${shippingCharge}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
            <button onClick={() => clearCart(cart)}>Clear Cart</button> */}
        </div>
    );
};

export default Cart;