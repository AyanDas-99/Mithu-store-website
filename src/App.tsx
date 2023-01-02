import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Feed } from './pages/feed'
import { About } from './pages/about'
import { Contact } from './pages/contact'
import { Login } from './pages/login/signin'
import { Nav } from './components/navbar'
import { Error } from './pages/error'

function App() {
  return (
    <div className="App">
      <Router>
        < Nav />
        <Routes>
          <Route path='/' element={< Feed />} />
          <Route path='/login' element={< Login />} />
          <Route path='/contact' element={< Contact />} />
          <Route path='/about' element={< About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
