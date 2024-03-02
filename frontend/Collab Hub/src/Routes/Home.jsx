// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';


function Home() {
  return (

    <div>
      <Header />
      <h1>Home Page</h1>
      <Link to="/codingroom">Go to Coding Page</Link>
    </div>

    

  )
}

export default Home

