import React from 'react';
import img from '../../Assets/profile-pic.png';

const AboutMe = () => {
    return (
        <div id='about'>
            <h1 className='text-5xl font-bold text-center py-10 text-black'>ABOUT ME </h1>
            <div className='lg:flex justify-center items-center gap-10 pb-10' >
                <div className='' 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <img className='h-[500px]' src={img} alt="" />
                </div>
                <div className='p-3' 
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <h1 className='text-5xl font-bold'>Hi, I am <br /> Abu Hurayra Touhid  </h1>
                    <h2 className='text-3xl mt-4'>Web developer</h2>
                    <p className='mt-5'>I am responsible for developing new user-facing features,<br /> determining the structure and design of web pages, building reusable codes,<br /> optimizing page loading times, and using a variety of markup languages to create web pages.</p>
                    <p className='my-10'>
                        <a href='https://drive.google.com/file/d/1GZM8FLxDQxrrBqPJJRzlj_FXrSaG2r-N/view?usp=sharing'><button className="btn bg-white text-black mr-5">My Resume</button></a>
                        <button className="btn btn-outline btn-primary">Hire me </button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default AboutMe;