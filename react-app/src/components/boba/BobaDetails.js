import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useHistory} from "react-router-dom";
import * as bobaAction from '../../store/boba'
import './BobaDetails.css'

function BobaDetails(){
    const history = useHistory()
    const dispatch = useDispatch();
    const id = useParams().id
    // const boba = useSelector((state)=>state.boba.id)
    const bobas =  Object.values(useSelector((state)=>(state.boba)))[0]
    const boba = bobas.filter(boba => (
        boba.id == id
    ))
    const sessionUser = useSelector(state => state.session.user.id)




    useEffect(()=>{
        dispatch(bobaAction.getOneBoba(id))
    }, [dispatch, id])


    return (
     <div className='detailPage'>
         <div className='cardbox'>
                <div className='detail-container'>
                <div className='image-div'>
                    {!boba[0].icon ?
                    
                    <img id='bobaImage' src='https://i.pinimg.com/736x/53/b7/31/53b7315a445315c369c3a8f806af0834.jpg' alt='pic'/>
                    :
                    <img id='bobaImage' src={boba[0].icon} alt='pic'/>
                }
                </div>
                <div className='detailContent'>
                    <h1>{boba[0].name}</h1>
                    <h2>Flavor: {boba[0].flavor}</h2>
                    <h2>Tea type: {boba[0].tea_type}</h2>
                    <h2>Drink type: {boba[0].drink_type}</h2>
                </div>
              
             </div>
             <div id='bobaDescriptions'>
                <h3>Description: <span>{boba[0].description}</span></h3>
             </div>
            <div className ='bobaFormEditBtn'>
                {sessionUser==boba[0].user_id ?
                    <div>
                        <NavLink to={`/bobaform/edit/${boba[0].id}`}>
                            <button className='updateBobaNav'>update</button>
                            </NavLink>
                    </div>
                    :
                    <></>
                                }
            </div>

         </div>



     </div>
    
    )

}

export default BobaDetails