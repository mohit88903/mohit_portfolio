import React from 'react';
import { Link } from 'react-router-dom';
import fashion from "../img/fashion.png";
import calculator from "../img/calculator.png";
import tic from "../img/tic-tac.png";
import weather from "../img/Screenshot 2024-12-15 140307.png";
import textutils from "../img/Screenshot 2024-12-15 141500.png";
const Project = () => {
  return (
    <section id='project'>
      <h1 className='text-4xl text-center mr-18'> My Project </h1> <hr class=" w-1/5 mx-auto" />
      <div className='max-w-[1240px] justify-items-center   lg:grid grid-cols-3  pt-5 mx-auto gap-4'>
        <div className='w-[350px] h-[270px] rounded-lg 
               shadow-lg shadow-cyan-500/50 m-8  bg-[white]
               hover:scale-105 duration-500
               '  data-aos="flip-left">
          <div className='flex justify-center pt-4'>
            <img src={fashion} className='w-[400px] h-[180px]' />
          </div>
          <div className='flex justify-center pt-4 text-lg'>
            <Link to="https://fashiondj.netlify.app/" className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"><p> Demo </p> </Link>
          </div>
        </div>
        
        <div className='w-[350px] h-[270px] rounded-lg 
               shadow-lg shadow-indigo-500/50 m-8  bg-[white]
               hover:scale-105 duration-500
               '  data-aos="flip-left">
          <div className='flex justify-center pt-4'>
            <img src={calculator} className='w-[200px] h-[180px]' />
          </div>
          <div className='flex justify-center pt-4 text-lg'>
            <Link to="https://calculator1a.netlify.app/" className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"><p> Demo </p></Link>
          </div>
        </div>
        
        <div className='w-[350px] h-[270px] rounded-lg 
                shadow-lg shadow-blue-500/50 m-8  bg-[white]
               hover:scale-105 duration-500
               '  data-aos="flip-left">
          <div className='flex justify-center pt-4'>
            <img src={tic} className='w-[200px] h-[180px]' />
          </div>
          <div className='flex justify-center pt-4 text-lg'>
            <Link to="https://tictacgame2.netlify.app/" className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"><p> Demo </p> </Link>
          </div>
        </div>
        <div className='w-[350px] h-[270px] rounded-lg 
                shadow-lg shadow-blue-500/50 m-8  bg-[white]
               hover:scale-105 duration-500
               '  data-aos="flip-left">
          <div className='flex justify-center pt-4'>
            <img src={weather} className='w-[200px] h-[180px]' />
          </div>
          <div className='flex justify-center pt-4 text-lg'>
            <Link to="https://weatherapp90600.netlify.app/" className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"><p> Demo </p> </Link>
          </div>
        </div>

        <div className='w-[350px] h-[270px] rounded-lg 
                shadow-lg shadow-blue-500/50 m-8  bg-[white]
               hover:scale-105 duration-500
               '  data-aos="flip-left">
          <div className='flex justify-center pt-4'>
            <img src={textutils} className='w-[300px] h-[180px]' />
          </div>
          <div className='flex justify-center pt-4 text-lg'>
            <Link to="https://textutils012.netlify.app/" className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"><p> Demo </p> </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project