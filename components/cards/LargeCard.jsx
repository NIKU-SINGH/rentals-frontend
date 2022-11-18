import Image from "next/image";

function LargeCard({ name, count, img, rating, price, desc, distance }) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
            <div className="relative h-64 w-64">
                <Image src={img} layout="fill" className="rounded-xl" />
            </div>
            <div>
                <h3 className="text-xl font-semibold mt-3">{name}</h3>
                <div className="flex items-center">
                    <span className="font-semibold">Rating</span>
                    <p className="text-gray-600 font-bold text-sm ml-1">
                        {rating}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                </div>
                <h3 className="text-base font-medium mt-3">Starting from <span className="font-bold">₹{price}</span></h3>
                {/* <h3 className="text-base mt-3">{desc}</h3> */}
            </div>

        </div>
    )
};
export default LargeCard;