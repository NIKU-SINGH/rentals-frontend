import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/searchCard/ProductCard';
import useFetch from '../hooks/useFetch';

function search() {
    const router = useRouter();
    const { city, startDate, endDate, noOfGuests } = router.query;
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [type, setType] = useState('hotel');
    const [place, setPlace] = useState(city);
    const [rating, setRating] = useState('4.5');

    const URL = 'http://localhost:8000/api/hotels';
    const { data, loading, error, refetch } = useFetch(`${URL}?city=${place}&min=${min}&max=${max}&type=${type}&rating=${rating}`);

    const searchFilter = () => {
        // refetch(`${URL}`)
        console.log("Data after refetch", data)
    }

    const resetFilter = () => {
        setPlace('')
        setMin('')
        setMax('')
        setType('')
        setRating('')
    }

    return (
        <div >
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className='flex-grow pt-14 px-6'>
                    <p className="text-xs">{`300+ Stays for ${noOfGuests} number of guests`}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {`${place || ''}`}</h1>
                </section>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
                        Cancellation Flexibility
                    </p>
                    <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out">
                        Type of Place
                    </p>
                </div>

                {/* <Hotel /> */}
            </main>
            <section className="flex items-center justify-center">
                <div className='flex flex-wrap w-[90%] justify-evenly'>

                    {/* Filter is here */}
                    <div className=''>
                        <div>
                            <div className="w-full shadow p-5 rounded-lg bg-blue-100">
                                <div className="relative">
                                    <div className="absolute flex items-center ml-2 h-full">
                                        <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
                                        </svg>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Search by listing, location, bedroom number..."
                                        className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                        onChange={(e) => setPlace(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <p className="font-medium">
                                        Filters
                                    </p>

                                    <button
                                        onClick={resetFilter}
                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                                        Reset Filter
                                    </button>
                                </div>

                                <div>
                                    {/* <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4"> */}
                                    <div className='flex flex-col '>
                                        <select
                                            onChange={(e) => setType(e.target.value)}
                                            className="px-4 py-3 w-full mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                            <option value="">All Type</option>
                                            <option value="hotel">Hotel</option>
                                            <option value="appartment">Appartment</option>
                                            <option value="villa">Villa</option>
                                            <option value="resort">Resort</option>
                                            <option value="cabin">Cabin</option>
                                        </select>

                                        <select
                                            onChange={(e) => setMin(e.target.value)}
                                            className="px-4 py-3 w-full mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                            <option value="">Min Price</option>
                                            <option value="1000">₹ 1000</option>
                                            <option value="2000">₹ 2000</option>
                                            <option value="3000">₹ 3000</option>
                                            <option value="4000">₹ 4000</option>
                                        </select>

                                        <select
                                            onChange={(e) => setMax(e.target.value)}
                                            className="px-4 py-3 w-full mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                            <option value="">Max Price</option>
                                            <option value="1000">₹ 1000</option>
                                            <option value="2000">₹ 2000</option>
                                            <option value="3000">₹ 3000</option>
                                            <option value="4000">₹ 100000</option>
                                        </select>

                                        <select
                                            onChange={(e) => setRating(e.target.value)}
                                            className="px-4 py-3 w-full mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                            <option value="">Rating</option>
                                            <option value="1">1 star</option>
                                            <option value="2">2 star</option>
                                            <option value="3">3 star</option>
                                            <option value="4">4 star</option>
                                            <option value="5">5 star</option>
                                        </select>

                                        <div className='m-4 flex items-center justify-center'>
                                            <button
                                                onClick={searchFilter}
                                                className='btn rounded-full bg-[#8E56EA] text-white w-full py-1 md:py-2 hover:bg-violet-900 hover:shadow-md'>
                                                Search
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter ends here */}
                    <div className=''>
                        {
                            loading ?
                                ("Loading")
                                :
                                (
                                    data?.length != 0 ? (
                                        data?.map((hotel, idx) => (
                                            <ProductCard key={hotel._id} hotel={hotel} />
                                        ))
                                    ) :
                                        (
                                            "There is no hotel of this type"
                                        )
                                )
                        }

                    </div>
                </div>
            </section>
        </div >
    )
}

export default search