import { useState } from "react";
import styles from "../css/MathStudy.module.css";

function MathStudy() {
  const [btnTop, setTop] = useState(105);
  const [btnTop1, setTop1] = useState(105);

  const [quizType, setType] = useState("");

  const startBtn = (e) => {
    setType(e.target.id);
    setTop(77);
    setTop1(105);
  };

  const startBtn_1 = (e) => {
    setType(e.target.id);
    setTop1(77);
    setTop(105);
  };

  // 시작 버튼
  //------------------------------------------
  const [formTop, setFormTop] = useState(820);
  const [quizImg, setImg] = useState("");
  const [quizCount, setCount] = useState(0);

  const quiz_pm = [
    { answer: "2", img: "1 + 1" },
    { answer: "8", img: "3 + 5" },
    { answer: "11", img: "9 + 2" },
    { answer: "15", img: "10 + 5" },
    { answer: "16", img: "7 + 9" },
  ]; // 더하기 퀴즈 배열

  const quiz_mul = [
    { answer: "15", img: "3 X 5" },
    { answer: "4", img: "2 X 2" },
    { answer: "36", img: "9 X 4" },
    { answer: "18", img: "6 X 3" },
    { answer: "25", img: "5 X 5" },
  ]; // 곱하기 퀴즈 배열

  function quiz_startBtn() {
    if (quizType === "quiz_0") {
      setImg(quiz_pm[0].img);
      setCount(0);
    } else {
      setImg(quiz_mul[0].img);
      setCount(1);
    }
    setFormTop(0);
  }
  //퀴즈 종류 판별
  const [score, setScore] = useState(0);
  const [life, setLife] = useState(5);
  const [text, setText] = useState("");

  //점수, 목숨, 정답
  const [quizStage, setStage] = useState(0);

  let temp = ""; // 임시 정답
  const quiz_answer = (e) => {
    if (window.event.keyCode === 13) {
      let answer = e.target.value;
      if (answer === "") {
        alert("정답을 입력해주세요.");
      } else {
        if (quizCount === 0) {
          //더하기 퀴즈
          temp = quiz_pm[quizStage].answer;
        } else {
          //곱하기 퀴즈
          temp = quiz_mul[quizStage].answer;
        }
        if (temp === answer) {
          if (quizStage < 4) {
            setStage(quizStage + 1);
            if (quizCount === 0) {
              setImg(quiz_pm[quizStage + 1].img);
            } else {
              setImg(quiz_mul[quizStage + 1].img);
            }
            //이미지 경로
            setScore(score + 100);
            setText("");
          } else {
            setScore(score + 100);
            setTimeout(() => {
              alert("전부 정답입니다~~~ 잘했어요!!!");
              quiz_clear();
            }, 100);
          }
        } else {
          if (life > 1) {
            setLife(life - 1);
            alert("틀렸어요ㅠㅠ 다시풀어보세요!!");
          } else {
            setLife(0);
            alert("게임오버ㅠㅠ 다시풀어보세요...");
            quiz_clear();
          }
        }
      }
    }
  };

  const textHandler = (e) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  //정답

  function quiz_stop() {
    if (window.confirm("그만할까요?")) {
      quiz_clear();
    }
  } //정지 버튼

  function quiz_clear() {
    setFormTop(820);
    setScore(0);
    setLife(5);
    setStage(0);
    setText("");
  } //퀴즈 초기화

  // 퀴즈 화면
  //------------------------------------------

  // 퀴즈 화면
  //------------------------------------------
  return (
    <div className={styles.quiz_main}>
      <div className={styles.quiz_btn_wrap}>
        <img
          id="quiz_0"
          src={require("../img/MathStudy/Quiz-1.png")}
          alt="더하기퀴즈"
          style={{ top: "38%" }}
          onClick={startBtn}
        />
        {/*더하기퀴즈*/}
        <div
          className={styles.quiz_start_btn}
          style={{ top: `${btnTop}%` }}
          onClick={quiz_startBtn}
        >
          <p>시작</p>
        </div>
      </div>
      <div className={styles.quiz_btn_wrap}>
        <img
          id="quiz_1"
          src={require("../img/MathStudy/Quiz-2.png")}
          alt="곱하기퀴즈"
          style={{ top: "38%" }}
          onClick={startBtn_1}
        />
        {/*곱하기퀴즈*/}
        <div
          className={styles.quiz_start_btn}
          style={{ top: `${btnTop1}%` }}
          onClick={quiz_startBtn}
        >
          <p>시작</p>
        </div>
      </div>
      <div className={styles.quiz_form} style={{ top: `${formTop}px` }}>
        <div
          className={styles.state}
          style={{
            left: "122px",
            top: "30px",
          }}
        >
          <p id="score">{score}</p>
        </div>
        <div
          className={styles.state}
          style={{
            left: "730px",
            top: "30px",
          }}
        >
          <p id="life">{life}</p>
        </div>
        {/*상태 창(점수, 목숨)*/}
        <div className={styles.quiz_img}>
          <p>{quizImg}</p>
        </div>
        {/*퀴즈*/}
        <input
          id="answer"
          className={styles.quiz_answer}
          maxLength="8"
          placeholder="정답"
          onKeyUp={quiz_answer}
          onChange={textHandler}
          value={text}
        />
        {/*정답입력*/}
        <div className={styles.quiz_stop} onClick={quiz_stop}></div>
        {/*닫기버튼*/}
      </div>
    </div>
  );
}

export default MathStudy;
