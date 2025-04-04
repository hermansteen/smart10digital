import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

export default function GlobalEffects() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [explosion, setExplosion] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleExplode = () => {
      setExplosion({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });
      setTimeout(() => setExplosion(null), 1000);
    };

    const handleConfetti = () => {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    };

    window.addEventListener('explode', handleExplode);
    window.addEventListener('confetti', handleConfetti);

    return () => {
      window.removeEventListener('explode', handleExplode);
      window.removeEventListener('confetti', handleConfetti);
    };
  }, []);

  return (
    <>
      {showConfetti && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={2}
        />
      )}
      {explosion && (
        <div
          className="fixed -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full pointer-events-none"
          style={{
            left: explosion.x,
            top: explosion.y,
            animation: 'explosion 1s ease-out forwards'
          }}
        />
      )}
    </>
  );
} 