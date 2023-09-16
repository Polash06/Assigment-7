/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({selectActore}) => {
    console.log(selectActore)
    return (
        <div className='ml-4'>
           <h1 className='text-2xl text-blue-400'>Credit Hour Remaining {selectActore.length} hr</h1>
           <hr></hr>
           <h1 className='mt-7 text-xl font-bold'>Course Name</h1>
           {
            selectActore.map((actor,idx) =>  <li key={actor.id + idx}>{actor.name}</li>)
               
            
           }
        </div>
    );
};

export default Cart;