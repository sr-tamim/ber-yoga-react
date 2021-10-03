import React from 'react';


const Contact = () => {
    return (
        <div className="container my-5 py-5">
            <div className="login mx-auto my-5">
                <form>
                    <div className="text-center my-5">
                        <h1 className="display-1 text-danger">Contact Us</h1>
                    </div>


                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingPassword" placeholder="Name" />
                        <label>Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                    </div>
                    <div class="form-floating">
                        <textarea className="form-control" placeholder="type message here" id="floatingTextarea2" style={{ height: "150px" }}></textarea>
                        <label>Message</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-danger my-4" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;