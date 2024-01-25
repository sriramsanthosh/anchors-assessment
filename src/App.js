import './App.css';
import Home from './components/home';
import SignUp from './components/sign-up';
import Login from './components/login';
import Authenticate from './components/authenticate';
import AuthSuccess from './components/auth-success';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (

      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/authenticate" element={<Authenticate />}/>
            <Route path="/auth-success" element={<AuthSuccess />}/>
          </Routes>
        </BrowserRouter>
      </div>


  );
}

export default App;
