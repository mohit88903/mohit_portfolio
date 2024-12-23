import React from 'react';
import mm from "../img/mm.jpg";
import instagram from "../img/instagram_2111463.png";
import linkedin from "../img/linkedin_2504923.png";
import github from "../img/github-sign.png";
import facebook from "../img/facebook_2504903.png"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div id='about'>
      <div className='max-w-[1240px] mx-auto  md:grid grid-cols-2'>
        <div>
          <div className='p-8' data-aos="fade-right" >
            <img src={mm} className=' w-[400px] ' />
          </div>
        </div>
        <div className='border-black '>
          <div className='p-9'>
            <h1 className='text-5xl'>Abouts <span className='text-red-600'> Me </span></h1>
            <hr class=" w-1/5 mx-auto" />
            <p className='text-2xl pt-2 text-[#020202e3]'>Fullstake Developer</p>
            <p className='pt-2 text-[#020202bc]'>A full-stack developer is a professional
              skilled in both front-end and back-end technologies.
              They are responsible for designing, developing, and
              maintaining web applications across the entire technology
              stack. This role typically involves proficiency in programming
              languages such as JavaScript, HTML, and CSS for front-end development,
              along with server-side languages like Node.js, Python, or Ruby for back-end
              processes. Additionally, full-stack developers should have a solid
              understanding of databases, APIs, and version control systems. Their
              versatility enables them to manage projects from initial concept to
              deployment and ongoing maintenance.</p>
          </div>
          <div class="flex justify-start gap-8 ml-10">
            <Link to="https://www.instagram.com/mohit.90600?"> <img src={instagram} className='w-[40px]' /></Link>
            <Link to="https://www.linkedin.com/in/mohit-singh-684842240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <img src={linkedin} className='w-[40px]' /></Link>
            <Link to="https://github.com/mohit88903"> <img src={github} className='w-[40px]' /></Link>
            <Link to="https://www.facebook.com/share/19YcTcdv3Z/"> <img src={facebook} className='w-[40px]' /></Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About