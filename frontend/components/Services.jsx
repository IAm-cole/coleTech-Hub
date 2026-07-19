
import { Car, CircleCheck, Headset, Wallet } from 'lucide-react'


 const OtherServices = [
  {
    id: 1,
    icon: <Car className='text-4xl md:text-5xl text-red-600  ' />,
    title: "Free Shipping",
    description: "free Shipping On All Order",

  },
  {
     id: 2,
    icon: <CircleCheck className="text-4xl md:text-5xl bg-red-800 text-white rounded-full"/>,
    title: "Safe Money",
    description: "30 Days Money Back",

  },

  {
     id: 3,
    icon: <Wallet className="text-4xl md:text-5xl text-red-800"/>,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
     id: 4,
    icon: <Headset className="text-4xl md:text-5xl text-red-800"/>,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
  }
]


export const Services = () => {
  return (
    <div >
      <div className="mx-8 mb-8 my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {OtherServices.map((data) => (
            <div key={data.id} className='flex flex-col items-start sm:flex-row sm:items-center gap-4'>
                {data.icon}
                <div> 
                    <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                    <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                </div>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
