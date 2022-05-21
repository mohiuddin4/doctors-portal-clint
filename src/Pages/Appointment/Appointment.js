import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBannar from './AppointmentBannar';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBannar date={date} setDate={setDate}></AppointmentBannar>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;