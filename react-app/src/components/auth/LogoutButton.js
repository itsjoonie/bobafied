import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()


  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
  <NavLink to='/' onClick={onLogout}>
    <button >Logout <i class="fas fa-sign-out-alt"></i></button>
    </NavLink>
  )
};

export default LogoutButton;
