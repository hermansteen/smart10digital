interface QuestionNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget;
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;
  
  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${event.clientX - rect.left - radius}px`;
  ripple.style.top = `${event.clientY - rect.top - radius}px`;
  ripple.className = "ripple";
  
  button.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
};

export default function QuestionNavigation({ 
  currentIndex, 
  totalQuestions, 
  onPrevious, 
  onNext 
}: QuestionNavigationProps) {
  return (
    <div className="absolute top-10 flex gap-4">
      <button 
        onClick={(e) => {
          createRipple(e);
          onPrevious();
        }}
        disabled={currentIndex === 0}
        className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-full 
          disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 
          transition-transform active:scale-150"
      >
        Previous
      </button>
      <button 
        onClick={(e) => {
          createRipple(e);
          onNext();
        }}
        disabled={currentIndex === totalQuestions - 1}
        className="relative overflow-hidden px-6 py-2 bg-black text-white rounded-full 
          disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 
          transition-transform active:scale-150"
      >
        Next
      </button>
    </div>
  );
}