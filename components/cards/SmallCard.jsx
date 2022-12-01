import Image from "next/image"


function SmallCard({ name, count, img }) {
    return (
        <div 
        className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
            {/* Left */}
            <div className="relative h-16 w-16">
                <Image src={img}
                    height={300}
                    width={300}
                    alt="hotel image"
                    className="rounded-lg h-full w-full object-cover"
                />
            </div>
            {/* Right */}
            <div>
                <h2 className="font-semibold text-lg">{name}</h2>
                <h3 className="text-gray-500">{count} Rooms Available</h3>
            </div>
        </div >
    );
}

export default SmallCard;