import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported in this browser");
    }
  };

  return (
    <div>
      <nav>
        <div className="top">
          <p> CollabWrite </p>
          <div>
          <button className="buttn" onClick={() => navigate('/')}>New doc</button>
          <button className="buttn" onClick={shareLink}>
            Share
          </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
