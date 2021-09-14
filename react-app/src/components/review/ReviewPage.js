import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import * as reviewAction from '../../store/review';
import ReviewForm from './ReviewForm'
import styles from './ReviewPage.module.css'
import ReviewEditForm from './ReviewEditForm';

function ReviewPage () {
    const reviews = Object.values(useSelector((state) => (state.review)))
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user.id)
    const boba =  Object.values(useSelector((state)=>(state.boba)))
    const shops = Object.values(useSelector((state) => (state.shop)))

//     const handleDelete = async (e) =>{
//          await dispatch(reviewAction.removeReview(e.target.values))
//          history.go(0)
//    }





    return (
    <>

        <div className={styles.reviewPage}>
            <div className={styles.reviewRight}>
                <ReviewForm />
            </div>
            <div className={styles.reviewPageContent}>
                <div className={styles.reviewsContainer}>
                    <h1>Recent Global Activity</h1>
                    
                   {reviews[0].map(oneReview => (
                       <div key={oneReview.id} className={styles.reviewCard}>
                           <div className={styles.reviewUser}>
                               <div className={styles.userIconContent}>
                                {oneReview.user_icon?
                               <img className={styles.userIcon} src={oneReview.user_icon} alt='icon'/>
                                :
                                <img className={styles.userIcon} src='https://usersinsights.com/wp/wp-content/uploads/2018/03/image6.png' alt='icon'/>
                                }
                               </div>
                               <div className={styles.usernameContent}>
                               <h3>{oneReview.username}</h3>
                               </div>
                           </div>
                            <div className={styles.reviewBubble} >
                                <div className={styles.bubbleContent}>
                                <div id={styles.bobafromShop}>
                                <p><b>{oneReview.boba}</b> <span>from</span><b> {oneReview.shop}</b></p>
                                </div>
                                <div className={styles.ratingReview}>
                                <p> rating: {oneReview.rating} ⭐ </p>
                                </div>
                                <div className={styles.reviewTextBox}>
                                <p>{oneReview.review}</p>
                                </div>
                                
                            
                                 
                                        {oneReview.picture?
                                    <img className={styles.reviewPic} src= {oneReview.picture} alt='pic' />
                                        :
                                        null
                                        }
                                    <div className={styles.editBtns}>
                                        {sessionUser == oneReview.user_id ? 
                                        <div>
                                    
                                            <NavLink to={`review/edit/${oneReview.id}`} >
                                            <button className={styles.reviewEditBtn}>Edit</button>
                                            </NavLink>
                                    
                                       
                                            {/* <button onClick={(e) =>handleDelete(e)}>delete</button> */}
                                  
                                        </div>
                                        : <>
                                        </>   
                                        }
                                            <div className={styles.datePost}>
                                            <p>{oneReview.date}</p>
                                            </div>
                                        </div>
                                    </div>                           
    
                                </div>

                           
                        </div>
                   ))}
                </div>
            </div>
        </div>

    </>
    )
}

export default ReviewPage  