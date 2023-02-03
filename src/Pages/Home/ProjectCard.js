import React from 'react';
import { motion } from "framer-motion"


const ProjectCard = ({ project }) => {
    return (
        <motion.div
            // animate={{
            //         scale: [1, 0.8, 0.9, 1, 1],
            //         // rotate: [0, 0, 180, 180, 0],
            //         // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            //       }}
            // transition={{
            //             duration: 2,
            //             ease: "easeInOut",
            //             times: [0, 0.8, 0.5, 0.8, 1],
            //             repeat: Infinity,
            //             repeatDelay: 1
            //           }} 
            whileHover={{ scale: 1.1 }}
            style={{ backgroundColor: '#03045e', color: 'white' }}
            className="card lg:w-96 shadow-xl text-black mt-4"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <figure><img className='h-56 w-full' src={project.img} alt="project" /></figure>
            <div className="card-body">
                <h2 className="card-title">{project.name}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions ">

                    <a href={project.url}><button className="btn btn-link">visit this site </button></a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;