import React from 'react';
import Lottie from 'react-lottie';
import emailBox from '../Email.json';

const EmailLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: emailBox,
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

export default EmailLottie;