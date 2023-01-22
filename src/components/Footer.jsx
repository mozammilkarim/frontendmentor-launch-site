import React from 'react'
import EmailComponent from './EmailComponent'
import PrimaryButton from './PrimaryButton'
import heroImage from "../../assets/bg-hero-squiggle.svg";
import  "./bgCss.css";
const Footer = () => {
    // style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} 
    return (
        <footer className='relative' >
            {/* <div className='relative w-full max-h-[228px]'>
                <img src={heroImage} className="absolute w-full max-h-full" alt="" />

            </div> */}
            <div className='mx-auto w-full footer' >
                <h2 className='text-[32px] mb-[42px] text-center mx-auto font-[800] text-white max-w-[730px] w-fit' >Get notified when we launch</h2>
                <div className='mx-auto w-fit flex flex-col sm:flex-row justify-center gap-[16px]'>
                    <div>

                    <EmailComponent />
                    </div>
                    <div className='sm:m-0  w-fit'>

                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer