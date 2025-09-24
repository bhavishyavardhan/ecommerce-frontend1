import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/profile.css';

const Profile = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token
    localStorage.removeItem("user"); // assuming you stored user in localStorage
    navigate("/login");
  };

  if (!user) {
    navigate("/login"); // redirect if not logged in
    return null;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={user.profileImage || "https://via.placeholder.com/150"}
          alt="Profile"
          className="profile-image"
        />
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Profile;
