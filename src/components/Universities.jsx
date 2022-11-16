import React from 'react'
import pk from '../assets/pk.jpg'
import agh from '../assets/agh.jpg'
import academy from '../assets/academy.png'



const Universities = () => {

    const portfolios = [
        {
            id: 1,
            src: pk,
            link: 'https://www.pk.edu.pl/index.php?lang=pl',
            title: "Cracow University of Technology - Bachelor's Degree"
        },
        {
            id: 2,
            src: agh,
            link: 'https://www.agh.edu.pl/',
            title: "AGH"
        },
        {
            id: 3,
            src: academy,
            link: 'https://it-academy.pl/',
            title: 'IT Academy'
        },
    ];
    return (
        <div
            name="universities"
            className="bg-gradient-to-b from-black to-blue-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-green-500">
                        Universities / Courses
                    </p>

                </div>
                <div>
                    <p className="text-xl mt-5">
                        I finished...
                    </p>
                </div>

                <div className="py-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, link, title }) => (
                        <div key={id}>
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={link}>{title}</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="text-xl mt-5">
                        ...and many courses on various learning platforms.
                    </p>
                </div>
                <div className='py-5'>
                    <p className="text-xl mt-5 font-bold">
                        I have completed all my Master's Degree classes. I just have to defend my master's thesis at
                        the beginning of February 2023.
                    </p>
                    <p className='py-5'>
                        Topic: <i className="font-bold">Experimental analysis of dynamic characteristics of dampers</i>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Universities