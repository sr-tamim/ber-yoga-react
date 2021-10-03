import React, { useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = props => {
    const services = useServices();

    let { displayServiceAmount } = props;
    (displayServiceAmount) || (displayServiceAmount = 8);

    const showServices = services.slice(0, displayServiceAmount);

    return (
        <div className="container my-5 py-5">
            <h1 className="my-4 fw-bold text-center">Our Services & Classes</h1>
            <div className="row row-cols-1 row-cols-md-2 g-5 px-4 my-4">
                {
                    showServices.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;