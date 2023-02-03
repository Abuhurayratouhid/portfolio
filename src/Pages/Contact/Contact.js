import React from 'react';

const Contact = () => {
    return (
        <div className='mt-10 flex justify-center'>

            <div >
                <form action="https://formspree.io/f/meqdyvnl" method='POST'>
                    <input type="text" name='name' placeholder="name" className="input input-bordered input-primary w-full max-w-xs mt-5" />
                    <br />
                    <input type="email" name='email' placeholder="email" className="input input-bordered input-primary w-full max-w-xs mt-5" />
                    <br />
                    <textarea name='message' className="textarea textarea-primary w-full max-w-xs mt-5" placeholder="Message"></textarea>
                    <br />
                    <button type="submit" className='btn w-full max-w-xs bg-black text-white mt-5'> submit </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;