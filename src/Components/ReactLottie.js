import React from 'react';
import Lottie from 'react-lottie';
import coding from '../coding.json';

const ReactLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coding,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            ></Lottie>
            
        </div>
    );
};

export default ReactLottie;