/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
const[AllActore, setAllActore] = useState ([]);

const [selectActore, setselectActore] = useState([]);

  useEffect(()=>{
   fetch('./data.json')
   .then((res) =>res.json())
   .then((data)=> setAllActore(data))
  },[]);

  const handelSeletactor = (actor) => {
  
   setselectActore([...selectActore, actor]);
  }
console.log(selectActore)
    return (
        <div>
             <h1 className='text-3xl text-center font-bold m-12'>Course Registration</h1>
          <div className='flex'>
           <div className='ml-8 w-3/4 grid grid-cols-3 gap-3'>
          {
            AllActore.map((actor,i) =>(
              <div key={i} className='card w-82 h-96 mb-7 bg-gray-100 shadow-xl'>
              <div>
                <img className='w-full h-48' src="https://i.ibb.co/Rvc67Cr/ar.jpg" alt="" />
                <h1 className='text-center text-2xl font-semibold mt-2'>{actor.name}</h1>
                <p className='mt-3'>{actor.polash}</p>
                 <div className='flex justify-between mt-2'>
                 <p>$ price : {actor.Price}</p>
                 <p>$</p>
                <p>Credit : {actor.hours}</p>
                 </div>
                 <div className='text-center font-bold text-white mt-2'>
                 <button onClick={()=>handelSeletactor(actor)} className="btn btn-wide w-full h-10 bg-sky-500 rounded-lg text-2xl">select</button>
                 </div>
              </div>
              </div>
            ))
          }
           </div>
            <div>
              <h1 className='text-2xl text-blue-400'>Credit Hour Remaining {0} hr</h1>
              <hr></hr>
            </div>
          </div>
        </div>
    );
};

export default Home;