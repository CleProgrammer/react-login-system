import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/login';
import SignUp from './components/singUp';
import MainPage from './mainPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mainpage' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
