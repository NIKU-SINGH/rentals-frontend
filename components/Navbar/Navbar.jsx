import Image from 'next/image'
import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

function Navbar() {
    return (
        <div>
            <div className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
                {/* Left */}
                <div className='relative flex items-center h-10 my-auto'>
                    <Image
                        src='https://links.papareact.com/qd3'
                        layout="fill"
                        objectFit='contain'
                        objectPosition='left'
                        className='cursor-pointer'
                    />
                </div>

                {/* Search */}
                <div className='flex items-center border-2  rounded-full py-2 md:shadow-sm'>
                    <input
                        type="text"
                        placeholder='start your search'
                        className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
                    />
                    <SearchIcon className="hidden md:inline-flex cursor-pointer md:mx-2 h-8 bg-red-400 text-white rounded-full p-2" />
                </div>

                {/* Right */}
                <div className='flex items-center space-x-4 justify-end text-gray-500'>
                    <button className='btn rounded-full bg-red-400 text-white w-20 py-1 md:w-24 md:py-2 hover:bg-red-600 hover:shadow-md'>
                        Register 
                    </button>
                    <button className='btn rounded-full bg-red-400 text-white w-20 py-1 md:w-24 md:py-2 hover:bg-red-600 hover:shadow-md'>
                        Login 
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar