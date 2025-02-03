import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-small'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt=""/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Most Trusted Trendy Garments In One Store
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 '>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 7569236153</li>
                <li>shopz2025@gamil.com</li>
            </ul>
        </div>
      </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copy-Right 2025 All-Rights Resevered.
            </p>
        </div>
    </div>
  )
}

export default Footer
