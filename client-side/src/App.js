
import './App.css';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import {Routes, Route, Router} from 'react-router-dom';
import Field from './components/Field'
import Leaderboard from './pages/Leaderboard';
import { useState , useEffect, useContext} from 'react';
import {ThemeContext}  from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle';


function App() {

  const[userId, setUserId] = useState(JSON.parse(localStorage.getItem('id')));

  // useEffect(() => {localStorage.setItem('id', JSON.stringify(userId))}, [])

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark");
      document.body.classList.remove("bg-light");
    } else {
      document.body.classList.add("bg-light");
      document.body.classList.remove("bg-dark");
    }
  });

  function setData(data) {
    localStorage.setItem('id', JSON.stringify(data));
    setUserId(getData());
  }

  function getData() {
    return JSON.parse(localStorage.getItem('id'));
  }

  return (
    <div className="App">
      <ThemeToggle />
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
