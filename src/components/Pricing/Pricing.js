import React from 'react';
import "./Pricing.css";

const Pricing = () => {
    return (
        <section id="pricing">
            <h1 className="display-1 text-center my-5 text-danger">Plans & Pricing</h1>
            <div className="container-fluid container-lg py-5">
                <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center">
                    <div className="col-12 col-md-4">
                        <div className="bg-white border-0 shadow-lg pb-4 mb-4" style={{ borderRadius: "20px" }}>
                            <div className="py-3">
                                <h4 className="text-center fw-bold my-0">Standard</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled fs-6 text-center text-lg-start ms-lg-5 mt-3 mb-5">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-primary me-2"></i>Unlimited Access Video
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                        Saved Videos
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                        Offline Access
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <div className="fs-2">$</div>
                                    <span className="display-1 fw-bold">15</span>
                                    <div className="d-flex align-items-end pb-2">
                                        <span className="fs-4">/Mo</span>
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <small><i>Billed Monthly</i></small>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="bg-primary text-white border-0 px-4 py-3 rounded-pill">
                                        Become A Member
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 px-0" style={{ marginLeft: "-20px", marginRight: "-20px", zIndex: "1" }}>
                        <div className="bg-white border-0 shadow-lg pb-4 mb-4" style={{ borderRadius: "20px", overflow: "hidden" }}>
                            <div className="bg-danger py-3">
                                <h2 className="text-center text-white">Best Deal</h2>
                            </div>
                            <div className="py-3">
                                <h4 className="text-center fw-bold my-0">Premium</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled fs-6 text-center text-lg-start ms-lg-5 mt-3 mb-5">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-danger me-2"></i> Unlimited Access Video
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                        Saved Videos
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-danger me-2"></i>
                                        Offline Access
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <div className="fs-2">$</div>
                                    <span className="display-1 fw-bold">150</span>
                                    <div className="d-flex align-items-end pb-2">
                                        <span className="fs-4">/Year</span>
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <small><i>Billed Yealy - Save 45%</i></small>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="bg-danger text-white border-0 px-4 py-3 rounded-pill">
                                        Become A Member
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="bg-white border-0 shadow-lg pb-4 mb-4" style={{ borderRadius: "20px" }}>
                            <div className="pt-5 pb-3">
                                <h4 className="text-center fw-bold my-0">Basic</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled fs-6 text-center text-lg-start ms-lg-5 mt-3 mb-5">
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                                        Unlimited Access Video
                                    </li>
                                    <li className="mb-3">
                                        <i className="bi bi-check-circle-fill text-primary me-2"></i> Only Yoga Class
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center">
                                    <div className="fs-2">$</div>
                                    <span className="display-1 fw-bold">5</span>
                                    <div className="d-flex align-items-end pb-2">
                                        <span className="fs-4">/Mo</span>
                                    </div>
                                </div>
                                <div className="text-center mb-4">
                                    <small><i>Billed Monthly</i></small>
                                </div>
                                <div className="text-center">
                                    <button type="button" className="bg-primary text-white border-0 px-4 py-3 rounded-pill">
                                        Become A Member
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;