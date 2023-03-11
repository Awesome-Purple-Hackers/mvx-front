import React from 'react';

const Card = ({ children }: any) => {
  return (
    <div className='p-8 mt-16 bg-zinc-800 md:w-3/4 rounded-xl'>{children}</div>
  );
};

export default Card;
