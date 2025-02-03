import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className = 'w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Forever, where fashion meets functionality!
            We are more than just an online clothing store – 
            we are a community of trendsetters, dreamers, and doers who believe that great style is for everyone. 
            At Forever, our mission is to empower you to express yourself 
            through high-quality, stylish, and affordable clothing that feels as good as it looks.</p>
          <p>Thank you for being a part of the Forever family! We’re here to make shopping an enjoyable experience, 
            with easy navigation, secure payment options, and exceptional customer support.
            Start exploring our collections today and let us help you redefine your wardrobe, one outfit at a time.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At Forever Clothes, our mission is to redefine timeless fashion by offering high-quality, 
              versatile clothing that inspires confidence and celebrates individuality. 
              We are committed to sustainability, ethical practices, and creating styles that stand the test of time. 
              With Forever Clothes, you’re not just wearing fashion – you’re embracing forever.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever Clothes, quality is at the heart of everything we create. 
            From premium fabrics to meticulous craftsmanship, we ensure every piece meets the highest standards of durability and comfort.
            Experience clothing that looks great, feels amazing, and lasts forever.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Shopping at Forever Clothes is effortless with our user-friendly website, secure payments, and fast delivery.
            Enjoy a seamless experience designed to fit your busy lifestyle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Coustomer Service:</b>
          <p className='text-gray-600'>Shopping at Forever Clothes is effortless with our user-friendly website, secure payments, and fast delivery.
            Enjoy a seamless experience designed to fit your busy lifestyle.</p>
        </div>        
      </div>
      
      <NewsLetterBox />

    </div>
  )
}

export default About
