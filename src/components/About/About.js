import React from 'react';
import "./About.css";

// css style for feature container
const featursContainerStyles = {
    background: "url(./img/flower.png), url(./img/abstract-1.png)",
    backgroundPosition: "left top, right bottom",
    backgroundRepeat: "no-repeat, no-repeat"
}

// about component
const About = () => {
    return (
        <div className="my-5 py-4">
            <h1 className="display-1 text-center text-danger my-5">About Us</h1>

            <section id="features" style={featursContainerStyles}>
                <div id="ourMission" className="container row mx-auto py-5">
                    <p className="col-12 col-xl-7 fs-4 p-5 d-flex flex-column justify-content-center">
                        <span className="text-danger display-4 fw-bold">We're on a mission</span> <br />
                        <span className="text-danger fs-2">to make yoga and mindfulness fun!</span> <br />
                        <p style={{ textAlign: 'justify' }}>
                            Every week, millions of peoples do our yoga and mindfulness sessions on video in class and at home. And thousands of teachers that we've trained lead classes in their own communities. We're doing what we can to make yoga and mindfulness fun for every people - so they can enjoy the physical, mental and emotional benefits.
                        </p>
                    </p>
                    <div className="col-12 col-xl-5 col-xl-5 d-flex flex-column justify-content-center align-items-center bg-danger text-white p-5 position-relative">
                        <span className="display-1 fw-bold m-5 mb-0">YOGA</span> <br />
                        <span className="display-3 fw-bold">HEALTH</span> <br />
                        <span className="display-5 fw-bold m-5 mt-0">STRENGTH</span>
                    </div>
                </div>

                <div className="container row mx-auto py-5">
                    <div className="col-12 col-lg-6 p-4">
                        <img className="img-fluid" src="./img/yoga-woman.png" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 p-4 d-flex flex-column justify-content-center">
                        <h1 className="fw-bold mb-5 text-center text-lg-start">What's on BerYoga?</h1>
                        <div className="d-flex">
                            <i className="bi bi-check-lg text-danger fs-4"></i>
                            <div className="ms-2">
                                <h4>New Classes Every Week</h4>
                                <p>
                                    Discover hundreds of classes in our library. Save your favorites, try new styles and
                                    customize your routine to fit your schedule.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <i className="bi bi-check-lg text-danger fs-4"></i>
                            <div className="ms-2">
                                <h4>Series</h4>
                                <p>
                                    Our multi-class series are designed to help you achieve your fitness and wellness goals.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <i className="bi bi-check-lg text-danger fs-4"></i>
                            <div className="ms-2">
                                <h4>Pose Directory</h4>
                                <p>
                                    Get step-by-step instructions on poses and sequences in our extensive video pose
                                    directory.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default About;