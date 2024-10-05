import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className="flex justify-between h-70px my-5" >
      <div className="flex w-[124px] h-[25px] items-center">
      <span className="text-xl w-[61px] h-[21px]">MyFast</span>
      <span className="text-xl text-primary">x</span>
      <Image
      src="/logo.png"
      width={25}
      height={25}

      />
      <span className='text-primary w-[38px] h-[15px]' >Partner</span>


      </div>
      <div class="flex space-x-8">

      <button class="w-[268px] h-[34px] bg-black text-white rounded-lg ">
    Login
  </button>


  <button class="w-[268px] h-[34px] bg-black text-white rounded-lg ">
    Signup
  </button>
</div>
      
    </div>
  )
}

export default Header
