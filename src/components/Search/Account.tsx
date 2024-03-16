import React from 'react'

export default function Account() {
  return (
		<div className="w-full my-4 sm:w-[40%] flex gap-4 items-center border px-4 py-2 rounded-lg ">
			<img
            className='w-[50px] h-[50px] rounded-full'
				src="https://plus.unsplash.com/premium_photo-1709865803790-1d929a9386b9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
				alt=""
			/>
            <p className='text-xl'>Anshul</p>
		</div>
  );
}
