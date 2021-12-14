import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import styles from '../navbar/NavBar.module.css';

const NavBar = () => {
  const history = useHistory();
  const user = useSelector(state => state.session.user);
  return (
    <nav className={styles.navbarContent}>


      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <NavLink className={styles.navbarLogo}to='/home' exact={true} activeClassName='active'>BOBAFIED
        </NavLink>
        </div>


{/*   
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink> */}
        <div className ={styles.navbarBtn}>
          {!user ? 
            <div className={styles.navbarBtnConatiners}>
            <div className={styles.navLinks}>
              <div className={styles.notlogin}>
                <div>
                  <button className={styles.navLoginbtn} onClick={()=>history.push(`/`)}  activeClassName='active'>
                    <i class="fas fa-arrow-circle-left"></i><span> </span>
                    Go Back!
                </button>
               </div>

                {/* <div className={styles.navSignup}>
                  <button onClick={()=>history.push(`/sign-up`)} activeClassName='active'>
                    Sign Up
                  </button>
                </div>

                <div className={styles.navDemo}>
                  <button onClick={()=>history.push(`/sign-up`)} activeClassName='active'>
                    Demo
                  </button>
                </div> */}
             
            </div>
            </div>
            </div>

         
            :
            <div className={styles.navbarLogin}>
            <div className={styles.navbtton}>
                <NavLink to='/hangout' exact={true} activeClassName='active'>
                  <button>Hangout<span> </span><i class="fas fa-users"></i></button>
                </NavLink>
              </div>
              <div className={styles.navbtton}>
                <NavLink to='/bobalist' exact={true} activeClassName='active'>
                  <button>Bobas<span> </span><i class="fas fa-coffee"></i></button>
                </NavLink>
              </div>
              <div className={styles.navUser}>
                <NavLink to='/home' exact={true} activeClassName='active'>
                  <button>Home <i class="fas fa-home"></i></button>
                </NavLink>
              </div>
              <div className={styles.navLogout}>
                <LogoutButton />
              </div>

           </div>
          }
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
