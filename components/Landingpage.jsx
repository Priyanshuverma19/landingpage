import Image from 'next/image'
import React from 'react'

const Landingpage = () => {
  return (
<div className="container mx-auto p-8">
 
  <div className="grid grid-row-3 grid-flow-col gap-8">
    
    <div className="row-span-3 bg-bg p-6 rounded-lg ">
      <Image src="/truck-dLHB36Ze6b.png"  width={292}
           height={219} alt="Truck" className="mb-4"/>
      <h3 className="text-lg font-bold">Welcome to MyFastX: <span className="text-green-500">Partner</span></h3>
      <h2 className="text-2xl font-bold text-green-600 mb-4">Quick & Reliable Delivery and Logistics Solution</h2>
      <p className="text-gray-700 mb-4">
        At MyFastX, we are revolutionizing the delivery and logistics industry by providing dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.
      </p>
    </div>

    
    <div className="row-span-2 col-span-2 bg-bg p-6 rounded-lg ">

    <div className="w-full h-[150px] bg-diagonal-lines"></div>
   
      <div className="absolute inset-0 bg-repeat bg-[linear-gradient(135deg,#4ade80 1px,#fff 1px)] bg-[length:20px_20px] skew-x-6"></div>

    
      <div className="relative z-10">
        <h3 className="text-green-500 font-bold">Drive Your Success with MyFastX</h3>
        <h1 className="text-2xl font-bold mb-4">Join Us as a Partner Driver</h1>
        <p className="text-gray-700 mb-6">
          Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you'll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-md">
          Register now for just Rs. 999!
        </button>
      </div>
     
    </div>
    <div className="col-span-2">
  
<div className='flex gap-4'>
<div className=" p-6 rounded-lg bg-bg ">
    <Image 
    src="/Transaction.png"
    width={44}
    height={44}
    alt="Transaction"
    />
    <h4 className="text-lg text-primary font-bold">Reliable Income</h4>
    <p className="text-black">Enjoy earnings with constant delivery requests.</p>
  </div>


  <div className=" p-6 rounded-lg bg-bg">
  <Image 
    src="/Schedule.png"
    width={44}
    height={44}
    alt="Schedule"
    />
    <h4 className="text-lg text-primary font-bold">Flexible Schedule</h4>
    <p className="text-black">Choose hours that fit your lifestyle and personal needs.</p>
  </div>


  <div className=" p-6 rounded-lg bg-bg ">
  <Image 
    src="/OnlineSupport.png"
    width={44}
    height={44}
    alt="Support"
    />
    <h4 className="text-lg text-primary font-bold">Support</h4>
    <p className="text-black">Access our dedicated team whenever you need assistance.</p>
  </div>

 
  <div className="p-6 rounded-lg bg-bg">
  <Image 
    src="/increase.png"
    width={44}
    height={44}
    alt="Groyh curve"
    />
    <h4 className="text-lg text-primary font-bold">Growth Opportunities</h4>
    <p className="text-black">Advance your career with regular training and development programs.</p>
  </div>
</div>
</div>
    
  </div>


  
</div>

  )
}

export default Landingpage
