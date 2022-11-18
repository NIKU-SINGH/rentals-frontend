import { useRouter } from 'next/router'
import React from 'react'
import Filter from '../components/filter/Filter';
import Footer from '../components/footer/Footer'
import Hotel from '../components/hotel/Hotel';
import Navbar from '../components/navbar/Navbar'
import ProductCard from '../components/searchCard/ProductCard';

function search() {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    return (
        <div >
            <Navbar />
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
                <section className='flex-grow pt-14 px-6'>
                    <p className="text-xs"> 300+ Stays for 5 number of guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Mars</h1>
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
                    <div className=''>
                        <Filter />
                    </div>
                    <div className=''>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    )
}

export default search