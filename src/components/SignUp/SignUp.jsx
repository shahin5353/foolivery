import React from 'react';
import './SignUp.scss'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';

const SignUp = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const auth = useAuth();
    const onSubmit = data=>{
       if(data.name && data.email && data.password){
        auth.signUp(data.name,data.email,data.password);
       }
    }
    return (
        <div className="sign-up container p-5">
                <form className="py-4 px-2 bg-dark" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-white text-center mb-4">Please Provide Information</h4>
                    <div className="form-group pb-2">
                        <input name="name" className="form-control" ref={register({ required: true })} placeholder="Name" />
                        {errors.name && <p className="error text-center mb-0">Name is required</p>}
                    </div>
                    <div className="form-group pb-2">
                        <input name="email" className="form-control" ref={register({ required: true })} placeholder="Email"/>
                        {errors.email && <p className="error text-center mb-0">Email is required</p>}
                    </div>
                    <div className="form-group pb-2">
                        <input type="password" name="password" className="form-control" ref={register({ required: true })} placeholder="Password" />
                        {errors.password && <p className="error text-center mb-0">Password is required</p>}
                    </div>
                    <div className="form-group pb-2">
                        <input type="password" name="confirm_password" className="form-control" ref={register({
                        validate: (value) => value === watch('password')
                        })} placeholder="Confirm Password" />
                        {errors.confirm_password && <p className="error text-center mb-0">Passwords don't match.</p>}
                    </div>
                    <div className="form-group py-3 px-5 mx-5">
                        <button className="btn btn-success btn-block py-2"  type="submit">Sign Up</button>
                    </div>
                    <div className="text-center py-2">
                    <Link to="/login" className="text-warning">Already have an account? Login</Link>
                    </div>
                </form>
        </div>
    );
};

export default SignUp;