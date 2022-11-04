export const Balls = ({ handleBall, totalBalls, balls, overs, handleOver }) => {
  return (
    <div>
      <h1>Total Balls:{totalBalls}</h1>
      <h1>Balls:{balls}</h1>
      <h1>
        Overs:{overs}.{balls}
      </h1>
      {/* <button onClick={() => handleBall(1)}>Add Ball</button> */}
    </div>
  );
};
