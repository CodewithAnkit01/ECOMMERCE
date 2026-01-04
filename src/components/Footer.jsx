import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='nb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel sint dolorem maiores? Corporis, officiis. Recusandae cupiditate veritatis .</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get in touch.</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+9779746435200</li>
                    <li>test123@gmail.com</li>

                </ul>
            </div>

        </div>
        <div>
            <hr />
        <p className='py-5 text-sm text-center'>
            copyright 2026@ test.com - All Right Reserved.
        </p>
            
        </div>
      
    </div>
  )
}

export default Footer
