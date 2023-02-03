import React from 'react';
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <div style={{height: '',backgroundColor: '#03045e', color:'white'}}>
            <h1 className='text-5xl font-bold text-center pt-10'>Skills</h1>

            <section style={{}} className='max-w-[1200px] mx-auto lg:flex justify-between py-20'>
                {/* one  */}
                <motion.div
                //  animate={{
                //     scale: [1, 2, 2, 1, 1],
                //     rotate: [0, 0, 180, 180, 0],
                //     borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                //   }}
                //   transition={{
                //     duration: 2,
                //     ease: "easeInOut",
                //     times: [0, 0.2, 0.5, 0.8, 1],
                //     repeat: Infinity,
                //     repeatDelay: 1
                //   }}
                 whileHover={{scale:1.3}} 
                 className='w-40 mx-auto  my-5 lg:w-40 h-40 bg-black flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>HTML </h1>
                    <motion.div
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [360, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                     className="radial-progress" 
                     style={{"--value":95}}>95%
                     </motion.div>
                </motion.div>
                {/* two  */}
                <motion.div whileHover={{scale:1.3}} className='w-40 mx-auto my-5 lg:w-40 h-40 bg-black flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>CSS </h1>
                    
                    <motion.div
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [360, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }} 
                    className="radial-progress" 
                    style={{"--value":90}}>90%
                    </motion.div>
                </motion.div>
                {/* three  */}
                <motion.div whileHover={{scale:1.3}} className='w-40 mx-auto my-5 lg:w-40 h-40 bg-black flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold'> JavaScript </h1>
                    <motion.div
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [360, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }} 
                    className="radial-progress" 
                    style={{"--value":80}}>80%
                    </motion.div>
                </motion.div>
                {/* four  */}
                <motion.div whileHover={{scale:1.3}} className='w-40 mx-auto my-5 lg:w-40 h-40 bg-black flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>React js </h1>
                    <motion.div
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [360, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }} 
                    className="radial-progress" 
                    style={{"--value":85}}>85%
                    </motion.div>
                </motion.div>
                {/* five  */}
                <motion.div whileHover={{scale:1.3}} className='w-40 mx-auto my-5 lg:w-40 h-40 bg-black flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold'>MongoDB </h1>
                    <motion.div
                    animate={{
                        scale: [1, 1, 1, 1, 1],
                        rotate: [360, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                      }}
                      transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }} 
                    className="radial-progress" 
                    style={{"--value":70}}>70%
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default Skills;