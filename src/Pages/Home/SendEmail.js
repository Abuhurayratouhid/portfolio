import React from 'react';
import EmailLottie from '../../Components/EmailLottie';

const SendEmail = () => {
    return (
        <div id='contact' style={{backgroundColor: '#03045e'}}>
            <h1 className='text-5xl font-bold text-center py-10 text-white'>CONTACT ME </h1>


            <section className='pb-10 lg:flex justify-around'>
                
                <EmailLottie></EmailLottie>


                {/* form  */}
                <div style={{backgroundColor: 'black'}} className="p-10" 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                    <form action="https://formspree.io/f/meqdyvnl" method='POST'>
                        <input type="text" name='name' placeholder="name" className="input input-bordered input-primary w-full max-w-xs mt-5" />
                        <br />
                        <input type="email" name='email' placeholder="email" className="input input-bordered input-primary w-full max-w-xs mt-5" />
                        <br />
                        <textarea name='message' className="textarea textarea-primary w-full max-w-xs mt-5" placeholder="Message"></textarea>
                        <br />
                        <button style={{backgroundColor: '#03045e'}} type="submit" className='btn w-full max-w-xs bg-black text-white mt-5'> submit </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SendEmail;