import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
    const [visible, setVisible]= useState(false);
    const{setShowSearch} = useContext(ShopContext);

  return (
    <div className=' flex items-center justify-between py-5 font-medium'>
        <Link to="/"><img className='w-36' src={assets.logo} alt="" /> </Link>
      <ul className='hidden  sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
             </NavLink>
             <NavLink to='/collection' className="flex flex-col items-center gap-1">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/about' className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
         <NavLink to='/contact' className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
       
        
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
        <div className='group relative'>
            <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-400 rounded-xl px-1'>
                    <p className='cursor-pointer hover:text-black '>My Profile</p>
                    <p className='cursor-pointer hover:text-black '>Orders</p>
                    <p className='cursor-pointer hover:text-black '>Logout</p>

                </div>

            </div>

        </div>
        <Link to='/cart' className='relative'>
        <img className='w-5 min-w-5 'src={assets.cart_icon} alt="" />
       <p className='absolute right-[-5px] bottom-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
10</p>
        
        </Link>
        <img  onClick={() => setVisible(true)}
  className=' w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
 </div>

         {/* Side bar menu for small screen */}
        <div
  className={`fixed top-0 right-0 h-screen bg-white z-50 transition-all duration-300
  ${visible ? 'w-full' : 'w-0'}`}>
    <div className=' flex flex-col text-gray-600'>
        <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img  className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
            <p>Back</p>

        </div>
        <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border"to='/'>HOME</NavLink>
        <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border"to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border"to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border"to='/contact'>CONTACT</NavLink>

    </div>
</div>
       

    </div>
  )
}

export default Navbar
