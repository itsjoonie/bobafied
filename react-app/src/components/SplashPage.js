import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from 'react-router-dom';
import {login} from '.././store/session';
import './SplashPage.css'


function SplashPage(){
    const history = useHistory();
    const dispatch = useDispatch()

    const demoLogin = () => {
        dispatch(login('demo@aa.io', 'password'));
        history.push('/home')

    };

    return (
        
     
        <div className='splash-container'>
            <div className='loginAndSignup'>
                <div className='splashDemo'>
                    <button className='splashDemobtn' onClick={demoLogin} activeclassname='active'>
                         Demo
                    </button>
                </div>
                <div className='splashLogin'>
                    <button className='splashLoginbtn' onClick={()=>history.push(`/login`)}  activeclassname='active'>
                        Login
                    </button>
                </div>
                <div className='splashSignup'>
                    <button className='splashSignupbtn' onClick={()=>history.push(`/sign-up`)} activeclassname='active'>
                         Sign Up
                    </button>
                     </div>
            </div>

            <div className='first-banner-container'>

                <div className ='first-banner-content-container'>

                    <div className='firstbanner-content'>
                    <div className='first-content'>
                    
                    <div>
                    <h1>BOBAFIED</h1>
                    </div>
            
                    <p>Drink Socially</p>
               
                    <h2>Discover and share your  </h2>
                    <h2 className='last-line'>favorite boba!</h2>
                    <div className='startHere-box'> 
                    <NavLink to='/sign-up' activeclassName='active' >
                        <button className='startHere-btn'>start here</button>
                    </NavLink>
                    </div>
                    </div>
                    </div>
                </div>
                
            </div>
            <div >

            </div>
            <div >

            </div>

        </div>
   
    )
}

export default SplashPage