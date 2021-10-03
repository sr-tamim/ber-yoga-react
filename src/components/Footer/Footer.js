import React from 'react';
import "./Footer.css";

const footerStyles = {
    background: "url(./img/FOOTER.png)",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

const Footer = () => {
    return (
        <footer style={footerStyles}>
            <div className="container py-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mx-1 p-3 p-md-5">
                    <div className="mb-5 mb-md-0 pe-md-5">
                        <h4 className="text-uppercase">contact us</h4>
                        <div><span className="footer-link">Beryoga, JI, Sudirman</span></div>
                        <div><span className="footer-link">no. 129, Tebet</span></div>
                        <div><span className="footer-link">Jakarta Selatan</span></div>
                        <br />
                        <div><span className="footer-link">beryoga @yuk.com</span></div>
                        <div><span className="footer-link">0812 6824 2856 (Main)</span></div>
                        <div><span className="footer-link">(072) 2673842 (Toll-free)</span></div>
                    </div>
                    <div className="mb-5 mb-md-0 pe-md-5">
                        <h4 className="text-uppercase">about us</h4>
                        <div><span className="footer-link">Our Mission</span></div>
                        <div><span className="footer-link">Our Team</span></div>
                        <div><span className="footer-link">Management</span></div>
                        <div><span className="footer-link">Policies</span></div>
                    </div>
                    <div className="mb-5 mb-md-0 pe-md-5">
                        <h4 className="text-uppercase">our programs</h4>
                        <div><span className="footer-link">Yoga Class</span></div>
                        <div><span className="footer-link">Billal Yoga</span></div>
                        <div><span className="footer-link">Acro Yoga</span></div>
                        <div><span className="footer-link">Oshanti Yoga</span></div>
                        <div><span className="footer-link">Fokira Yoga</span></div>
                    </div>
                    <div className="mb-5 mb-md-0 pe-md-5">
                        <h4 className="text-uppercase">support trails</h4>
                        <div><span className="footer-link">Donate</span></div>
                        <div><span className="footer-link">Individual Membership</span></div>
                        <div><span className="footer-link">Gift membership</span></div>
                        <div><span className="footer-link">Hiker Store</span></div>
                    </div>
                </div>
                <h6 className="text-center m-0 px-5">Copyright © 2021 BerYoga All rights reserved</h6>
            </div>
        </footer>
    );
};

export default Footer;