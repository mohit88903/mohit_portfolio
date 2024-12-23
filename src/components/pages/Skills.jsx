import React from 'react';
import html from "../img/html.png";
import css from "../img/css-3.png";
import js from "../img/js.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import tailwind from '../img/tailwindcss.png';
import data from "../img/database-management.png";
import github from "../img/github-sign.png";
import java from "../img/java.png";

const Skills = () => {

    return (
        <section id='skill' className='py-20'>
            <h1 className='text-4xl text-center mr-18'> My Skills </h1> <hr class=" w-1/5 mx-auto" />
            
        <div className='max-w-[1240px] justify-items-center   lg:grid grid-cols-3  pt-5 mx-auto md:pt-0'>
            
            <div className='w-[230px] h-[160px] rounded-lg 
               shadow-lg shadow-cyan-500/50 m-8  bg-[white]
               hover:scale-105 duration-500
               '>
                <div className='flex justify-center pt-4'>
                    <img src={html} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>HTML</p>
                </div>
            </div>

            <div className='w-[240px] h-[160px] rounded-lg 
                shadow-lg shadow-indigo-500/50 m-8 bg-[white]  hover:scale-105 duration-500 '>
                <div className='flex justify-center pt-4'>
                    <img src={css} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>CSS</p>
                </div>
            </div>

            <div className='w-[240px] h-[160px] rounded-lg 
              shadow-lg shadow-blue-500/50 m-8  bg-[white]   hover:scale-105 duration-500 '>
                <div className='flex justify-center pt-4'>
                    <img src={js} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>JAVASCRIPT</p>
                </div>
            </div>

            <div className='w-[240px] h-[160px] rounded-lg 
             shadow-lg shadow-cyan-500/50  m-8  bg-[white]  hover:scale-105 duration-500'>
                <div className='flex justify-center pt-4'>
                    <img src={react} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>REACT</p>
                </div>
            </div>

            <div className='w-[240px] h-[160px] rounded-lg 
              shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] m-8  bg-[white]  hover:scale-105 duration-500 '>
                <div className='flex justify-center pt-4'>
                    <img src={redux} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>REDUX</p>
                </div>
            </div>


            <div className='w-[240px] h-[160px] rounded-lg 
              shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] m-8  bg-[white] hover:scale-105 duration-500'>
                <div className='flex justify-center pt-4'>
                    <img src={tailwind} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>TAILWIND CSS</p>
                </div>
            </div>

            <div className='w-[240px] h-[160px] rounded-lg 
           shadow-lg shadow-blue-500/50 m-8  bg-[white]   hover:scale-105 duration-500'>
                <div className='flex justify-center pt-4'>
                    <img src={java} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>JAVA</p>
                </div>
            </div>

            <div className='w-[240px] h-[160px] rounded-lg 
               shadow-lg shadow-cyan-500/50 m-8 bg-[white]  hover:scale-105 duration-500 '>
                <div className='flex justify-center pt-4'>
                    <img src={data} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>DATABASE</p>
                </div>
            </div>

            <div className='w-[240px] h-[160px] rounded-lg 
                 shadow-lg shadow-indigo-500/50 m-8  bg-[white]   hover:scale-105 duration-500'>
                <div className='flex justify-center pt-4'>
                    <img src={github} className='w-[100px]' />
                </div>
                <div className='flex justify-center pt-2 text-lg'>
                    <p>GITHUB</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Skills