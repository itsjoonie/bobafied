import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/navbar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import * as bobaAction from './store/boba';
import * as reviewAction from './store/review';
import * as shopAction from './store/shop'
import BobaList from './components/boba/BobaList'
import BobaForm from './components/boba/BobaForm';
import SplashPage from './components/SplashPage';
import BobaDetails from './components/boba/BobaDetails';
import BobaFormEdit from './components/boba/BobaFormEdit';
import ReviewPage from './components/review/ReviewPage'
import ReviewEditForm from './components/review/ReviewEditForm';
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/HomePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(bobaAction.getBobas())
      await dispatch(reviewAction.getReviews())
      await dispatch(shopAction.getShops()) //load up as soon as you're on the page
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    <Footer/>
      <Switch>
        <Route path='/login' exact={true}>
          <NavBar />
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <NavBar />
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/home' exact={true} >
          <NavBar />
          <Homepage/>
          {/* <User /> */}
        </ProtectedRoute>
      </Switch>
      <Route path='/bobalist'>
        <NavBar />
        <BobaList />
      </Route>
      <Route path='/bobaform'>
        <NavBar />
        <BobaForm />
      </Route>
      <Route path='/' exact={true} >
        <SplashPage/>
        
      </Route>
      <Route path='/boba/:id'>
        <NavBar />
        <BobaDetails/>
      </Route>
      <Route path='/bobaform/edit/:id'>
        <BobaFormEdit/>
      </Route>
      <Route path='/hangout'>
        <NavBar />
        <ReviewPage />
      </Route>
      <Route path='/review/edit/:id'>
        <NavBar />
        <ReviewEditForm/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
