import React from 'react'


const Form = () => {
  return (
    <div className='py-2 my-4 bg-white rounded-md'>
      <form className='flex items-center'>
        <div className='flex-grow'> {/* Use 'flex-grow' to allow the input to take up remaining space */}
          <input placeholder='Create new Todo Item' type='text' className='rounded-md h-4 text-5 px-3 block w-full focus:outline-none' />
        </div>
        <button className='bg-blue-900 px-3 py-1 mx-2 items-center font-medium text-white rounded-lg'>Add</button>
      </form>
    </div>
  );
};

export default Form;
