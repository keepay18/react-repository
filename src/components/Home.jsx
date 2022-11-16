import React from 'react'
import MyImage from "../assets/my-picture.jpg"


const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-blue-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I want to start my career in IT</h2>
                    <p className='text-green-500 py-4 max-w-md'>
                        I am a Bachelor of Mechanical Engineering graduated at the Cracow University of Technology and I am Student of Master’s degree. Also I finished Software Engineering Methods studies and I finished course „Python and Data Science”
                    </p>
                </div>
                <div>
                    <img src={MyImage} alt="my face" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home