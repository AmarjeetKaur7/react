// eslint-disable-next-line no-unused-vars
import React from "react";
import "./UserProfileCard.css";
// eslint-disable-next-line no-unused-vars
import profile_icon from "../Assets/elon.jpg";

const UserProfileCard = () => {
    return (
        <>
            <div className="upc">
                <div className="gradiant">
                </div>
                <div className="profile-down">
                    <img src={profile_icon}></img>
                    <div className="profile-title">
                        Elon Musk
                    </div>
                    <div className="profile-description">
                        lorem ipsum dolor sit amet, consectetur adip occum sociosqu ad minim
                        veniam
                    </div>
                    <div className="profile-button">
                        <a href="mailto:elon@musk.com">Contact Me</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileCard;
