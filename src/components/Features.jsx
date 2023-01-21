import React from 'react'
import passions from "../../assets/illustration-passions.svg";
import lifestyle from "../../assets/illustration-lifestyle.svg";
import financialFreedom from "../../assets/illustration-financial-freedom.svg";
import workAnywhere from "../../assets/illustration-work-anywhere.svg";

const fetaureArray = [
    {
        image: passions,
        title: "Indulge your passions",
        description: "Your passions shouldn't be just for the weekend. Earn a living doing what you love."
    },
    {
        image: lifestyle,
        title: "Gain financial freedom",
        description: "Start making money work for you. There’s nothing quite like earning while you sleep. "
        , marginTop: 40
    },
    {
        image: financialFreedom,
        title: "Choose your lifestyle",
        description: "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
    },
    {
        image: workAnywhere,
        title: "Work from anywhere",
        description: "Selling online means not being pinned down. Want to work AND travel? Go for it!"
        , marginTop: 40
    },
]
const Feature = ({ feature }) => {
    return (
        <div className={`w-full gap-[55px] lg:gap-0 flex flex-col sm:flex-row lg:flex-col justify-center lg:items-start items-center ${feature?.marginTop ? `lg:mt-[50px] md:mt-0 md:mr-[50px] lg:m-0` : `lg:mb-[50px] md:mb-0 md:ml-[50px] lg:m-0`}` }>
            <div className='rounded-[2rem] bg-[#093F68] flex justify-center items-center  h-[164px] w-[164px]'>
                <img src={feature?.image} alt={feature?.title} className='bg-inherit' />
            </div>
            <div className='flex sm:max-w-[340px] lg:max-w-[255px] flex-col items-center lg:items-start md:text-start text-center'>

                <h3 className='mt-[48px] font-[800] mb-[23px] text-white text-lg  w-full'>{feature?.title}</h3>
                <p className='w-full  font-medium text-[#777F98]'>{feature?.description}</p>
            </div>
        </div>
    )
}
const Features = () => {
    return (
        <div className='xl:px-[165px] md:px-[100px] px-3 gap-[30px] my-[202px] flex justify-center flex-col lg:flex-row'>

            {fetaureArray.map((feature, index) => {
                return <Feature key={`feature${index + 1}`} feature={feature} />
            })}
        </div>
    )
}

export default Features