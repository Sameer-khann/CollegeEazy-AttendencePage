import './App.css';

import Notes  from './components/Notes';
import SignUp  from './components/SignUp';
import AttendancePage  from './components/AttendancePage';
import Attendence2  from './components/Attendence2';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import PrePage from './components/PrePage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
         <Routes>
              <Route exact path="/" element={<HomePage/>}></Route>
              <Route exact path="/Notes" element={<Notes/>}></Route>
              <Route exact path="/Notes/PrePage" element={<PrePage/>}></Route>
              <Route exact path="/AttendancePage" element={<AttendancePage/>}></Route>
              <Route exact path="/LoginPage" element={<LoginPage/>}></Route>
              <Route exact path="/LoginPage/SignUp" element={<SignUp/>}></Route>
        </Routes>
    </Router>
   
    </>
  );
}

export default App;
