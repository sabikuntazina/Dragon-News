import BreakingNews from '@/components/shared/BreakingNews';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

export const metadata = {
  title: "Dragon News-Home Page",
  description: "travel as a adventure",
};


const MainLayOut = ({children}) => {
  return (
    <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainLayOut;