import React from 'react';
// import { MdDeleteForever, MdCancel } from 'react-icons/md';

const TodoItem = () => {

  return (

  <div>
    <div className='h-14 px-5 flex items-center '>
      <div className='flex items-center justify-between w-full'>
        {/* <MdCancel className='text-blue-500 h-5 w-4 mr-3' /> */}
        <p className='text-gray-500'>Item 1</p>
      </div>

      <div>
      {/* <MdDeleteForever className='h-5 w-5' text-red-500 /> */}
      </div>
    </div> 

    <div className='bg-slate-500 h-[5px] mb-1'/> 
  </div>
  );
};

export default TodoItem;