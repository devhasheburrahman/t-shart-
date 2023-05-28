import React from 'react';

const TShairt = ({ tShirt, handleAddToCart }) => {
    // console.log(tShirt);
    const { name, picture, price } = tShirt;

    return (
        <div className='border-2 p-5 border-orange-500 	'>

            <div>

                <img className='h-64' src={picture} alt="" />
            </div>
            <h4>{name}</h4>
            <p>price: $ {price}</p>

            <button className='bg-blue-500 p-2 rounded-md mt-4 text-white' onClick={() => handleAddToCart(tShirt)}>Buy Now</button>

        </div>
    );
};

export default TShairt;