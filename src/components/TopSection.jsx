import React from 'react'
import heroImage from "../../assets/bg-hero-squiggle.svg";
import leftImage from "../../assets/illustration-hero-left.svg";
import rightImage from "../../assets/illustration-hero-right.svg";
import scrollImage from "../../assets/icon-scroll.svg";


const TopSection = () => {
    return (
        <div className='flex justify-center flex-col sm:flex-row relative overflow-hidden sm:h-[460px]'>
            <div className='relative sm:-left-10 my-auto flex sm:block justify-center w-[408px] '>

                <img src={leftImage} alt="" className='block'/>
                <img src={rightImage} alt="" className='block sm:hidden'/>
                
            </div>
            <div className=' my-auto flex flex-col items-center' style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className='font-[800] text-6xl text-white'>
                    <h1 className='text-center'>Get paid for the work</h1>
                    <div className='text-center'>you <span className='text-[#3EE9E5]'>love</span> to do. </div>
                </div>
                <p className='text-[#777F98] text-center mt-[24px] mb-[64px]'>The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
                <div className='text-center flex justify-center w-full'>

                    <img src={scrollImage} alt="" className=' cursor-pointer ' />
                </div>
                {/* <img src={heroImage} alt="" className='absolute z-[2]' /> */}
            </div>
            <div className='relative sm:-right-10 my-auto hidden sm:block'>

                <img src={rightImage} alt="" />
            </div>
        </div>
    )
}

export default TopSection