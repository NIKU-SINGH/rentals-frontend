import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/index'
import SmallCard from '../components/cards/SmallCard'
import MediumCard from '../components/cards/MediumCard'
import Contact from '../components/contact/Contact'
import LargeCard from '../components/cards/LargeCard'
import Footer from '../components/footer/Footer'
import useFetch from '../hooks/useFetch'
import base_url from '../config/config'

const nearbyHotels = [
  {
    "name": "Goa",
    "count": 12,
    "img": "https://images.unsplash.com/photo-1567005753256-c0529035b300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "name": "Jaipur",
    "count": 10,
    "img": "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
  },
  {
    "name": "Manali",
    "count": 29,
    "img": "https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "name": "Goa",
    "count": 12,
    "img": "https://images.unsplash.com/photo-1567005753256-c0529035b300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "name": "Jaipur",
    "count": 10,
    "img": "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
  },
  {
    "name": "Manali",
    "count": 29,
    "img": "https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "name": "Goa",
    "count": 12,
    "img": "https://images.unsplash.com/photo-1567005753256-c0529035b300?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "name": "Jaipur",
    "count": 10,
    "img": "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
  },
  {
    "name": "Manali",
    "count": 29,
    "img": "https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
]

const hotelTypeImages = [
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1619542402915-dcaf30e4e2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]

const Home = ({ explorePlaces, hotelType, featuredHotels })  => {
  // const { data, loading, error } = useFetch("http://localhost:8000/api/hotels")

  return (
    <div>
      <Head>
        <title>Homey</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 mb-8">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {
              nearbyHotels?.map((data, id) => (
                <SmallCard key={id} name={data.name} count={data.count} img={data.img} />
              )
              )
            }

          </div>
        </section>

        <section className="pt-6 mb-8">
          <h2 className="text-4xl font-semibold py-8">Browse by property Type</h2>
          <div className='flex space-x-8 overflow-x-scroll scrollbar-hide items-center justify-center'>
            {/* {
              hotelType.map((item, id) => {
                // <MediumCard key={id} type={item.type} count={item.count} />
                console.log("type is ",item)
              })
            } */}

            <MediumCard type="Hotel" count="13" img={hotelTypeImages[0]} />
            <MediumCard type="Appartment" count="123" img={hotelTypeImages[1]} />
            <MediumCard type="Villa" count="9" img={hotelTypeImages[2]} />
            <MediumCard type="Resort" count="21" img={hotelTypeImages[3]} />
            <MediumCard type="Cabin" count="45" img={hotelTypeImages[4]} />

          </div>
        </section>

        <section className="pt-6 mb-8">
          <h2 className="text-4xl font-semibold py-8" id="checkout">Checkout Featured Properties</h2>
          <div className='flex space-x-8 overflow-x-scroll scrollbar-hide p-3'>
            {
              featuredHotels?.map((data, id) => (
                <LargeCard
                  key={id}
                  name={data.city}
                  count={data.count}
                  img={data.images[1]}
                  rating={data.rating}
                  price={data.cheapestPrice}
                  desc={data.desc}
                  distance={data.distance}
                />
              )
              )
            }
          </div>
        </section>

      </main>
      <section className='m-16'>
        <Contact />
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${base_url}/api/hotels`);
  const res1 = await fetch(`${base_url}/api/hotels/countByType`);
  const res2 = await fetch(`${base_url}/api/hotels?featured=true&limit=10&min=0&max=99999`)

  const explorePlaces = await res.json();
  const hotelType = await res1.json();
  const featuredHotels = await res2.json();

  return {
    props: {
      explorePlaces,
      hotelType,
      featuredHotels
    }
  }
}
export default Home