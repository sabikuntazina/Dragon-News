import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='space-y-2 my-10 max-w-6xl mx-auto'>
      <Image src={logo} alt='logo' width={300} height={200} className='mx-auto'></Image>
      <p className='text-center text-gray-500'>Journalism Without Fear or Favour</p>
      <p className='text-center text-gray-500'>{format(new Date(), "iiii, MMMM dd, yyyy")}</p>

      
    </div>
  );
};

export default Header;