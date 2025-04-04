import { useState } from 'react';

interface TeamScoreProps {
  teamName: string;
  score: number;
  onScoreSubmit: (delta: number) => void;
}

const TeamScore = ({ teamName, score, onScoreSubmit }: TeamScoreProps) => {
  const [tempScore, setTempScore] = useState(0);

  const handleIncrement = () => setTempScore(prev => prev + 1);
  const handleDecrement = () => setTempScore(prev => prev - 1);
  
  const handleApply = () => {
    if (tempScore !== 0) {
      window.dispatchEvent(new Event('confetti'));
      onScoreSubmit(tempScore);
      setTempScore(0);
    }
  };

  const handleDestroy = () => {
    window.dispatchEvent(new Event('explode'));
    setTempScore(0);
  };

  return (
    <div className="flex items-center gap-4 p-2 bg-white/5 rounded-lg">
      <span className="min-w-[100px]">{teamName}</span>
      <span className="font-bold min-w-[30px]">{score}</span>
      
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          <button
            onClick={handleDecrement}
            className="w-8 h-8 bg-black text-white rounded-full"
          >
            -
          </button>
          <span className={`min-w-[30px] text-center ${tempScore !== 0 ? 'text-blue-500' : ''}`}>
            {tempScore > 0 ? `+${tempScore}` : tempScore}
          </span>
          <button
            onClick={handleIncrement}
            className="w-8 h-8 bg-black text-white rounded-full"
          >
            +
          </button>
        </div>
        
        <button
          onClick={handleApply}
          disabled={tempScore === 0}
          className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full 
            disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          title="Apply score"
        >
          ⭐
        </button>

        <button
          onClick={handleDestroy}
          disabled={tempScore === 0}
          className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full 
            disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 transition-colors"
          title="Reset temporary score"
        >
          💥
        </button>
      </div>
    </div>
  );
} 

export default TeamScore;