import AppIcon from "../images/appIcon.svg";
import { useNavigate } from "react-router-dom";

function NewPost() {
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

    <main >

            <div className="feed-container">

            
                <div className="feed-button-container">
                    <div><button className="feed-button" onClick={() => navigate("/feed")}>All Post</button> </div>
                    <div><button className="feed-button" onClick={() => navigate("/commented-posts")}>Commented Post</button> </div>
                    <div><button className="feed-button " onClick={() => navigate("/replied-posts")}>Replied Post</button></div>
                    <div><button className="feed-button create-post-button active" ><i class="fa-solid fa-circle-plus"></i> &nbsp; Create Post</button></div>
                </div>

                <div className="content-container">
                    <h2>Create Post</h2>
                    <form action="" method="post">
                        <div className="new-input-div"><input type="text" name="post-title" id="post-title" className="input-box new-post-input " placeholder="Post Title" required /></div>
                        <div className="new-input-div"><textarea className="input-box new-post-input" name="post-description" id="post-description" cols="30" rows="5" placeholder="Describe your post..." required></textarea></div>
                        <div className="new-input-div post-submit-button-container"><button type="submit" className="input-box new-post-input post-submit-button">Post Submit</button></div>
                    </form>
                </div>
                
            </div>
    </main>



    </div>


}

export default NewPost;