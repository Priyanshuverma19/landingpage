import React from 'react'

const Footer = () => {
  return (
    <>
    <footer class="bg-black w-full text-white py-8 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h2 class="text-lg font-semibold mb-4">MyFast<span class="text-yellow-400">X</span></h2>
          <p class="text-sm mb-4">
            MyFastX is a leading logistics platform that provides hyper-local, on-demand delivery solutions for individuals and businesses.
          </p>
          <p class="text-sm mb-4">
            Address: Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida
          </p>
          <p class="text-sm mb-4">
            Email: <a href="mailto:care@myfastx.com" class="text-yellow-400">care@myfastx.com</a><br/>
            Phone: <a href="tel:+918961310988" class="text-yellow-400">+91 8961310988</a>
          </p>
        </div>
  
       
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">About Us</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">What We Do?</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Investors</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Press Release</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Careers</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Pricing Details</a></li>
          </ul>
        </div>
  
      
        <div>
          <h3 class="text-lg font-semibold mb-4">Policies</h3>
          <ul>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Terms And Conditions</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Privacy Policy</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Cookie Policy</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Fraud Disclaimer</a></li>
          </ul>
        </div>
  
     
        <div>
          <h3 class="text-lg font-semibold mb-4">Help</h3>
          <ul>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Restricted Items</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Parcel size and weight guide</a></li>
            <li class="mb-2"><a href="#" class="text-sm hover:text-yellow-400">Packaging guide</a></li>
          </ul>
        </div>
      </div>
  
      <div class="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
        <div class="text-sm text-gray-400">
            <h3>Our Presence:</h3>
          <p> Delhi  Noida  Greater Noida  Ghaziabad  Gurugram  Faridabad  Bahadurgarh  Kolkata</p>
        </div>
       
      
      </div>
      <div class="text-sm border-t border-gray-700  text-gray-400 mt-5 flex space-x-4 justify-center items-center ">
          <span >&copy; 2024 MYFASTEX TECHNOLOGIES PVT LTD. All Rights Reserved</span>
          <span>CIN: U52219UP2023PTC192260</span>
        </div>
    </div>
  </footer>
  </>
  
  )
}

export default Footer
