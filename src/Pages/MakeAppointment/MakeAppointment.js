import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an appointment</h2>
                <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores dolorum eum? Nesciunt explicabo fuga velit ut itaque officia maxime, odit eius fugiat perferendis ipsam id laudantium necessitatibus delectus cupiditate voluptates? Exercitationem ea quis recusandae vitae ducimus aliquid neque quo!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;