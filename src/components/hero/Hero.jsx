import React from 'react';
import { ReactTyped } from "react-typed";
import ms from "../img/_Mohit Singh  (2).png"

const Hero = () => {
    return (
        <div className='max-w-[1240px] md:max-w-[1190px] pt-10 md:pt-24 mx-auto
    md:grid grid-cols-2 
    '>
            <div className='grid col-span-1 py-5 border-blue'>
                <div className='text-4xl font-medium md:text-6xl'>
                    <h2 className='p-3'>Hi There,</h2>
                    <h2 className='p-3'>I'am <span className='text-[rgb(255,0,0)]'> Mohit Singh </span>
                    </h2>
                </div>
                <div className='pb-8'>
                    <p className='text-2xl p-3 text-[#000000c5] '>
                        <ReactTyped
                            strings={[" Fullstack Web Developer <",
                            ]}
                            typeSpeed={100}
                        /></p>
                    <p className='p-3 text-[#000000ad] '>I'm a passionate web developer with in React , Next.js and modern web Technologies.I
                        love creating beautiful  functional website that solve  real word  problems.  </p>
                    <button className='p-2 ml-2 text-white bg-black rounded-md hover:bg-red-600'>Contact ME</button>
                </div>

            </div>
            <div className='grid col-span-1 p-2 mb-8 md:mb-0 md:p-8 ' >
                <div className='flex justify-center' data-aos="fade-left" >
                    <img src={ms} className=' h-full w-[500px] md:w-[340px] object-cover  ' />
                </div>
            </div>
        </div>
    )
}

export default Hero