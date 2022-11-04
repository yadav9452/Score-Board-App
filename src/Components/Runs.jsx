export const Runs = ({ handleScore, handleExtraRun }) => {
  return (
    <div>
      <button onClick={() => handleScore(1)}>1 Run</button>
      <button onClick={() => handleScore(2)}>2 Runs</button>
      <button onClick={() => handleScore(3)}>3 Runs</button>
      <button onClick={() => handleScore(4)}>4 Runs</button>
      <button onClick={() => handleScore(6)}>6 Runs</button>
      <button onClick={() => handleExtraRun(1)}>Wide Runs</button>
      <button onClick={() => handleExtraRun(1)}>No-Ball Runs</button>
    </div>
  );
};
