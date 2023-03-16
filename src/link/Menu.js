import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import "../css/Menu.css";
import "../css/Common.css";

import Logo from "../img/menu/Logo.png";

const NavStyle = styled(NavLink)`
  color: rgb(160, 160, 160);
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    color: #4dc4ff;
  }
  &.active {
    color: #4dc4ff;
  }
  &.active::after {
    content: "";
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;
    position: absolute;
    background-color: #4dc4ff;
  }
`;

function Menu() {
  return (
    <div className="menu_wrap">
      <div className="header_wrap">
        <div className="header">
          <NavLink to="/">
            <img src={Logo} className="logo" alt="로고" />
          </NavLink>
          <div className="menu_wrap">
            <ul className="menu_ul">
              <li className="menu_li">
                <NavStyle to="/">홈</NavStyle>
              </li>
              <li className="menu_li">
                <NavStyle to="/artstudy">쓱쓱그리기</NavStyle>
              </li>
              <li className="menu_li">
                <NavStyle to="/korstudy">한글퀴즈</NavStyle>
              </li>
              <li className="menu_li">
                <NavStyle to="/engstudy">영어퀴즈</NavStyle>
              </li>
              <li className="menu_li">
                <NavStyle to="/mathstudy">수학퀴즈</NavStyle>
              </li>
            </ul>
          </div>
          <div style={{ width: "160px" }}></div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
