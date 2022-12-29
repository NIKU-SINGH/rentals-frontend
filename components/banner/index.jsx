import Image from "next/image";
import Link from "next/link"
function Banner({ bannerData }) {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2x1:h-[700px] m-10 rounded-2xl">
            <Image
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                height={600}
                width={900}
                alt="banner image"
                priority="true"
                className="object-cover rounded-lg h-full w-full"
            />
            <div className="flex items-center justify-center bg-green-400">
                <div className="absolute top-1/3 w-[50vw]">
                    <p className="text-2xl sm:text-6xl font-Poppins font-extrabold text-white">Find your dream home with us, the best place to rent or buy
                        Perfect.
                    </p>

                    <Link href="#checkout" >
                        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                            Explore Now
                        </button>
                    </Link>

                </div>
            </div>

        </div >
    );
}
export default Banner

export async function getStaticProps() {
    const bannerData = {
        img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        title: "Look for hotels",
    }


    return {
        props: {
            bannerData
        }
    }
}