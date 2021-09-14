import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [icon, setIcon] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstname, lastname, username, email, icon, password));
      if (data) {
        setErrors(data)
      }
    }
    else setErrors(['Passwords does not match'])
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value);
  }

  const updateLastname = (e) => {
    setLastname(e.target.value);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateIcon = (e) => {
    setIcon(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <div className="overallSignContainer">
    <div className='signupContainter'>
      <div className='signupFormContainer'>
          <div>
          <h1 className="signupH1">Sign Up to Share Boba!</h1>
          </div>
        <div className='signupFormContent'>

        <form className='signupForm' onSubmit={onSignUp}>
          <div className='signupError'>
            {errors?.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='signupContent'>
            <div>
            <label className='signupLabel'>First Name</label>
            </div>
            <input  className='signupInput'
              type='text'
              name='firstname'
              onChange={updateFirstname}
              value={firstname}
              ></input>
          </div>
          <div className='signupContent'>
            <div>
            <label className='signupLabel'>Last Name</label>
            </div>
            <input className='signupInput'
              type='text'
              name='lastname'
              onChange={updateLastname}
              value={lastname}
              ></input>
          </div>
          <div className='signupContent'>
            <div>
            <label className='signupLabel'>User Name</label>
            </div>
            <input className='signupInput'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='signupContent'>
            <div>
            <label className='signupLabel'>Email</label>
            </div>
            <input className='signupInput'
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className='signupContent'>
          <div>
            <label className='signupLabel'>Profile Picture</label>
          </div>
            <input className='signupInput'
              type='text'
              name='icon'
              onChange={updateIcon}
              value={icon}
              placeholder='Optional'
            ></input>
          </div>
          <div className='signupContent'>
            <div>
            <label className='signupLabel'>Password</label>
            </div>
            <input className='signupInput'
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className='signupContent'>
            <div>
            <label className='signupLabel'>Repeat Password</label>
            </div>
            <input className='signupInput'
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
        
            ></input>
          </div>
          <div className='signupformBtnC'>
          <button className='loginOtherBtn' type='submit'>Sign Up</button>
          </div>


        </form>
      </div>
      <div className='otherSection'>
        <div className='otherH1'>
          <h2>Already have an account?</h2>
        </div>
        <div className='otherBtn'>
          {/* <NavLink>
            <button>DEMO</button>
          </NavLink> */}
          <div className='loginBtnOtherContainer'>
          <NavLink to='./login'>
            <button className='loginOtherBtn'>Login</button>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default SignUpForm;
