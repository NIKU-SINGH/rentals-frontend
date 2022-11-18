import Image from "next/image";

function MediumCard({type, count, img}) {
    return (
        <div className="cursor-pointer">
            <div className="relative h-48 w-48">
                <Image 
                src={img || "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            }
                 layout="fill" 
                 className="rounded-xl" />
            </div>
            <p className="text-lg font-semibold mt-3">{type}</p>
            <h5 className="text-base">{count} Rooms</h5>
        </div>
    )
};
export default MediumCard;