import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='max-w-7xl mx-auto space-y-4 my-auto'>
      <h2 className='text-7xl text-center text-red-600 font-bold'>This page is not found</h2>
      <Link className='flex justify-center items-center' href={'/'}><button className='btn  bg-red-400 text-white font-bold'>Go back home</button></Link>
    </div>
  );
};

export default NotFoundPage;