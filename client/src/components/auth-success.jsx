import { useNavigate } from "react-router-dom";
import AppIcon from "../images/appIcon.svg";
import SuccessTick from "../images/success-tick.svg";


function AuthSuccess() {
    
    const navigate = useNavigate();
    return <div>
    <header>
        <nav className = "outer-container">
            <div className="nav-left inner-container outer-container">
                <div className="inner-container logo-container"><img className='app-icon logo' src={AppIcon} alt="app-icon" /></div>
                <h1 className="inner-container"> ANONYMOUS</h1>
            </div>
            <h1 className="nav-right inner-container">Welcome, Name</h1>
        </nav>
    </header>

    <main>

        <div className="card">
            <img className='success-tick-icon' src={SuccessTick} alt="success-tick-icon" />
            <h1>Account Created Successfully</h1>
            <form action="" method="post">
                <button type="submit" className="continue-button" onClick={() => navigate("/new-post")}>Create your first post <i class="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>


    </main>



    </div>


}

export default AuthSuccess;