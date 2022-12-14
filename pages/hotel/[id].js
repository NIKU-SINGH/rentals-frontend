import React, { useEffect } from 'react'
import Hotel from '../../components/hotel/Hotel'
import { useRouter } from 'next/router'
import useFetch from '../../hooks/useFetch';
import base_url from '../../config/config';


export default function hotel_id () {
    const router = useRouter();
    const hotelId = router.query.id;

    const URL = `${base_url}/api/hotels/find`;
    const { data, loading, error, refetch } = useFetch(`${URL}/${hotelId}`);
    console.log("Data from hotel", data)

    return (
        <div>
            <Hotel data={data} />
        </div>
    )
}