import React from 'react';
import { useHistory } from 'react-router-dom';
import "./NotFound404.css";

const NotFoundPage = () => {
    const history = useHistory();
    return (
        <div id='not-found-page' className="text-center">
            <h1 className="text-danger fw-bold my-0" style={{ fontSize: '10vw' }}> 404 </h1>
            <h3 className="text-danger display-3 my-0">Page Not Found</h3>
            <h4 className="fs-3 cursor-pointer text-success my-5" id="home-link" onClick={() => history.push('/')}>Go to Home</h4>
        </div>
    );
};

export default NotFoundPage;