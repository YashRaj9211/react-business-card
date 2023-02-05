import '../App.css';
import ProfileImage from '../images/profilePic.png';

function UserInfo() {
    return (

        <div className="UserInfo">
            <div className="UserImg"> <img src={ProfileImage} alt="Image" /> </div>
            <div className="UserName">Your Name</div>
            <div className="Role">Front End Developer</div>
            <div className="UserWeb">yourwebsite.website</div>
        </div>
    )
}

export default UserInfo;


