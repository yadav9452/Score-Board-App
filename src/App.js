import { useState } from "react";
import { Balls } from "./Components/Balls";
import { Reset } from "./Components/Reset";
import { Score } from "./Components/Score";
import "./styles.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [totalBalls, setTotalBalls] = useState(0);

  const handleScore = (pre) => {
    setScore(score + pre);
    setBalls(balls + 1);
    setTotalBalls(totalBalls + 1);
    if (balls === 5) {
      setBalls(0);
      setOvers(overs + 1);
    }
  };
  const handleBall = () => {
    setBalls(balls + 1);
  };
  const handleReset = () => {
    setBalls(0);
    setOvers(0);
    setScore(0);
    setTotalBalls(0);
  };
  const handleExtraRun = () => {
    setScore(score + 1);
  };
  return (
    <div className="App">
      <h1 style={{ color: "Green" }}>CRICKET MATCH </h1>
      <h1 style={{ color: "red" }}>SCORE-BOARD </h1>
      <Balls
        handleBall={handleBall}
        balls={balls}
        totalBalls={totalBalls}
        overs={overs}
      />
      <Score
        handleScore={handleScore}
        handleExtraRun={handleExtraRun}
        score={score}
        balls={balls}
      />
      <br /> <Reset handleReset={handleReset} />
    </div>
  );
}
