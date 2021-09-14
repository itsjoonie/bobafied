import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as reviewAction from '../../store/review';
import './ReviewEditForm.css'



function ReviewEditForm (){

    const dispatch = useDispatch()
    const history = useHistory()
    const id = useParams().id 
    const reviews = Object.values(useSelector((state) => (state.review)))[0]
    const boba =  Object.values(useSelector((state)=>(state.boba)))
    const shops = Object.values(useSelector((state) => (state.shop)))
    const oneReview = reviews.filter(review => (
        review.id == id
    ))[0]
    const user_id = useSelector(state => state.session.user).id;
 

    const [errors, setErrors] = useState([]);
 
    const [bobaId, setBobaId] = useState(oneReview?.boba_id);
    const [shopId, setShopId] = useState(oneReview?.shop_id);
    const [rating, setRating] = useState(oneReview?.rating);
    const [review, setReview] = useState(oneReview?.review);
    const [picture, setPicture] = useState(oneReview?.picture)


    

    const handleUpdate = async (e) => {
        e.preventDefault();
   
        const data = await dispatch(reviewAction.editReview(user_id, bobaId, shopId, +rating, review, picture, oneReview.id)); // the + is an integer
        // await dispatch(reviewAction.editReview(user_id, bobaId, shopId, +rating, review, picture, oneReview.id)); // the + is an integer
        if(data?.errors) {
            setErrors(data?.errors)
            return
        }
        // if(bobaId === null) data.push('Please select boba')
        // if(shopId === null) data.push('please select shop')
        // console.log(data, "THIS IS ERROR DATA")
        // setErrors(data)
        // if(data.length === 0){
             history.push(`/hangout`)
        // } 
    
        
    }

  const handleDelete = async () =>{
        await dispatch(reviewAction.removeReview(oneReview.id))
        history.push(`/hangout`)
    }




    return (
        <div className='reviewEditPage'>
   
         
            <div className='reviewForm-container'>
            <form  className='reviewForm-content' onSubmit={handleUpdate}>
                <div id='update-rev-h1'>
                    <h1>Edit Your Boba Review</h1>
                </div>
                <div id='editreviewbox'>
                <div id='editreviewbox-content'>
                <div className='updateSelection'>
                <label className='labelFont'>Boba:</label>
                <select
                type='text' name='flavor' value={bobaId} onChange={(e)=>setBobaId(e.target.value)} placeholder='please select'>
                    <option value={null}>Please select Boba</option>
                    {boba[0]?.map(oneBoba=>(<option key={oneBoba.id}
                    value={oneBoba.id}>{oneBoba.name}</option>))}
                </select>
                <label id='shop-label' className='labelFont'>From Shop:</label>
                <select
                type='text' name={0} value={shopId} onChange={(e)=>setShopId(e.target.value)} placeholder='please select'>
                    <option value={null}>Please select Shop</option>
                    {shops[0]?.map(shop=>(<option key={shop.id}
                    value={shop.id}>{shop.name}</option>))}
                </select>
                </div>
                <div className='updateRating'>
                    <label className='labelFont'>Rating: </label>
                        <input type="radio" name ='rating'
                        checked={1 == rating} value={1} onChange={(e) => setRating(e.target.value)}/>
                            <label>1⭐</label>
        
                        <input type="radio" name ='rating' checked={2 == rating} value={2} onChange={(e) => setRating(e.target.value)} />
                            <label>2⭐</label>
                
                        <input type="radio" name ='rating'
                        checked={3 == rating}  value={3} onChange={(e) => setRating(e.target.value)} />
                            <label>3⭐</label>
            
                        <input type="radio" name ='rating' checked={4 == rating}  value={4} onChange={(e) => setRating(e.target.value)} />
                            <label>4⭐</label>
                
                        <input type="radio" name ='rating'
                        checked={5 == rating} value={5} onChange={(e) => setRating(e.target.value)} />
                            <label>5⭐</label>
                    
                </div>
                <div className='updateRev'>
                    <div className='update-label' >
                    <label className='labelFont'>Your review:</label>
                    </div>
                    <textarea className='insertTextArea' rows="8" cols="55" placeholder="Write what you think about your drink here..." value={review} onChange={(e) => setReview(e.target.value)} />
                </div>
                <div className='updateRevPic'>
                    <label className='labelFont'>Your picture:</label>
                    <input type='text' placeholder='input link here' name='picture' value={picture} onChange={(e)=>setPicture(e.target.value)}/>
                </div>

                <div className='ReviewUpdateBtns'>
                    <div>
                        <button className='button reviewUpdateBtns' type='submit'>Update</button>
                    </div>
                    <div>
                        <button className='button reviewUpdateBtns' onClick={handleDelete}>Delete</button>
                    </div>
                    </div>
                </div>
                </div>
                <div id='errorHandlingR'>
                    <p className= 'errorText'>{errors.boba_id}</p>
                    <p className= 'errorText'>{errors.shop_id}</p>
                </div>
            </form>
            </div>
            
    </div>
    )
}

export default ReviewEditForm