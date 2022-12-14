import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { SearchIcon, UsersIcon } from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import useFetch from '../../hooks/useFetch';
import store from '../../redux/store'

import { logout } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setNoOfGuests] = useState(1)

    const router = useRouter();
    const dispatch = useDispatch();
    const user = store.getState().user?.userInfo;

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    const resetInput = () => {
        setSearchInput("")
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const search = () => {
        setSearchInput('');
        router.push({
            pathname: "/search",
            query: {
                city: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        })
    }

    return (
        <div>
            <div className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 font-Poppins '>
                {/* Left */}
                <div
                    className='relative flex items-center h-16 my-auto cursor-pointer'
                    onClick={() => router.push("/")}
                >
                    <Image
                        src='/images/homey.svg'
                        height={500}
                        width={150}
                        alt="logo"
                        className='cursor-pointer'
                    />
                </div>

                {/* Search */}
                <div className='flex items-center border-2  rounded-full py-2 md:shadow-sm'>
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text"
                        placeholder='start your search'
                        className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
                    />
                    <SearchIcon
                        className="hidden md:inline-flex cursor-pointer md:mx-2 h-8 bg-[#8E56EA] text-white rounded-full p-2"
                        onClick={search}
                    />
                </div>

                {/* Right */}
                <div className='flex items-center space-x-4 justify-between text-gray-500'>
                    {
                        !user?.username ?
                            (
                                <div className='flex justify-evenly  items-center w-[50%]'>
                                    <button
                                        onClick={() => { router.push("/auth/login") }}
                                        className='btn rounded-full bg-[#8E56EA] text-white w-20 py-1 md:w-24 md:py-2 hover:bg-violet-900 hover:shadow-md'>
                                        Login
                                    </button>
                                    <button
                                        onClick={() => { router.push("/auth/signup") }}
                                        className='btn rounded-full bg-[#8E56EA] text-white w-20 py-1 md:w-24 md:py-2 hover:bg-violet-900 hover:shadow-md'>
                                        Sign Up
                                    </button>
                                </div>
                            )
                            :
                            (
                                <div className='flex items-center justify-evenly w-full p-1'>
                                    <div>
                                        {/* <Image
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                        height={10}
                                        width={10}
                                        alt="Avatar"
                                        className="rounded-full h-8 w-8 md:h-14 md:w-14 object-cover"
                                    /> */}
                                        <h1 
                                        onClick={()=>router.push(`/user/${user?._id}`) }
                                        className='text-black cursor-pointer text-base'>{user.username}</h1>

                                    </div>

                                    <button
                                        className='btn rounded-full bg-[#8E56EA] text-white w-20 py-1 md:w-24 md:py-2 hover:bg-violet-900 hover:shadow-md'
                                        onClick={
                                            () => {
                                                dispatch(logout())
                                                router.push("/")
                                            }
                                        }
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )
                    }
                </div>
                {
                    searchInput &&
                    <div className='flex flex-col col-span-3 mx-auto mt-10'>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#8E56EA"]}
                            onChange={handleSelect}
                        />
                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl flex-grow font-semibold">
                                Number of Guests
                            </h2>
                            <UsersIcon className="h-5" />
                            <input
                                value={noOfGuests}
                                onChange={(e) => setNoOfGuests(e.target.value)}
                                type="number" I
                                className="w-12 pl-2 text-lg outline-none text-[#8E56EA]"
                            />
                        </div>
                        <div className="flex">
                            <button onclick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                            <button className="flex-grow text-[#8E56EA]" onClick={search}>Search</button>
                        </div>
                    </div>
                }
            </div>



        </div>
    )
}

export default Navbar