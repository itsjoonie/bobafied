import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session'
import * as bobaAction from '../../store/boba'
import styles from '../boba/BobaForm.module.css';

const BobaForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user.id)
 



    const [errors, setErrors] = useState([])
    const [name, setName] = useState('')
    const [flavor, setFlavor] = useState('')
    const [teaType, setTeaType] = useState('')
    const [drinkType, setDrinkType] = useState('')
    const [description, setDescription]= useState('')
    const [icon, setIcon]= useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await dispatch(bobaAction.createBoba(userId, name, flavor, teaType, drinkType, description, icon))
      
        if(data.errors) {
            setErrors(data.errors)
        } 
        else history.push(`/bobalist`)
    }


    return (
        <>
        <div className={styles.bobaformpage}>
            <div className={styles.bobaformContainer}>
                <div className={styles.formheader}>
                    <h1>Add a Boba!</h1>
                </div>
                <form className={styles.bobaForm} onSubmit ={handleSubmit}>
                   
                    <div className={styles.inputs}>
                        <label id={styles.bobaNameLabel}>Boba Name:</label>
                        <input className={styles.bname} type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
                        <p className={styles.formError}>{errors.name}</p>
                    </div>
                    <div className={styles.selection}>
                        <label >Flavor:</label>
                        <select className={styles.fselectbox}
                         type='text' name='flavor' value={flavor} onChange={(e)=>setFlavor(e.target.value)} placeholder='please select'>
                             <option>Please select a flavor</option>
                             <option value='Brown Sugar'>Brown Sugar</option>
                             <option value='Hokkaido'>Hokkaido</option>
                             <option value='Jasmine'>Jasmine</option>
                             <option value='Lychee'>Lychee</option>
                             <option value='Mango'>Mango</option>
                             <option value='Matcha'>Matcha</option>
                             <option value='Passion Fruit'>Passion Fruit</option>
                             <option value='Taro'>Taro</option>
                             <option value='Thai Tea'>Thai</option>
                             <option value='Strawberry'>Strawberry</option>
                             <option value='Other'>Other</option>
                        </select>
                        <p className={styles.formError}>{errors.flavor}</p>
                    </div>
                    <div className={styles.selection}>
                        <label>Tea Type:</label>
                        <select className={styles.tselectbox}
                        type='text' name='teaType' value={teaType} onChange={(e)=>setTeaType(e.target.value)} placeholder='please select'>
                            <option>Please select a Tea Type</option>
                            <option value='Black Tea'>Black Tea</option>
                            <option value='Green Tea'>Green Tea</option>
                            <option value='Herbal'>Herbal</option>
                            <option value='Jasmine'>Jasmine</option>
                            <option value='Oolong'>Oolong</option>
                            <option value='Other'>Other</option>
                            <option value='None'>None</option>
                        </select>
                        <p className={styles.formError}>{errors.tea_type}</p>
                    </div>  
                    <div className={styles.inputs}>
                        <label>Drink Type:</label>
                        <select className={styles.dselectbox}
                        type='text' name='drinkType' value={drinkType} onChange={(e)=>setDrinkType(e.target.value)} placeholder='please select'>
                            <option>Please select a Drink type</option>
                            <option value='Fruity'>Fruity</option>
                            <option value='Milk Tea'>Milk Tea</option>
                            <option value='Slushie'>Slushie</option>
                            <option value='Smoothie'>Smoothie</option>
                            <option value='Other'>Other</option>
                        </select>
                        <p className={styles.formError}>{errors.drink_type}</p>                       
                    </div>
                    <div className={styles.description}>
                        <label id={styles.descriptId}>Description:</label>
                        <textarea className={styles.dtextarea} name='description' rows='5' cols='20' value={description} placeholder='description of the boba here....' onChange={(e)=>setDescription(e.target.value)}/>
                        <p className={styles.formError}>{errors.description}</p>  
                    </div>
                    <div className={styles.inputs}>
                        <label>Boba Image:</label>
                        <input className={styles.iconinput} placeholder='insert photo link here...' type='text' name='icon' value={icon} onChange={(e)=>setIcon(e.target.value)}/>
                        {/* <p className={styles.formError}>{errors.icon}</p>  */}
                    </div>
                    <div className={styles.bobaButtons}>
                        <div className={styles.bobabtns}>
                        <button className="button submitForm-btn" type="submit"><span>Submit</span></button>
                        </div>
                        <div className={styles.bobabtns1}>
                        <button className="button cancelForm-btn" onClick={()=>history.push('/bobalist')} > <span>Cancel</span></button>       
                        </div>                 
                    </div>                                   

                </form>
                
            </div>

        </div>
        </>
    )





}

export default BobaForm