import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    // const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]:e.target.value})
    }

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
                // setErrors(err.response.data.errors)
            })
    }

    return (
        <div className="login">
            <h1 className="text-green-custom text-center">Welcome to Plant Care Service</h1>
            <br />
            <form onSubmit={loginHandler} className='col-4 mx-auto user-form'>
                <div>
                    <label className='form-label text-dark font-weight-bold'>Email: </label>
                <input className='form-control' type='text' onChange={changeHandler} value={userLogin.email} name='email'/>
                    {userLogin.email.length < 2 && userLogin.email.length > 0 ? (
                    <p className="text-danger">Email must be at least 2 characters</p>
                    ) : null}
                <label className='form-label text-dark font-weight-bold'>Password: </label>
                <input className='form-control' type='password' onChange={changeHandler} value={userLogin.password} name='password'/>
                    {userLogin.password.length < 8 && userLogin.password.length > 0 ? (
                    <p className="text-danger">Password be at least 8 characters</p>
                    ) : null}
                </div>
                <br />
                <div className="container">
                    <button className="button-62">Sign In</button>
                </div>
                <br />
                <div className="text-center">
                    <Link className="button-62" to={'/register'}>Would you like to sell your Plants? Register</Link>
                </div>
                
            </form>
        </div>
)}

export default Login;