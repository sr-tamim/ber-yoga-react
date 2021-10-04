import React from 'react';

const featursContainerStyles = {
    background: "url(./img/flower.png), url(./img/abstract-1.png)",
    backgroundPosition: "left top, right bottom",
    backgroundRepeat: "no-repeat, no-repeat"
}
const About = () => {
    return (
        <div className="my-5 py-5">
            <h1 className="display-1 text-center my-5">About Us</h1>

            <section id="features" style={featursContainerStyles}>
                <div className="container row mx-auto py-5">
                    <div className="col-12 col-lg-6 p-4">
                        <img className="img-fluid" src="./img/yoga-woman.png" alt="" />
                    </div>
                    <div className="col-12 col-lg-6 p-4 d-flex flex-column justify-content-center">
                        <h1 className="fw-bold mb-5 text-center text-lg-start">What's on BerYoga?</h1>
                        <div className="service d-flex">
                            <i className="bi bi-check-lg text-danger fs-4"></i>
                            <div className="ms-2">
                                <h4>New Classes Every Week</h4>
                                <p>
                                    Discover hundreds of classes in our library. Save your favorites, try new styles and
                                    customize your routine to fit your schedule.
                                </p>
                            </div>
                        </div>
                        <div className="service d-flex">
                            <i className="bi bi-check-lg text-danger fs-4"></i>
                            <div className="ms-2">
                                <h4>Series</h4>
                                <p>
                                    Our multi-class series are designed to help you achieve your fitness and wellness goals.
                                </p>
                            </div>
                        </div>
                        <div className="service d-flex">
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