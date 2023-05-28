import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShairt from './TShirt/TShairt';
import Cart from './Cart';
import { Toaster, toast } from 'react-hot-toast';



const Home = () => {
    const tShirts = useLoaderData();

    const [cart, setCart] = useState([]);



    const handleAddToCart = (tShirt) => {
        const exists = cart.find(ts => ts._id === tShirt._id);

        if (exists) {

            toast('you have already added this t-shirt')
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }






    }
    const handleRemoveToCArt = id => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }

    return (


        <div className=' flex gap-5 mt-10 '>
            <div className='grid grid-cols-3 gap-5 w-75'>

                {
                    tShirts.map(tShirt => <TShairt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShairt>
                    )
                }
            </div>
            <div>
                <Cart
                    cart={cart}

                    handleRemoveToCArt={handleRemoveToCArt}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;