import AppIcon from "../images/appIcon.svg";
import SuccessTick from "../images/success-tick.svg";


function AuthSuccess() {
    return <div>
        <header>
      <nav className = "">
          <h1 className="nav-left"><sub><img className='app-icon' src={AppIcon} alt="app-icon" /></sub> &nbsp; ANONYMOUS</h1>
      </nav>
    </header>

    <main>

        <div className="card">
            <img className='success-tick-icon' src={SuccessTick} alt="success-tick-icon" />
            <h1>Account Created Successfully</h1>
            <form action="" method="post">
                <button type="submit" className="continue-button">Create your first post <i class="fa-solid fa-arrow-right"></i></button>
            </form>
        </div>


    </main>



    </div>


}

export default AuthSuccess;