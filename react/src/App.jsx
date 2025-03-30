import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import Donations from './pages/Donations'
import UserProfile from './pages/UserProfile'
import LandingPage from './pages/LandingPage'
import axios from 'axios';

const accounts = axios.create({
  baseURL: import.meta.env.VITE_ACCOUNT_AUTH_URL,
  withCredentials: true
})

function App() {


  const [user, setUser] = React.useState();
  const [netError, setNetError] = React.useState(false);
  const [sessionExpired, setSessionExpired] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(function() {
    try {
        accounts.get()
            .then( (response) => {
                setUser(response.data)
                setIsLoading(false)
            })
    
            .catch( (error) => {
                if(!error.response){
                    console.error("No error response");

                    setNetError(true)

                    setTimeout(function() {
                        setNetError(false);
                    }, 3000)
                }
                else if (error.response?.status == 401) {
                    console.error("Response: " + error.response.status + " \"Unauthorized\"");
                    setSessionExpired(true)

                    setTimeout(function(){
                        setSessionExpired(false)
                    }, 3000)
                }
                else if (error.response?.status == 404) {
                    console.error("Response: " + error.response.status + " \"Not found\"");
                }
       
                setIsLoading(false)
            });
            
    } catch(err) {
        console.error(err)
    }

    
}, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={user ? <HomePage user={user} /> : <Navigate to="/login" replace/>} />
        <Route path="/donations" element={user ? <Donations user={user} />: <Navigate to="/login" replace/>}/>
        <Route path="/profile" element={user? <UserProfile user={user} />: <Navigate to="/login" replace/>}/>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" replace/>} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" replace/>} />
      </Routes>
    </Router>
  )
}

export default App
