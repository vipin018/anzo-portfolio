import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <div className='fixed w-full z-10 p-12 flex items-center justify-between'>
            <div className='flex items-center'>
                {/* <img src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" /> */}
            </div>
            <div className='flex items-center'>
                <button className=' bg-black px-7 text-white rounded-full text-md border-4 py-2 hover:bg-[#949494]'>Hire Me</button>
                <i className="ri-menu-4-fill text-4xl text-[#9B9B9B] ml-4"></i>
            </div>
        </div>
    )
}

export default Header