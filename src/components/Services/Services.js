import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

// styles for all service container
const servicesContainerStyles = {
    background: "url(./img/abstract-2.png), url(./img/flower2.png)",
    backgroundPosition: "left 10%, right 90%",
    backgroundRepeat: "no-repeat, no-repeat"
}

// all services container
const Services = props => {
    const services = useServices();

    // destructure how many services have to be shown from props
    let { displayServiceAmount } = props;
    // if no props given then show 8 services
    (displayServiceAmount) || (displayServiceAmount = 8);

    // slice services array depending on how many have to be shown
    const showServices = services.slice(0, displayServiceAmount);

    return (
        <div className="w-100" style={servicesContainerStyles}>
            <div className="container my-5 py-5">
                <h1 className="my-4 fw-bold text-center">Our Services & Classes</h1>
                <div className="row row-cols-1 row-cols-md-2 g-5 px-4 my-4">
                    {
                        showServices.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;