import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Info from './Info';
import Exceptional from "../Exceptional/Exceptional";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonials from "../Home/Testimonials";
import ContuctUs from "../Home/ContuctUs";
import Footer from "../Shared/Footer";

const Home = () => {
    return (
        <div className=" ">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContuctUs></ContuctUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;