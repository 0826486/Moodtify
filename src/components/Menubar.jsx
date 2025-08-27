import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Menubar() {
  return (
    <div className="menubar">
      <h1 className="menubar-title">Moodtify</h1>

      <nav className="menu">
        <ul>
          <li><Link to="/search">노래 찾기</Link></li>
          <li><Link to="/playlist">마이뮤직</Link></li>
          <li><Link to="/favorites">즐겨찾기</Link></li>
          <li><Link to="/join">회원가입</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menubar;