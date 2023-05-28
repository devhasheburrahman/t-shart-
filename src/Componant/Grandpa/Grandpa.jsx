import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Anti from '../Anti/anti';

const Grandpa = () => {
    return (
        <div className='text-center border border-red-500 p-5 m-5
        '>
            <h3>Grandpa</h3>
            <section className='flex justify-center gap-5 border border-red-600 p-5 m-5 '>
                <Father></Father>
                <Uncle></Uncle>
                <Anti></Anti>

            </section>
        </div>
    );
};

export default Grandpa;