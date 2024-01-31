import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const AppLoader = () => {
  return (
    <div className='flex justify-center'>
      <AiOutlineLoading3Quarters className='animate-spin' />
    </div>
  );
};

export default AppLoader;
