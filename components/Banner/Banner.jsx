import Image from "next/image";
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
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go?
                    Perfect.</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
                    I&apos;m flexible
                </button>
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