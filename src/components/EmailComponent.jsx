import React, { useEffect, useState } from 'react'

const EmailComponent = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState()
    const [click, setClick] = useState(false)

    const testEmail=()=>{
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)) {
            if (!email) setError("Oops! Please provide an email address")
            else setError("Oops! That doesn’t look like an email address")

        }
        else{
             setClick(false)
        }
    }
    // useEffect(()=>{
        
    // },[email])
    return (
        <div className='flex flex-col justify-center items-center'>
            <input type={'email'} onFocus={() => { setClick(true) }} onBlur={testEmail} onChange={(e) => { setEmail(e.target.value);testEmail(); }} value={email} placeholder='Email address' className={`${error?'focus:border-[#FF2965]':'focus:border-[#3EE9E5]'} border-[#093F68] focus:outline-none text-white  border-2 bg-[#093F68] placeholder:text-white placeholder:opacity-50  py-3 pl-[18px] w-[320px] rounded-full`}></input>
            {click && error && <p className='text-[#FF2965] text-start text-xs pl-4 mt-1'>{error}</p>}
        </div>
    )
}

export default EmailComponent   