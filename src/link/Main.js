import { Routes, Route, Link } from "react-router-dom";

import "../css/Common.css";
import "../css/Main.css";

import banner_img from "../img/main/Main.png";

import art_btn from "../img/main/ArtStudy.png";
import eng_btn from "../img/main/EngStudy.png";
import kor_btn from "../img/main/KorStudy.png";
import math_btn from "../img/main/Mathstudy.png";

import ArtStudy from "../link/ArtStudy";
import KorStudy from "../link/KorStudy";
import EngStudy from "../link/EngStudy";
import MathStudy from "../link/MathStudy";

function Main() {
  return (
    <div className="main_wrap">
      <div className="banner_wrap">
        <div className="banner">
          <img src={banner_img} alt="배너"></img>
        </div>
      </div>
      <div className="main_btn_wrap">
        <div className="main_btn_group">
          <Link to="/artstudy">
            <div className="btn">
              <div className="btn_img_box">
                <img src={art_btn} className="btn_img" alt="쓱쓱그리기"></img>
              </div>
              <p className="title">쓱쓱그리기</p>
              <p className="contents">우리한번 그려볼까요?</p>
            </div>
          </Link>
          <Link to="/korstudy">
            <div className="btn">
              <div className="btn_img_box">
                <img src={kor_btn} className="btn_img" alt="한글퀴즈"></img>
              </div>
              <p className="title">한글퀴즈</p>
              <p className="contents">ABCDEFG</p>
            </div>
          </Link>
          <Link to="/engstudy">
            <div className="btn">
              <div className="btn_img_box">
                <img src={eng_btn} className="btn_img" alt="영어퀴즈"></img>
              </div>
              <p className="title">영어퀴즈</p>
              <p className="contents">가나다라마바사</p>
            </div>
          </Link>
          <Link to="/mathstudy">
            <div className="btn">
              <div className="btn_img_box">
                <img src={math_btn} className="btn_img" alt="숫자퀴즈"></img>
              </div>
              <p className="title">숫자퀴즈</p>
              <p className="contents">1 + 1 = ?</p>
            </div>
          </Link>
          <Routes>
            <Route path="/artstudy" element={<ArtStudy />}></Route>
            <Route path="/korstudy" element={<KorStudy />}></Route>
            <Route path="/engstudy" element={<EngStudy />}></Route>
            <Route path="/mathstudy" element={<MathStudy />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
