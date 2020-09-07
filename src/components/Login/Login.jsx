import React from 'react';
import './Login.scss'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const auth = useAuth();
    const onSubmit = data => {
        if (data.email && data.password) {
            auth.signIn(data.email, data.password);
        }
    }
    return (
        <div className="login container p-5">
                <form className="py-4 px-2 bg-dark" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-white text-center mb-4">Please Provide Information</h4>
                    <div className="form-group pb-2">
                        <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email" />
                        {errors.email && <span className="error">Email is required</span>}
                    </div>
                    <div className="form-group pb-2">
                        <input type="password" autoComplete="on" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                        {errors.password && <span className="error">Password is required</span>}
                    </div>
                    {
                        auth && auth.error &&
                        <div className="form-group text-center">
                            <span className="font-weight-bold error">Email or Password didn't match</span>
                        </div>
                    }
                    <div className="form-group py-3 px-5 mx-5">
                        <button className="btn btn-success btn-block py-2"  type="submit">Login</button>
                    </div>
                    <div className="text-center py-2">
                    <Link to="/register" className="text-warning">Create New Account</Link>
                    </div>
                </form>
        </div>
    );
};

export default Login;