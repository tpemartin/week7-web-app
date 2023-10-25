import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const responseGoogle = (response) => {
  console.log(response);
  // you can see the Google's response in the console, it includes a lot of information, but the most important is the tokenId
}

function App() {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
return (
    <div>
        <h2>React Google Login</h2>
        <br />
        <br />
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
)
}

export default App
