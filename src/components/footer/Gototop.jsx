import React from 'react';
import up from "../img/up-arrow_10024409.png";


const Gototop = () => {
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (

        <div className='top-btn' onClick={goToBtn}>
            <p  className='flex justify-end mr-7 '
            > <img src={up} className='w-[50px] shadow-lg shadow-cyan-500 rounded-2xl' /></p>
        </div>


    )
}

export default Gototop