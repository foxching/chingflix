import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <span
      role="img"
      arial-label="emoji"
      aria-labelledby="logo"
      onClick={() => window.scroll(0, 0)}
      className="header"
    >
      🎬 Ching Flix 🎥
    </span>
  );
};

export default Header;
