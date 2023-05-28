import React from 'react';
import Spachal from './Spachall/Spachal';

const Myself = () => {
    return (
        <div>
            <h3>My self</h3>
            <section className='flex justify-center gap-5 border border-red-600 p-5 m-5 rounded-lg'>

                <Spachal></Spachal>
            </section>
        </div>
    );
};

export default Myself;