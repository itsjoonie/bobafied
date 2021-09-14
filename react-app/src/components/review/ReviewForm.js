import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import * as reviewAction from '../../store/review';
import './ReviewForm.css'


function ReviewForm (){
    const reviews = Object.values(useSelector((state) => (state.review)))
    const dispatch = useDispatch()
    const history = useHistory()
    const user_id = useSelector(state => state.session.user.id)
    const boba =  Object.values(useSelector((state)=>(state.boba)))
    const shops = Object.values(useSelector((state) => (state.shop)))
   
    //  document.getElementsByClassName("Radio-button").checked="false"
    const starReset = useRef()

    const [errors, setErrors] = useState([]);
    const [bobaId, setBobaId] = useState('');
    const [shopId, setShopId] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [picture, setPicture] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await dispatch(reviewAction.createReviews(user_id, bobaId, shopId, +rating, review, picture)); // the + is an integer

        if(data.errors){
            setErrors(data.errors)
        }
        else {
            clearForm()
        }
       
    }

    function clearForm (){
        setErrors([])
        setBobaId('')
        setShopId('')
        setRating('')
        setReview('')
        setPicture('') 
        starReset.current.click()
    }

    return (
        <div className='reviewFormPage'>
        <div className='reviewHeading'>
   
        <h1>Want to share your Boba?</h1>
   
        <h2 className='reviewHeading2'>Review your drink here: </h2>
    
        </div>
        <form onSubmit={handleSubmit}>
            <div className='bobaSelections'>
            <label id='bobaflavor'>Which Boba? </label>
            <select 
            type='text' name='flavor' value={bobaId} onChange={(e)=>setBobaId(e.target.value)} placeholder='please select'>
                <option>please select boba</option>
                {boba[0]?.map(oneBoba=>(<option key={oneBoba.id}
                value={oneBoba.id}>{oneBoba.name}</option>))}
            </select>

            <label className='from'>From?</label>
            <select className='fromSelect'
            type='text' name='shop' value={shopId} onChange={(e)=>setShopId(e.target.value)} placeholder='please select'>
                <option>please select shop</option>
                {shops[0]?.map(shop=>(<option key={shop.id}
                value={shop.id}>{shop.name}</option>))}
            </select>
            </div>
            <div className='reviewRating'>
                <label>Rating: </label>
                    <input className='radio-btn'  type="radio" name ='rating' value={1} onChange={(e) => setRating(e.target.value)} />
                        <label>1⭐</label>
      
                    <input className='radio-btn'  type="radio" name ='rating' value={2} onChange={(e) => setRating(e.target.value)} />
                        <label>2⭐</label>
             
                    <input className='radio-btn' type="radio" name ='rating' value={3} onChange={(e) => setRating(e.target.value)} />
                        <label>3⭐</label>
           
                    <input className='radio-btn' type="radio" name ='rating' value={4} onChange={(e) => setRating(e.target.value)} />
                        <label>4⭐</label>
               
                    <input className='radio-btn'  type="radio" name ='rating' value={5} onChange={(e) => setRating(e.target.value)} />
                        <label>5⭐</label>
                 
            </div>
            <div className='insertText'>
                <textarea className='reviewTextarea' value={review} rows="8" cols="55" placeholder="Optional: Write what you think about your drink here..." onChange={(e) => setReview(e.target.value)} />
            </div>
            <div className='insertPic'>
              
                <label>Share your picture:</label>
                <input type='text' className='picBox' placeholder='optional' name='picture' value={picture} onChange={(e)=>setPicture(e.target.value)}/>
              
            </div>

            <div className='reviewBtns'>
                <button className="button postReview-btn" type="submit">Submit</button>
             
                <button className="button cancelReview-btn" ref={starReset} type='reset' onClick={clearForm}>Clear</button>
             
            </div>
            <div id='errorHandling'>
            <p className='reviewError'>{errors.boba_id}</p>
            <p className='reviewError'>{errors.shop_id}</p>
            <p className='reviewError'>{errors.rating}</p>
            </div>

        </form>

    </div>
    )



}


export default ReviewForm