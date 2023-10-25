import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
  // you can see the Google's response in the console, it includes a lot of information, but the most important is the tokenId
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <GoogleLogin
        clientId="235254569809-kmmp6vn0e2h9sdr5b2j1997io5qn1spb.apps.googleusercontent.com" // replace with your client id
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
