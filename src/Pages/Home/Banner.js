import React from 'react';
import ReactLottie from '../../Components/ReactLottie';
import './Banner.css';
import { motion } from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, }}
            style={{ backgroundColor: '#1c1c1c', height: '', color: 'white' }} className='lg:flex justify-center items-center gap-10 py-36'>
            <div className='p-3' >
                <motion.h1
                    initial={{ y: -450 }}
                    animate={{ y: 10 }}
                    transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 120 }}
                    className='text-5xl font-bold'>Hi, I am <br /> Abu Hurayra Touhid
                </motion.h1>
                <h2 animate={{}} className='text-3xl mt-4'><span style={{ color: 'blue', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['self-believer', 'Web designer', 'web developer',]}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </span></h2>
                <p className='mt-5'>I am responsible for developing new user-facing features,<br /> determining the structure and design of web pages, building reusable codes,<br /> optimizing page loading times, and using a variety of markup languages to create web pages.</p>
                <p className='my-10'>
                    <a href='https://drive.google.com/file/d/1GZM8FLxDQxrrBqPJJRzlj_FXrSaG2r-N/view?usp=sharing'>
                        <motion.button
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 120 }}
                            className="btn bg-white text-black mr-5"
                        >My Resume</motion.button>
                    </a>
                    <motion.button whileHover={{ scale: 1.1, transition: { yoyo: 10 } }} className="btn btn-outline btn-primary"><a href="#contact">Hire me </a></motion.button>
                </p>
            </div>
            <motion.div className=''
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 2, type: 'spring', stiffness: 120 }}
            >
                <ReactLottie></ReactLottie>
                {/* <img  className='h-[600px] hidden lg:block' src={img} alt="" /> */}
            </motion.div>
        </motion.div>
    );
};

export default Banner;