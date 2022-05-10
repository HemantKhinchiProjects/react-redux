import React from 'react';
import Auth from './components/Auth';
import Header from './components/Header';
import Counter from './components/Counter';
import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
  );
}
