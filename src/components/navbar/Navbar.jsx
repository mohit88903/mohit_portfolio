import React, { useState } from 'react';
import mohit from "../img/mohit.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (

        <nav className='fixed top-0 w-[100%] p-2 border-b bg-background/95 backdrop-blur supports-[background-filter]:bg-background/60'>
            <div className='max-w-[1240px] items-center mx-auto flex justify-between text-[21px]
                '>
                <div className='w-52'>
                    <img src={mohit} />
                </div>
                {
                    toggle ?
                        <IoClose onClick={() => setToggle(!toggle)} className='block text-3xl md:hidden' />

                        :
                        <CgMenuRightAlt onClick={() => setToggle(!toggle)} className='block text-3xl md:hidden' />


                }

                <ul className='hidden gap-5 md:flex'>

                <li >
                        <Link to='hero'> <button>Home </button></Link>
                    </li>
                    <li >
                        <Link to='skill'> <button>Skills </button></Link>
                    </li>

                    <li>
                        <Link to='project'> <button>Project </button></Link>
                    </li>
                    <li>
                        <Link to='about'> <button>About </button></Link>
                    </li>
                    <li>
                        <Link to='contact'> <button>Contact </button></Link>
                    </li>

                </ul>

                {/* Responsive Menu */}
                <ul className={` duration-400 md:hidden gap-5  bg-[#ffffffd7] fixed 
                top-[60px] w-full text-center h-screen  ${toggle ? 'left-[0]' : 'left-[-100%]'} `}  >


<li className='p-7'>

<Link to='skill'> <button>Skills </button></Link>
</li>

<li className='p-7'>
<Link to='project'> <button>Project </button></Link>
</li>
<li className='p-7'>
<Link to='about'> <button>About </button></Link>
</li>
<li className='p-7'>
<Link to='contact'> <button>Contact </button></Link>
</li>


                </ul>
            </div>
        </nav >

    )
}

export default Navbar