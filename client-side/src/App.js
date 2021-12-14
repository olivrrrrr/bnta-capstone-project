
import './App.css';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import {Routes, Route, Router} from 'react-router-dom';
import Field from './components/Field'
import Leaderboard from './pages/Leaderboard';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/loginpage" element={<LoginPage />}/>
          <Route path="/userpage" element={<UserPage />}/>
          <Route path="/adminpage" element={<AdminPage />}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>
        {/* <Field/> */}
        {/* <Leaderboard/> */}
    </div>
  );
}

export default App;
