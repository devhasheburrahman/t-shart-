import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='justify-center gap-5 border border-red-600 p-5 m-5 rounded-lg'>
            <h1>Father</h1>
            <section className='flex justify-center gap-5 border border-red-600 p-5 m-5 rounded-lg'>
                <Brother></Brother>
                <Myself></Myself>
                <Sister></Sister>

            </section>
        </div>
    );
};

export default Father;