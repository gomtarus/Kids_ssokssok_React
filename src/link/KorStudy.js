import { useState } from "react";
import styles from "../css/KorStudy.module.css";

function KorStudy() {
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
  const [quizImg, setImg] = useState("Q-1");
  const [quizCount, setCount] = useState(0);

  const quiz_animal = [
    { answer: "뱀", img: "Q-1" },
    { answer: "비둘기", img: "Q-2" },
    { answer: "고슴도치", img: "Q-3" },
    { answer: "토끼", img: "Q-4" },
    { answer: "팬더", img: "Q-5" },
  ]; // 동물 퀴즈 배열

  const quiz_exercise = [
    { answer: "레슬링", img: "Q-6" },
    { answer: "달리기", img: "Q-7" },
    { answer: "스케이트", img: "Q-8" },
    { answer: "테니스", img: "Q-9" },
    { answer: "럭비", img: "Q-10" },
  ]; // 운동 퀴즈 배열

  function quiz_startBtn() {
    if (quizType === "quiz_0") {
      setImg(quiz_animal[0].img);
      setCount(0);
    } else {
      setImg(quiz_exercise[0].img);
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
          //동물 퀴즈
          temp = quiz_animal[quizStage].answer;
        } else {
          //운동 퀴즈
          temp = quiz_exercise[quizStage].answer;
        }
        if (temp === answer) {
          if (quizStage < 4) {
            setStage(quizStage + 1);
            if (quizCount === 0) {
              setImg(quiz_animal[quizStage + 1].img);
            } else {
              setImg(quiz_exercise[quizStage + 1].img);
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
          src={require("../img/KorStudy/Quiz-1.png")}
          alt="동물퀴즈"
          style={{ top: "38%" }}
          onClick={startBtn}
        />
        {/*동물퀴즈*/}
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
          src={require("../img/KorStudy/Quiz-2.png")}
          alt="운동퀴즈"
          style={{ top: "36%" }}
          onClick={startBtn_1}
        />
        {/*운동퀴즈*/}
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
          <img
            src={require(`../img/Quiz/${quizImg}.png`)}
            alt="퀴즈이미지"
          ></img>
        </div>
        {/*퀴즈 이미지*/}
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

export default KorStudy;
