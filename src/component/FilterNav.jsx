import React from 'react'

const Filternav = () => {
  return (
    <div className='border-gray-500 flex gap-8  justify-center h-4 rounded-tl-md rounded-tr-md'>
      <button type='button'>All</button>
      <button type='button'>Active</button>
      <button type='button'>Completed</button>
    </div>
  );
};

export default Filternav;
