import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center
     container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span 
      className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>
        Passionate ABout Properties, Dedicated to Your Vision</p>

    <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt=""  className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                 <div>
                    <p className='text-4xl font-medium textgra800'>10+</p>
                    <p>Years of Excellence</p>
                 </div>

                 <div>
                    <p className='text-4xl font-medium textgra800'>12+</p>
                    <p>Projects Completed</p>
                 </div>

                 <div>
                    <p className='text-4xl font-medium textgra800'>20+</p>
                    <p>Mn. Sq. Ft. Delevered</p>
                 </div>

                 <div>
                    <p className='text-4xl font-medium textgra800'>25+</p>
                    <p>Ongoing Projects</p>
                 </div>
            </div>
            <p className='my-10 max-w-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button
            className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>

        </div>

    </div>
    </div>
  )
}

export default About
