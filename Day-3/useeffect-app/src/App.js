import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Demo from './components/learnUseReducer/Demo';

function App() {
  const [learnUserReducer, setLearnUserReducer] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLogged') === "1") {
      setIsLoggedIn(true);
    }
  }, [])


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLogged", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLogged", "0");
    setIsLoggedIn(false);
  };

 
  return (
    <>
    {learnUserReducer && <Demo/>}
     {!learnUserReducer && <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      <button onClick={()=>setLearnUserReducer(true)}>Change to Reducer</button>
    </React.Fragment>}
     </>
  );
  
}

export default App;
