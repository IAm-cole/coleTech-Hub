import { Button } from "./Shared/Button"



export const ProductCard = ({data}) => {
  return (
    <div className="mb-10">
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
    {
    data.map((item) => (
      <div key={data.id} className="group">

            <div className="relative ">
                <img src={item.image} alt="" className="h-35 w-35  object-cover rounded-3xl" />

                {/* hover button */}
                <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full  text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
                    <Button text={"Add to cart"} className="bg-red-600 text-white" />
                </div>
            </div>
            <div className="leading-7">
                <h2 className="font-semibold">{item.title}</h2>
                <h2 className="font-bold">{item.price}</h2>

            </div>
            </div>
        ))
    }
   </div>

    </div>
  )
}
