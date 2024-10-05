
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (

  <div className="container mx-auto">

    <div className="container mx-auto p-4 md:p-8">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
    <div className="row-span-3 bg-bg p-4 md:p-6 rounded-lg">
      <Image
        src="/truck-dLHB36Ze6b.png"
        width={292}
        height={219}
        alt="Truck"
        className="mb-4 w-full h-auto"
      />
      <h3 className="text-lg font-bold">
        Welcome to MyFastX: <span className="text-primary">Partner</span>
      </h3>
      <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-4">
        Quick & Reliable Delivery and Logistics Solution
      </h2>
      <p className="text-gray-700 mb-4">
        At MyFastX, we are revolutionizing the delivery and logistics industry by providing dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.
      </p>
    </div>

 
    <div className="row-span-2 col-span-1 md:col-span-2 bg-bg p-4 md:p-6 rounded-lg relative overflow-hidden">
      <div className="w-full h-[150px] bg-diagonal-lines"></div>
      <div className="absolute inset-0 bg-repeat bg-[linear-gradient(135deg,#4ade80 1px,#fff 1px)] bg-[length:20px_20px] skew-x-6"></div>
      <div className="relative z-10">
        <h3 className="text-primary font-bold">Drive Your Success with MyFastX</h3>
        <h1 className="text-xl md:text-2xl font-bold mb-4">Join Us as a Partner Driver</h1>
        <p className="text-gray-700 mb-6">
          Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you &apos; ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
        </p>
       <Link href="/payment">
       <button className="bg-black text-white py-2 px-4 md:px-6 rounded-md">
          Register now for just Rs. 999!
        </button>
       </Link>
      </div>
    </div>

  
    <div className="col-span-1 md:col-span-2">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      
        <div className="p-4 md:p-6 rounded-lg bg-bg">
          <Image src="/Transaction.png" width={44} height={44} alt="Transaction" />
          <h4 className="text-lg text-primary font-bold">Reliable Income</h4>
          <p className="text-black">Enjoy earnings with constant delivery requests.</p>
        </div>

     
        <div className="p-4 md:p-6 rounded-lg bg-bg">
          <Image src="/Schedule.png" width={44} height={44} alt="Schedule" />
          <h4 className="text-lg text-primary font-bold">Flexible Schedule</h4>
          <p className="text-black">Choose hours that fit your lifestyle and personal needs.</p>
        </div>

      
        <div className="p-4 md:p-6 rounded-lg bg-bg">
          <Image src="/OnlineSupport.png" width={44} height={44} alt="Support" />
          <h4 className="text-lg text-primary font-bold">Support</h4>
          <p className="text-black">Access our dedicated team whenever you need assistance.</p>
        </div>

    
        <div className="p-4 md:p-6 rounded-lg bg-bg">
          <Image src="/increase.png" width={44} height={44} alt="Growth curve" />
          <h4 className="text-lg text-primary font-bold">Growth Opportunities</h4>
          <p className="text-black">Advance your career with regular training and development programs.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
   
    <div className="space-y-8">
      <p className="bg-bg w-[150px]">How It Works </p>
      <h2 className="text-2xl font-bold mb-4">Simple Steps to Get Started</h2>
      
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
         <Image
         src="/register.png"
         width={50}
         height={50}
         alt="register"
         />
        </div>
        <div className="bg-bg">
          <h3 className="text-lg font-bold text-primary">Register Online</h3>
          <p className="text-gray-600">Fill out our easy online application form and pay the registration fee of Rs. 999.</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
        <Image
         src="/veryfy.png"
         width={50}
         height={50}
         alt="Verify"
         />
        </div>
        <div className="bg-bg">
          <h3 className="text-lg font-bold text-primary">Get Verified</h3>
          <p className="text-gray-600">Complete the verification process to ensure you meet our standards.</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-green-100 p-2 rounded-full">
        <Image
         src="/car.png"
         width={50}
         height={50}
         alt="Car"
         />
        </div>
        <div className="bg-bg">
          <h3 className="text-lg font-bold text-primary">Start Driving</h3>
          <p className="text-gray-600">Once approved, start accepting delivery requests and earn money.</p>
        </div>
      </div>
    </div>

 
    <div className="flex justify-center md:justify-end">
      <Image 
        src="/vehicles.png" 
        width={400} 
        height={300} 
        alt="Vehicles on the road" 
        className="w-full h-auto"
      />
    </div>

  </div>
</div>


<div className="flex flex-col md:flex-row items-center p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    
    <div className="hidden md:block">
      <p className="bg-bg w-[180px] p-2 text-center rounded-md">What Our Partners Say</p>
      <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
      <p className='mb-4'>
        At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here &apos; s what they have to say about their experiences with our quick and reliable delivery and logistics services.
      </p>
      <div className="flex space-x-4">
        <Image src="/care2.png" width={100} height={100} alt='car2' />
        <Image src="/Group.png" width={100} height={100} alt='Group' />
      </div>
    </div>

  
    <div className="bg-bg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Image src="/avataar.png" width={64} height={64} alt="James Darwin" className="w-16 h-16 rounded-full mr-3" />
        <div>
          <h3 className="text-lg font-semibold">James Darwin</h3>
          <p className="text-sm text-gray-500">Kolkata, West Bengal</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier.
      </p>
      <div className="flex mb-4">
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
        <span className="text-yellow-400">&#9733;</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-white space-x-2 mt-2 rounded-lg">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button className="text-gray-400 bg-white rounded-full px-3 py-1">&lt;</button>
          <button className="text-gray-400 bg-white rounded-full px-3 py-1">&gt;</button>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container flex ">
  <div className="grid grid-col-1 md:grid-cols-2">
  <div className="">
  <span className="bg-bg py-2 px-4 rounded-lg">Join the MyFastX Community Today!</span>
  <h2 className="text-2xl font-bold mb-4 mt-4">Ready to Get Started?</h2>
  <p className='mb-4'>
    Don&apos;t miss out on this incredible opportunity to be part of a leading delivery and logistics platform. 
    Sign up now for just <span className="text-primary font-semibold">Rs. 999</span> and start driving your way to success with MyFastX!
  </p>
  <button className="ml-2 px-4 py-2 bg-black text-white rounded-lg mb-4">Register Now</button>
  
  <p className="mb-2">For more information:</p>
  <h3 className="text-lg font-semibold">Contact us at:</h3>
  
  <div className="flex items-center space-x-2 mb-4">
    <Image
      src='/Phone.png'
      width={40}
      height={40}
      alt='phone'
      className='bg-primary rounded-full'
    />
    <span>+91-XXXXX XXXXX</span>
  </div>
  
  <div className="flex items-center space-x-2">
    <Image
      src='/support.png'
      width={40}
      height={40}
      alt='support'
      className='bg-primary rounded-full'
    />
    <span>support@myfastx.com</span>
  </div>
</div>

    <div className="">
  <span className="bg-bg  py-2 font-semibold">Frequently Asked Questions</span>
  <h2 className="text-2xl font-bold  mb-4">Got Questions? We’ve Got Answers!</h2>
  <ul className="mt-4 space-y-4 bg-bg rounded-lg p-4">
    <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100">
      <span>What type of vehicles are eligible?</span>
      <button className="text-gray-400">&gt;</button>
     
    </li>
    
    <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100">
      <span>How do I get paid?</span>
      <button className="text-gray-400">&gt;</button>
    </li>
    <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100">
      <span>What areas does MyFastX operate in?</span>
      <button className="text-gray-400">&gt;</button>
    </li>
    <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100">
      <span>What type of vehicles are eligible?</span>
      <button className="text-gray-400">&gt;</button>
    </li>
    <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100">
      <span>How do I get paid?</span>
      <button className="text-gray-400">&gt;</button>
    </li>
    <li className="flex justify-between items-center p-2 rounded hover:bg-gray-100">
      <span>What areas does MyFastX operate in?</span>
      <button className="text-gray-400">&gt;</button>
    </li>
  </ul>
</div>


  </div>
</div>
<div className="flex flex-col justify-center items-center bg-joinbg w-full h-[460px]">
  <p className="text-primary text-center mb-2">Drive Your Success with MyFastX</p>
  <h1 className="text-black text-4xl text-center mb-4 font-bold">Join Us as a Partner Driver</h1>
  <p className="text-center px-20 mb-4">
    Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network
    of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering
    smiles across the city.
  </p>
  <div className="flex items-center justify-center">
   <Link href="/payment">
   <button className="px-4 py-2 bg-black text-white rounded-lg">
      Register now for just Rs. 999!
    </button>
   </Link>
  </div>
</div>





    

</div>






  );
}
