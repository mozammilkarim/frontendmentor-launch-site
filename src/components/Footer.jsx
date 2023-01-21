import React from 'react'
import EmailComponent from './EmailComponent'
import PrimaryButton from './PrimaryButton'
import heroImage from "../../assets/bg-hero-squiggle.svg";

const Footer = () => {
    return (
        <div className='pb-[159px] mt-[42px]' style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
            <div className=''>
                <h2 className='text-[32px] pb-[42px] text-center mx-auto font-[800] text-white max-w-[730px] w-full'>Get notified when we launch</h2>
                <div className='mx-auto flex flex-col sm:flex-row justify-center gap-[16px]'>
                    <EmailComponent />
                    <div className=' mx-auto'>

                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer