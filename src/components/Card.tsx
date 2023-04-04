import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className='w-full max-w-4xl bg-gray-100 bg-opacity-70 p-4 rounded-xl backdrop-blur-lg backdrop-saturate-150'>
      {children}
    </div>
  );
}

export default Card;
