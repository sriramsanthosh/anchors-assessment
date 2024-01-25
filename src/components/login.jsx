import AppIcon from "../images/appIcon.svg";
import Rocket from "../images/rocket.svg";

function Login() {
    return <div>
        <header>
      <nav className = "">
          <h1 className="nav-left"><sub><img className='app-icon' src={AppIcon} alt="app-icon" /></sub> &nbsp; ANONYMOUS</h1>
      </nav>
    </header>

    <main>

        <div className="card">
            <img className='rocket-icon single-rocket' src={Rocket} alt="rocket-icon" />
            <h1>Login to Your Account</h1>

            <form action="" method="post">
                <input className="input-box" type="email" name="email" id="email" placeholder="Enter Email ID" required/><br />
                <button type="submit" className="continue-button">Continue &nbsp; <i class="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>


    </main>

    </div>
}

export default Login;