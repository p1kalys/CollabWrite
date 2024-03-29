import React from "react";
import "../components/Navbar.css";
const Navbar = () => {
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
          <button className="buttn" onClick={shareLink}>
            Share
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
