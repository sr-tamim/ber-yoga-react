import React from 'react';
import "./Service.css";

// service card component
const Service = props => {
    // destructure service details from service object
    const { name, thumbnail, classAmount, daysNeeded, Level, duration, price } = props.service;
    return (
        <div className="service-container px-md-4 p-lg-5 my-5">
            <div className="service col position-relative">
                <div className="card border-0">
                    <img src={thumbnail} className="card-img-top" alt="" />

                    <div className="card-body p-4">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text text-secondary">
                            {daysNeeded} days | {classAmount} classes | {Level}
                        </p>

                        {/* price and duration of service */}
                        <div className="d-flex justify-content-between align-items-baseline mb-3">
                            <h5 className="my-0">{duration}</h5>
                            <h3 className="my-0 text-danger fw-bold">${price}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;