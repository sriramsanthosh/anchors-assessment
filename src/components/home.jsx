import { useNavigate } from "react-router-dom";
import AppIcon from "../images/appIcon.svg";
import Rocket from "../images/rocket.svg";

function Home(){
    const navigate = useNavigate();
    return <div className="App HomeApp">
    <header>
      <nav className = "">
          <h1 className="nav-left"><sub><img className='app-icon' src={AppIcon} alt="app-icon" /></sub> &nbsp; ANONYMOUS</h1>
      </nav>
    </header>

    <main className="text-center">
        <div className='india-button-container'><sub><img className='rocket-icon' src={Rocket} alt="rocket-icon" /> </sub><span className="india-button-container-text">For Indian Users Only</span></div>
        <h1 className = "main-content-heading">Start posting anonymously where no one will judge.</h1>
        <p className="main-content-heading-quote">Welcome to Stranger discussion forum</p>
        <button onClick={() => navigate("/sign-up")} className='india-button-container create-your-account'>Create Your Account &nbsp; <i class="fa-solid fa-arrow-right"></i></button>
        <p>Already have account? <button className="login-button" onClick={() => navigate("/login")}>Login</button></p>
        

    </main>
    <footer>
      
    </footer>
    </div>
}

export default Home;