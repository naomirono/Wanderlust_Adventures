import React from 'react';

export const AppError = ({ error }) => {
  return error && <div className='bg-[#FF9549] text-white py-2 px-4 mb-4'>{error}</div>;
};

export const formatErrors = (errors = []) => {
  return (
    errors.length > 0 && (
      <ol type='i'>
        {errors.map((error, i) => (
          <li className='mt-1' key={i}>
            {error}
          </li>
        ))}
      </ol>
    )
  );
};
