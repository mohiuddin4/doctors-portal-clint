import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const ContuctUs = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="">

            <div className='text-center my-20 py-20'>
                <h2 className='text-primary'>Contuct Us</h2>
                <h1 className='text-white text-2xl'>Stay cunnected with us</h1>
                <div className='flex flex-col my-4 items-center'>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-success w-full max-w-xs" /><br />
                    <input type="text" placeholder="Subject" className="input input-bordered input-success w-full max-w-xs" /><br />
                    <textarea className="textarea textarea-accent w-80" placeholder="Your massage"></textarea>

                </div>
                <PrimaryButton>Submit</PrimaryButton>

            </div>
        </section>
    );
};

export default ContuctUs;