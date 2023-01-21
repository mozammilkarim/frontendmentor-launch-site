import React from 'react'
// import free from "../../assets/icon-free.svg";
import check from "../../assets/icon-check.svg";

const pricingArr1 = [
    "Unlimited products", "Basic analytics", "Limited marketplace exposure", "10% fee per transaction"
]
const pricingArr2 = ["Custom domain", "Advanced analytics and reports", "High marketplace visibility", "5% fee per transaction"]
const PricingPlans = () => {
    return (
        <div className='lg:px-[260px] px-[24px] md:px-[98px] text-white'>
            <div className='text-center mx-auto max-w-[540px]'>
                <h1 className='font-[800]  text-3xl mb-[24px]'>Our pricing plans</h1>
                <p className='text-[#777F98] font-medium '>We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
            </div>
            <div className='flex flex-col items-center justify-center md:flex-row mt-[117px] pb-[151px] gap-[30px]'>
                <div className='flex flex-col py-[48px] px-[38px] rounded-[2rem] bg-[#093F68]'>
                    <h2 className=' font-[800] text-lg bg-inherit'>Dip your toe</h2>
                    <p className='mt-[19px] mb-[24px] bg-inherit font-medium opacity-[0.6] max-w-[369px]'>Just getting started? No problem at all! Our free plan will take you a long way.</p>
                    <h3 className='text-[40px] mb-[19px] bg-inherit font-[800]'>Free</h3>
                    {pricingArr1.map((feature, index) => {
                        return (
                            <div key={`pricefeature1${index + 1}`} className='flex justify-start my-[6px] gap-[16px] items-center bg-inherit'>
                                <div className='bg-inherit '>
                                    <svg className='bg-inherit' xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path fill="#3EE9E5" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" /></svg>
                                </div>
                                <h3 className='bg-inherit font-medium'>{feature}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col py-[48px] px-[38px] rounded-[2rem] bg-[#3EE9E5] text-[#080C20]'>
                    <h2 className=' font-[800] text-lg bg-inherit'>Dive right in</h2>
                    <p className='mt-[19px] mb-[24px] bg-inherit font-medium opacity-[0.6] max-w-[369px]'>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
                    <div className='bg-inherit flex '>

                        <h3 className='text-[40px] mb-[19px] bg-inherit font-[800]'>$25.00</h3>
                        <span className='bg-inherit my-auto opacity-60'>/month</span>
                    </div>
                    {pricingArr2.map((feature, index) => {
                        return (
                            <div key={`pricefeature2${index + 1}`} className='flex justify-start my-[6px] gap-[16px] items-center bg-inherit'>
                                <div className='bg-inherit '>
                                    <svg className='bg-inherit' xmlns="http://www.w3.org/2000/svg" width="12" height="9"><path fill="#093F68" d="M10.319.768l1.363 1.464-7.128 6.634L.319 4.924 1.682 3.46l2.871 2.674z" /></svg>
                                </div>
                                <h3 className='bg-inherit font-medium'>{feature}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PricingPlans