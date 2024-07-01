"use client";
import React from 'react'
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";
    

const MainSection = () => {
  return (
        <section className='border-b border-neutral-900 pb-4'>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">   
                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                    >
                    
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello, I&apos;m{" "} 
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Aditya Nayak',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Software Engineer',
                                1000,
                                'ML Engineer',
                                1000,
                                // 'Prospective Robotics Engineer',
                                // 1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                        voluptuous.
                    </p> */}
                    <div>
                        <Link
                        href="/#contact"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple- 200 to-pink-500 hover:bg-slate-200 text-white"
                        >
                        Hire Me
                        </Link>
                        <Link
                        href="https://drive.google.com/file/d/1dbvTHoMYyCnhKuQ4PPKuvP7mt9sfgDx4/view?usp=sharing"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-600 via-purple-800 to-pink-500 hover:bg-slate-800 text-white mt-3"
                        >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                        </Link>
                    </div>

                    </motion.div>
                </div>
                <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] lg:mt-6 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/images/IMG_3162.png"
                                alt="Portfolio image"
                                className="rounded-full"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="20% 70%"
                            />
                        </div>
                    </div>
                </motion.div>
            </div> 
        </section>
    );
}

export default MainSection