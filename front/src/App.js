import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SAM from './componenets/SAM';
import Navbar from './componenets/Navbar';
import Topnav from './componenets/Topnav';
import Phonenav from './componenets/PhoneNav';
import Messages from './componenets/Messages';
import Setting from './componenets/Setting';
import Assets from './componenets/Assets';
import Login from './componenets/LogIn'
import SignUP from './componenets/SignUp'
import Services from './componenets/Services';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false); // State for authentication
  const [id, setId] = useState(''); // State for user id
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [FontSize, setFontSize] = useState("fs-2");

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='container-fluid m-0 p-0 body'>
      <div className='row m-0 p-0 justify-content-end'>
        {window.innerWidth > 1100 ? <Navbar setAuthenticated={setAuthenticated} isDarkMode={isDarkMode} toggleMode={toggleMode} /> : null}
        <div className="row col-xl-10 p-0 m-0 col-lg-9 col-md-8 col-12">
          {window.innerWidth > 1100 ? <Topnav isDarkMode={isDarkMode} toggleMode={toggleMode} /> : <Phonenav setAuthenticated={setAuthenticated} isDarkMode={isDarkMode} toggleMode={toggleMode} />}
          <div className='px-5 pt-4  d-flex m-0 flex-column row justify-content-center' style={{ overflow: 'hidden' }}>
            <Routes>
              <Route path='/home' element={authenticated ? <SAM isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} /> : <Navigate to="/" />} />
              <Route path='/messages' element={authenticated ? <Messages ID={id} isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} /> : <Navigate to="/" />} />
              <Route path='/setting' element={authenticated ? <Setting ID={id} isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} /> : <Navigate to="/" />} />
              <Route path='/assets' element={authenticated ? <Assets isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} /> : <Navigate to="/" />} />
              <Route path='/services' element={authenticated ? <Services isDarkMode={isDarkMode} toggleMode={toggleMode} FontSize={FontSize} setFontSize={setFontSize} /> : <Navigate to="/" />} />
              <Route path='/' element={!authenticated ? <Login setId={setId} setAuthenticated={setAuthenticated} /> : <Navigate to="/home" />} />
              <Route path='/signup' element={!authenticated ? <SignUP /> : <Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
