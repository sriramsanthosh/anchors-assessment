import AppIcon from "../images/appIcon.svg";
import Rocket from "../images/rocket.svg";

function SignUp() {
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

            <form action="/authenticate" method="post">
                <input className="input-box" type="text" name="name" id="name" placeholder="Your Name" required/><br />
                <input className="input-box" type="email" name="email" id="email" placeholder="Enter Email ID" required/><br />
                <button type="submit" className="continue-button">Continue &nbsp; <i class="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>


    </main>



    </div>


}

export default SignUp;