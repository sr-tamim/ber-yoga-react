import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className="container my-5 py-5">
            <div className="login mx-auto my-5">
                <form>
                    <div className="text-center mb-4">
                        <img src="./img/user.png" alt="" width="200" />
                    </div>

                    <h3 className="text-danger mb-3 fw-bold">Please sign in</h3>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label>Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label>Password</label>
                    </div>

                    <div className="checkbox my-3 text-center">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-danger" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;