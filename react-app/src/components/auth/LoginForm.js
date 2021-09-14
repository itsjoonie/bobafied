import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

    const demoLogin = () => {
        dispatch(login('demo@aa.io', 'password'));
        history.push('/home')

    };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <div className='loginFormPage'>
      <div className='loginFormContainer'>
      <div className='loginFormContent'>
      <form className='actualform' onSubmit={onLogin}>
        <div className='actualformContent'>
        <div className='login-errors'>
          {errors.map((error, ind) => (
            <div className='login-error-content' key={ind}>{error}</div>
          ))}
        </div>
        <div className='login-content'>
        <div>
            <div>
              <h1 id='loginHere'>LOGIN HERE</h1>
            </div>
          <div className='login-info'>
            <label htmlFor='email'>Email</label>
          </div>
        
          <input className='input-box'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        
        </div>
        <div>
          <div className='login-info'> 
            <label htmlFor='password'>Password</label>
          </div>
          <input className='input-box'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <div className='loginformBtnC'>
          <button className='loginformBtn buttons-login' type='submit'>Login</button>
          </div>
          <div className='orSignUp'>
            <h3>Don't have an account?</h3>
            <div className='or-signup'>
            <NavLink to='/sign-up'>
              <button className='buttons-login' id='signUpBtn'>Sign Up</button>
            </NavLink>
            <h4>or sign in as a demo user </h4>
             <button className='DemoBtn buttons-login' onClick={demoLogin} activeclassname='active'>
                         Demo
              </button>
            </div>
            </div>
          </div>
        </div>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
