'use client'
import Image from 'next/image'
import Link from 'next/link'
import React , { useState } from 'react'


const Payment = () => {
    const [currentView, setCurrentView] = useState('select');

  
    const handleSelectPaymentMethod = () => {
      setCurrentView('list');
    };
  
    const handleAddPaymentMethod = () => {
      setCurrentView('add');
    };
  return (
<div className=" ">
   
      <div className="max-w-5xl mx-auto bg-white rounded-lg  p-6 space-y-8">
        {currentView === 'select' && (
          <div className="flex flex-col lg:flex-row justify-between items-center p-6 space-y-8 lg:space-y-0">
         
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold mb-4">SELECT PAYMENT METHOD</h2>
              <div className="border-dashed border-2 border-gray-400 rounded-lg p-6 flex justify-center items-center">
                <button className="text-lg font-semibold text-gray-500" onClick={handleSelectPaymentMethod}>
                  + Add new payment method
                </button>
              </div>
            </div>

         
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image src="/payment.png" alt="Payment Illustration" width={400} height={400} className="max-w-full h-auto" />
            </div>
          </div>
        )}

        {currentView === 'list' && (
          <div className="flex flex-col lg:flex-row justify-between items-center p-6 space-y-8 lg:space-y-0">
         
            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold mb-4">SELECT PAYMENT METHOD</h2>

            
              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">**** 3456</p>
                    <p className="text-gray-500 text-sm">Expires 12/24</p>
                  </div>
                  <div>
                    <input type="radio" name="payment" className="form-radio text-primary" />
                  </div>
                </div>

                <div className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">**** 7890</p>
                    <p className="text-gray-500 text-sm">Expires 01/25</p>
                  </div>
                  <div>
                    <input type="radio" name="payment" className="form-radio text-primary" />
                  </div>
                </div>

                <button className="text-gray-500" onClick={handleAddPaymentMethod}>+ Add another payment method</button>
              </div>

              <button className="bg-green-500 text-white py-2 px-4 rounded-lg w-full mt-4" onClick={() => alert('Proceeding to pay!')}>
                Proceed to Pay
              </button>
            </div>

         
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image src="/payment.png" alt="Payment Illustration" width={400} height={400} className="max-w-full h-auto" />
            </div>
          </div>
        )}

            <div className="w-full lg:w-1/2">
              <h2 className="text-xl font-bold mb-4">ADD PAYMENT METHOD</h2>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setCurrentView('list'); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="Enter Card Number" required />
                </div>

                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="MM/YY" required />
                  </div>

                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="CVV" required />
                  </div>
                </div>

                <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg w-full">
                  Add Payment Method
                </button>
              </form>
            </div>

           
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image src="/payment.png" alt="Payment Illustration" width={400} height={400} className="max-w-full h-auto" />
            </div>
          </div>
      
     
    </div>

  )
}

export default Payment
