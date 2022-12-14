import React, { useEffect } from 'react'
import Hotel from '../../components/hotel/Hotel'
import { useRouter } from 'next/router'
import useFetch from '../../hooks/useFetch';


export default function () {
    const router = useRouter();
    const hotelId = router.query.id;

    const URL = 'http://localhost:8000/api/hotels/find';
    const { data, loading, error, refetch } = useFetch(`${URL}/${hotelId}`);
    console.log("Data from hotel", data)

    return (
        <div>
            <Hotel data={data} />
        </div>
    )
}