import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import './User.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const boba =  Object.values(useSelector((state)=>(state.boba)))
  const reviews = Object.values(useSelector((state)=>(state.review)))[0]

  



  useEffect(() => {
    // if(sessionUser.id == reviews.user_id){
    // async()={ 
    // await dispatch(reviewAction.getReviews())}
    // })
    // if (!userId) {
    //   return;
    // }
    // (async () => {
    //   const response = await fetch(`/api/users/${userId}`);
    //   const user = await response.json();
    //   setUser(user);
    // })();

  });

  // if (!user) {
  //   return null;
  // }


  return (
    <div className='userprofile'>
      <div className='userDashboard'>
        <h1>Activity</h1>
        <div className='activityContent'>
        </div>
      </div>
      <div className='userRightSide'>
        <div className='userInfoContainer'>
          <div>
            <h1>{sessionUser.first_name} {sessionUser.last_name}</h1> 
          </div>
          <div>
            <h2>{sessionUser.username}</h2>
          </div>
        </div>
        <div className='useraddedBoba'>
          <h3>Added boba post</h3>
          <div className='userAddedBobaContent'>
            {boba[0].map(oneBoba => {
              if(sessionUser.id === oneBoba.user_id) return (
                <div>
                  <div>
                  <h1>{oneBoba.name}</h1>
                  </div>
                  <div>
                    <NavLink to={`/bobaform/edit/${oneBoba.id}`}>
                    <button>update</button>
                    </NavLink>
                  </div>
                </div>
              )

              
            })}
          </div>


        </div>
      </div>
    </div>
  );
}
export default User;
