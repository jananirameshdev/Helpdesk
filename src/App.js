import './App.css';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Forgot from './Components/Forgot';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import NewTicket from './Components/NewTicket';
import MyTicket from './Components/MyTicket';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/new' element={<NewTicket />} />
        <Route path='/myticket' element={<MyTicket />} />
      </Routes>
      <SignIn />
    </div>
  );
}

export default App;
