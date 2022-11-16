import React from 'react'

const Experience = () => {
    return (
        <div name="experience" className='w-full h-screen bg-gradient-to-b from-blue-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-500'>Experience</p>
                </div>
                <p className='text-xl mt-5'>
                    From July 2021 to April 2022 I worked as a Data Analyst at <a href="https://www.aptiv.com/" className='font-bold' target="_blank" rel="noreferrer">Aptiv</a>
                </p>
            </div>
        </div>
    )
}

export default Experience