
import React, { useState, useEffect } from 'react';
import { useParams, useHistory, NavLink} from 'react-router-dom';
// import NavBar from '../Navigation/NavBar';
import { useDispatch, useSelector} from 'react-redux';
import * as sessionAction from '../../store/session';
import * as bobaAction from '../../store/boba';
import styles from '../boba/BobaList.module.css';

function BobaList(){
 
    const bobas =  Object.values(useSelector((state)=>(state.boba)))[0]
    const sessionUser = useSelector(state => state.session.user.id)
    // const bobasClone = Object.assign([], bobas)
    // const bobasReverse = bobas.reverse()



    return (
        <div className={styles.bobalistpage}>
            <div className={styles.bobalistContainer}>
                <div className={styles.bobalistMain}>
                    <div className={styles.bobalistBox}>
                        <div className={styles.bobalistContent}>
                            <div className={styles.bobalisth1}>
                                <h1>List of bobas</h1>
                            </div>
                            <div className={styles.addBoba}>
                                <p> Don't see your boba on the list? </p>
                                <div className={styles.addBobaContainer}>
                                <NavLink to='/bobaform' className={styles.addBobaLink} exact={true} activeClassName='active'>
                                <button>Add a Boba </button>
                                </NavLink>
                                </div>
                            </div>
                            <div className={styles.bobaContainer}>
                                {bobas?.map(oneBoba=>(<div key={oneBoba.id} className={styles.bobaContent}>
                                    <NavLink className={styles.bobaDetailsLink}to={`/boba/${oneBoba.id}`}>
                                    <div className={styles.bobaCard}>
                                        <div className={styles.bobaIconContainer}>
                                        {oneBoba.icon?
                                        <img className={styles.bobaIcon} alt="boba" src={oneBoba.icon}/>
                                        :
                                        <img className={styles.bobaIcon} alt="boba" src='https://i.pinimg.com/736x/53/b7/31/53b7315a445315c369c3a8f806af0834.jpg'/>
                                        }
                                        </div>
                                        
                                        <div className={styles.bobaDetails}>    <div className={styles.nameRow}>
                                    
                                            <h2 className={styles.bobaName}>{oneBoba.name} </h2>
                                            
                                         
                                            </div>
                                            <div className={styles.bobaType}>
                                            <p>Flavor: {oneBoba.flavor} </p>
                                            </div>
                                            <div className={styles.bobaType}>
                                            <p>Drink Type: {oneBoba.drink_type}</p>
                                        </div>
                                        <div className={styles.moredetails}>
                                        <div>
                                            <p id={styles.more}>{ oneBoba.user_id == sessionUser ? <i class="fas fa-edit"></i> :
                                            <></>}+ click on me for more details!</p>
                                            
                                        </div>
                                        </div>
                                            </div>
                                       
                                    </div>
                                     </NavLink>
                                </div>))}
                            </div>
                        </div>
                                 
                    </div>

                </div>


            </div>
        
        
        </div>
        
    )
}

export default BobaList;