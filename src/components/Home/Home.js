import React from 'react';
import { NavLink } from 'react-router-dom';
import Services from '../Services/Services';
import "./Home.css";

const homeContainerStyles = {
    background: "url(./img/HEADER.png)",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain"
}
const featursContainerStyles = {
    background: "url(./img/flower.png), url(./img/abstract-1.png)",
    backgroundPosition: "left top, right bottom",
    backgroundRepeat: "no-repeat, no-repeat"
}
const blogsContainerStyles = {
    background: "url(./img/flower.png), url(./img/flower2.png)",
    backgroundPosition: "left 10%, right 90%",
    backgroundRepeat: "no-repeat, no-repeat"
}

const Home = () => {
    return (
        <main className="pt-5" style={homeContainerStyles}>
            <section className="container py-5">
                <div className="header-text row row-cols-1 row-cols-md-2">
                    <div className="col" style={{ textShadow: "0 0 10px white" }}>
                        <h1 className="fs-2 fw-bold">
                            Beautiful videos.<br />
                            Become your best self with BerYoGa.
                        </h1>
                        <p>
                            For me, BerYoga is more than just a sport - it is lifestyle, a state mind, a philosophy.<br />
                            Now I decided to open BerYoga so that I can share my love and joy of bikram yoga.It is my hope
                            that you too can discover all the positive impacts of bikram yoga nd make bidram yoga as a part
                            of
                            your life.
                        </p>
                        <NavLink to="/services">
                            <button
                                className="bg-danger text-white border border-2 border-danger rounded-pill px-4 py-2">Services</button>
                        </NavLink>
                        <NavLink to="/login">
                            <button className="bg-transparent border border-2 border-danger rounded-pill px-4 py-2 mx-2">Sign In</button>
                        </NavLink>
                    </div>
                    <div className="col"></div>
                </div>
            </section>

            <section id="whyUs" className="container py-5">
                <div className="section-heading text-center mb-5">
                    <h1 className="fw-bold">Why choose BerYoga?</h1>
                    <h6 className="fw-normal">
                        Access hundreds of online yoga classes shot in natural studios around the world.<br />
                        Unlimited access for $150/Years
                    </h6>
                </div>
                <div className="row flex-column flex-lg-row text-center">
                    <div className="col-12 col-lg-4 p-5">
                        <img className="img-fluid" src="./img/icon1.png" alt="" />
                        <div className="p-4">
                            <h4 className="fw-bold">Lifetime Updates</h4>
                            <p>Free lifetime updates from our latest collection.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-5">
                        <img className="img-fluid" src="./img/icon2.png" alt="" />
                        <div className="p-4">
                            <h4 className="fw-bold">Anywhere Videos</h4>
                            <p>Access world-class online yoga videos can be seen on the application & web.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-5">
                        <img className="img-fluid" src="./img/icon3.png" alt="" />
                        <div className="p-4">
                            <h4 className="fw-bold">Access Unlimited</h4>
                            <p>Find lots of yoga video tutorials, from all over the world.</p>
                        </div>
                    </div>
                </div>
            </section>
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

            <section>
                <Services displayServiceAmount={4} />
            </section>

            <section id="blogs" style={blogsContainerStyles}>
                <div className="container d-flex flex-column py-5">
                    <div className="blog row flex-column flex-md-row align-items-center py-5">
                        <div className="blog-text col-12 col-md-6 p-4">
                            <small><i>By Brittany Risherjan</i> ____</small>
                            <h1 className="fw-bold mb-4">
                                The Healing Power of Trauma-Informed Yoga Classes.
                            </h1>
                            <p className="mx-2 pe-md-5">
                                Celebrating five years of service, the nonprofit Exhale to Inhale bringhs free,
                                trauma-informed yoga classes to rape crisis centers and domestic violence shelters in
                                Jakarta.
                                <br /><br />
                                <small role="button" className="text-info">Read More</small>
                            </p>
                        </div>
                        <div className="blog-img col-12 col-md-6 p-4"><img src="./img/yoga-woman2.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="blog row flex-column-reverse flex-md-row align-items-center py-5">
                        <div className="blog-img col-12 col-md-6 p-4"><img src="./img/2womans-yoga.png" alt="" className="img-fluid" />
                        </div>
                        <div className="blog-text col-12 col-md-6 p-4">
                            <h1 className="fw-bold mb-4">
                                5 Ways to Make Every Yoga Class More Restorative and Therapeutic
                            </h1>
                            <p className="mx-2 pe-md-5">
                                In part four of our series on teaching trauma-sensitive yoga.<br />
                                Teacher Daniel Sernicola shares five practices to help your students get grounded and
                                cultivate mindfulness.<br />
                                Teachers, need liability insurance? As a TeachersPlus member, you can access low-cost
                                coverage and more than a dozen valuable benefits that will build your skills and business.
                                Enjoy a free subscription to YJ, a free profile on our national directory, exclusive
                                webinars and content packed with advice, discounts on educational resources and gear, and
                                more.
                                <br /><br />
                                <small role="button" className="text-info">Read More</small>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;