import { Runs } from "./Runs";

export const Score = ({ handleScore, score, handleExtraRun }) => {
  return (
    <div>
      <h1>Score:{score}</h1>
      <Runs handleScore={handleScore} handleExtraRun={handleExtraRun} />
    </div>
  );
};
