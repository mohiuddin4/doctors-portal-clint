import React from 'react';
import fluride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride treatment",
            description: '',
            img: fluride
        },
        {
            _id: 2,
            name: "Cavity Feeling",
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth whitening",
            description: '',
            img: whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase'>our services</h3>
                <h2 className='text-4xl  uppercase'>services we provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;