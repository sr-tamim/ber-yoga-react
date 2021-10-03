import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const services = useServices();
    console.log(services);
    return (
        <div className="container mt-5 pt-5">
            <h1 className="my-4 fw-bold text-center">Our Services & Classes</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 px-4 my-4">
                {
                    services.map(service => <Service key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;