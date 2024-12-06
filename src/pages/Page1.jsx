import React from 'react';
import TiltText from '../components/TiltText';
import Page1Bottom from '../components/Page1Bottom';

const Page1 = () => {
    return (
    //    <div className='h-screen bg-white px-[1%] py-[1%]'>
         <div className='h-screen relative '>
            {/* Background Image */}
            <div className='absolute inset-0 h-full w-full pt-10  bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2978,h_1342,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-cover shadow-xl'>
            </div>

            {/* Logo (Top-Left) */}
            <img 
                id='logo' 
                className='absolute top-7 left-12 w-[95px] h-[95px] z-10' 
                src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" 
                alt="Logo" 
            />

            {/* Content (TiltText) */}
            <div className='relative z-10 h-full flex items-center'>
                <div className='pl-16'>
                    <TiltText />
                    <Page1Bottom />
                </div>
            </div>

            {/* Bottom Content */}
           
        </div>
    //    </div>
    );
};

export default Page1;
