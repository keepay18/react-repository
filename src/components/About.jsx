import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-blue-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-green-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    I am a Bachelor of Mechanical Engineering graduated at the Cracow University of Technology and I am second year student of Master’s degree at the same University. Also, I study Software Development Methods at AGH University of Science and Technology. I finished course „Python and Data Science” at IT Academy in Cracow in which I learned how to use libraries like Pandas, Numpy, Matplotlib or Scikit - Learn in Machine Learning. In my spare time I learn various programming languages ​​such as Java or JavaScript
                </p>
            </div>
        </div>
    )
}

export default About