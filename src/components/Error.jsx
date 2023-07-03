import React from 'react';
import errorcode from '../assets/image/Error.gif'
const Error = () => (
  <>
  <h1 className=' text-slate-200 font-bold text-xl mt-5 ml-3'> Something Went Wrong</h1>
  <div className=' animate-slideleft w-[250px]  ml-3 mt-5'><img src={errorcode} alt="" /></div>
  </>
);

export default Error;
