import React from 'react';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/Header';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import './style.css';

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}
