import { useEffect, useRef, useState } from "react";

import "../css/ArtStudy.css";

function ArtStudy() {
  const [panelTop, setPanelTop] = useState(110);
  const [artRight, setArtRight] = useState(50);
  const [artPanelRight, setArtPanelRight] = useState(-150);

  function burshPanel() {
    setPanelTop(panelTop === "65" ? "110" : "65");
  } //브러쉬 패널

  function artPanel() {
    setArtRight(artRight === "-150" ? "50" : "-150");
    if (artRight === 50) {
      setArtPanelRight(artPanelRight === "50" ? "-150" : "50");
    } else {
      setArtPanelRight(artPanelRight === "50" ? "-150" : "50");
    }
  } //그림선택 패널

  // 패널 이동
  //------------------------------------------
  const art_arr = ["당근", "물고기", "뽀로로", "잠자리"];
  const [canvas_img, setCanvas] = useState(0);

  const art_btn = (e) => {
    let num = Number(e.target.id) + 1;
    setCanvas(num);
  }; // 그림 선택

  const art_list = art_arr.map(function (name, idx) {
    return (
      <li key={idx}>
        <img
          id={idx}
          src={require(`../img/ArtStudy/${name}.png`)}
          alt={`그림_${idx}번`}
          onClick={art_btn}
        ></img>
      </li>
    );
  }); // 그림 생성

  // 그림 선택 패널
  //------------------------------------------
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  const [painting, setPainting] = useState(false);

  const [size, setSize] = useState(1); // 브러쉬 사이즈
  const [color, setColor] = useState("#000000"); // 브러쉬 색

  const [clear, setClear] = useState(0); // 삭제 카운트

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 1424;
    canvas.height = 746;
    ctx.lineJoin = "round";
    setGetCtx(ctx);
  }, [clear]);
  //clear의 값이 변하면 캔버스 초기화

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = size;
    ctx.strokeStyle = color;
  });
  //브러쉬, 색 유지

  const drawFn = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;
    if (!painting) {
      getCtx.beginPath();
      getCtx.moveTo(mouseX, mouseY);
    } else {
      getCtx.lineTo(mouseX, mouseY);
      getCtx.stroke();
    }
  };

  // 그림판
  //------------------------------------------
  const color_arr = [
    { color: "#ea1b07", name: "빨강" },
    { color: "#ee911a", name: "주황" },
    { color: "#feed24", name: "노랑" },
    { color: "#0b8b74", name: "초록" },
    { color: "#0696f7", name: "파랑" },
    { color: "#1032ae", name: "남" },
    { color: "#430486", name: "보라" },
    { color: "#ffffff", name: "흰" },
    { color: "#b2b2b2", name: "회" },
    { color: "#000000", name: "검" },
  ]; // 색상 배열

  const Color = (e) => {
    let num = e.target.id;
    setColor(color_arr[num].color);
  }; //색 설정

  const brush = color_arr.map((color, idx) => {
    let border_color = "";
    let text_color = "";

    if (idx !== 7) {
      border_color = "white";
    } else {
      border_color = "rgb(50, 50, 50)";
    }

    if (idx !== 9) {
      text_color = "black";
    } else {
      text_color = "white";
    }

    return (
      <li
        key={idx}
        id={idx}
        style={{
          backgroundColor: `${color.color}`,
          borderColor: `${border_color}`,
          color: `${text_color}`,
        }}
        onClick={Color}
      >
        {color.name}
      </li>
    );
  }); //색상 생성

  // 브러쉬 패널 색 선택
  //------------------------------------------
  const [brushSize, setBrush] = useState(1);

  const brush_range = (e) => {
    setBrush(e.target.value);
    setSize(e.target.value);
  };

  // 브러쉬 크기
  //------------------------------------------

  function clear_btn() {
    if (window.confirm("그림이 전부 지워집니다.")) {
      setCanvas(0);
      setClear(clear ? 0 : 1);
    }
  }

  // 초기화, 지우개 버튼
  //------------------------------------------

  return (
    <div className="art_main_wrap">
      <div className="temp_canvas">
        <img
          src={require(`../img/ArtStudy/${canvas_img}.png`)}
          alt={`그림_${canvas_img}`}
        ></img>
      </div>
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseDown={() => setPainting(true)}
        onMouseUp={() => setPainting(false)}
        onMouseMove={(e) => drawFn(e)}
        onMouseLeave={() => setPainting(false)}
      ></canvas>
      {/*캔버스*/}
      <img
        src={require("../img/ArtStudy/choiceArt.png")}
        className="artBtn"
        onClick={artPanel}
        style={{ right: `${artRight}px` }}
        alt="그림선택버튼"
      />
      <div className="artPanel" style={{ right: `${artPanelRight}px` }}>
        <img
          src={require("../img/ArtStudy/Close.png")}
          id="art_paenl_close"
          alt="닫기"
          onClick={artPanel}
        />
        <ul>
          {art_list}
          <div className="art_resetBtn" onClick={() => setCanvas(0)}>
            <p>그림 지우기</p>
          </div>
        </ul>
      </div>
      {/*그림선택*/}
      <img
        src={require("../img/ArtStudy/Pen.png")}
        alt="연필"
        className="pencel"
        onClick={burshPanel}
      />
      <div className="pencel_panel" style={{ top: `${panelTop}%` }}>
        <div className="pencel_panel_top_wrap">
          <p>붓 크기</p>
          <input
            id="brush_size"
            type="range"
            min="1"
            max="100"
            value={brushSize}
            step="1"
            onChange={brush_range}
          />
          <p id="brush_size">{brushSize}</p>
          <p id="canvas_reset" onClick={clear_btn}>
            모두 지우기
          </p>
          <img
            src={require("../img/ArtStudy/Close.png")}
            id="canvas_close"
            alt="닫기"
            onClick={burshPanel}
          />
        </div>
        <div className="pencel_panel_bottom_wrap">
          <ul id="color_ul">{brush}</ul>
        </div>
      </div>
      {/*연필*/}
      <img
        src={require("../img/ArtStudy/Eraser.png")}
        alt="지우개"
        className="eraser"
        onClick={() => setColor("#FFFFFF")}
      />
      {/*지우개*/}
    </div>
  );
}

export default ArtStudy;
