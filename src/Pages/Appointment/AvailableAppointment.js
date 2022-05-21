import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppService from './AppService';
import BookingModal from './BookingModal';


const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(services);
    return (
        <div>
            <h4 className='text-xl text-secondary text-center'>availabe appointment on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14'>
                {
                    services?.map(service => <AppService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppService>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;