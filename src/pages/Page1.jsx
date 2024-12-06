import React from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page1 = () => {
    return (
        <div className='h-screen bg-white py-[1%] px-[1%]'>
            <div className='h-full w-full rounded-3xl bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2978,h_1342,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-cover shadow-gray-500 shadow-xl  '></div>
            <img src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="" />
            <TiltText />
            <Page1Bottom/>
        </div>
    )
}

export default Page1