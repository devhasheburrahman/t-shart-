import React from 'react';
import TShairt from './TShirt/TShairt';

const Cart = ({ cart, handleRemoveToCArt }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please added some product</p>
    }
    else { message = <div>Happy shopping</div> }
    return (
        <div className='border-2 border-orange-700  p-4'>
            <h2>Order summery : {cart.length}</h2>
            {message}
            {
                cart.map(TShairt => <p
                    key={TShairt._id}

                >{TShairt.name}
                    <button className='ml-4' onClick={() => handleRemoveToCArt(TShairt._id)}> X </button>


                </p>


                )



            }
        </div >
    );
};

export default Cart;