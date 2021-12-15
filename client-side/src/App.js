
import './App.css';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import {Routes, Route, Router} from 'react-router-dom';
import Field from './components/Field'
import Leaderboard from './pages/Leaderboard';
import { useState , useEffect} from 'react';


function App() {

  const[userId, setUserId] = useState(JSON.parse(localStorage.getItem('id')));

  // useEffect(() => {localStorage.setItem('id', JSON.stringify(userId))}, [])

  function setData(data) {
    localStorage.setItem('id', JSON.stringify(data));
    setUserId(getData());
  }

  function getData() {
    return JSON.parse(localStorage.getItem('id'));
  }

  return (
    <div className="App">
        <Routes>
          <Route path="/loginpage" element={<LoginPage setData={setData}/>}/>
          <Route path="/userpage" element={<UserPage userId={userId}/>}/>
          <Route path="/adminpage" element={<AdminPage />}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>
        {/* <Field/> */}
        {/* <Leaderboard/> */}
    </div>
  );
}

export default App;
