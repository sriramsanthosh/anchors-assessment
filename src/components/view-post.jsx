import AppIcon from "../images/appIcon.svg";
import { useNavigate } from "react-router-dom";

function ViewPost() {
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
                    <div><button className="feed-button" onClick={() => navigate("/replied-posts")}>Replied Post</button></div>
                    <div><button className="feed-button create-post-button"><i class="fa-solid fa-circle-plus"></i> &nbsp; Create Post</button></div>
                </div>

                <div className="content-container">
                    <h2>All Post (10)</h2>

                    <div className="post-card">
                        <h2>This is Post Title</h2>
                        <p>This is the post description for this topic,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <i>12 Comment &nbsp; &nbsp; 10 Reply</i>
                        <h3>Comments</h3>
                        <p>User1 : This is the First Comment for this post</p>
                        <p>Dhruv : This is the Second Comment for this post</p>
                        
                    </div>
                    
                </div>
                
            </div>
    </main>



    </div>


}

export default ViewPost;