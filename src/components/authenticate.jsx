import AppIcon from "../images/appIcon.svg";
import Rocket from "../images/rocket.svg";


function Authenticate() {
    return <div>
    <header>
        <nav className = "outer-container">
            <div className="nav-left inner-container outer-container">
                <div className="inner-container logo-container"><img className='app-icon logo' src={AppIcon} alt="app-icon" /></div>
                <h1 className="inner-container"> ANONYMOUS</h1>
            </div>
        </nav>
    </header>

    <main>

        <div className="card">
            <img className='rocket-icon single-rocket' src={Rocket} alt="rocket-icon" />
            <h1>Create Your Account</h1>
            <p className="verify-otp-text">Please verify your email ID to continue. We have sent an OTP to this emailID</p>
            <form action="" method="post">
                <input className="input-box" type="text" name="otp" id="otp" placeholder="Enter OTP" required/><br />
                <button type="submit" className="continue-button">Continue &nbsp; <i class="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>


    </main>



    </div>


}

export default Authenticate;