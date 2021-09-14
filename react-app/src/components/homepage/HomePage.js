import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'


function Homepage (){

    const sessionUser = useSelector(state => state?.session.user);
    const reviews = useSelector(state => state?.review)['reviews']
    

    return (
        <div className='homepage'>
            <div className='homepage-content'>
                <div className='home-left'>
                    <div id='hello-name'>
                        <div id='hello'>
                            <h1>Hello {sessionUser?.username}!</h1>
                        </div>
                        <div id='hello-icon'>
                            {sessionUser?.icon ? 
                            (<img className='userIcon-home' src={sessionUser?.icon} alt='icon'/>)
                            :
                            (<img className='userIcon-home' src='https://usersinsights.com/wp/wp-content/uploads/2018/03/image6.png' alt='icon'/>)
                            }
                        </div>
                    </div>
                </div>
                <div className='home-right'>
                    <div className='home-right-top'>
                        <h2 className='fontBitter'>Ready to start your boba journey?</h2>
                        <h3>Explore bobas <NavLink to='/bobalist'>here!</NavLink></h3>
                        <h3>Don't see the boba you are drinking?<NavLink to = '/bobaform'>Add it here!</NavLink></h3>
                        <h3>Want to share your boba experience and see what other people are drinking? <NavLink to ='hangout'>Go to Hangout!</NavLink> </h3>
                    </div>
                    <hr id='lineCss'></hr>
                    <div className='home-right-cards'>
                        <h2 className='fontBitter'>Here are the bobas you have tried!</h2>
                        <div className='tried-container'>
                            <div id='stampHeading'>
                                <h2>BOBAFIED</h2>
                                <h3> Stamps Card</h3>
                                <h4>Try 9 bobas get a reward!</h4>
                            </div>
                            <div id="stampSide">
                       
                            {reviews.map(review =>(<div  className='stampcircles' key={review.id}>{
                                sessionUser.id == review.user_id?
                                (<div className='tried-boba-card'><div className='bobaBorder'>{review.boba_icon? <img src={review.boba_icon} className='boba-icon'alt='icon'/>
                                : <img className='boba-icon' src='https://i.pinimg.com/736x/53/b7/31/53b7315a445315c369c3a8f806af0834.jpg' alt='pic'/>} </div><div>
                                    {/* {review.boba} */}
                                </div>
                                </div>
                                )
                                : 
                                <>
                                </>

                            }</div>))}
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <h1></h1>
                </div>
           </div>
    </div>
    )
}

export default Homepage;