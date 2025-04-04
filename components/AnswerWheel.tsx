interface Answer {
  title: string;
  answer: boolean | string | number;
}

interface AnswerWheelProps {
  answers: Answer[];
  selectedAnswers: number[];
  onAnswerClick: (index: number) => void;
}

export default function AnswerWheel({ answers, selectedAnswers, onAnswerClick }: AnswerWheelProps) {
  const totalAnswers = answers.length;

  const getRingColor = (answers: Answer[]): string => {
    const firstAnswer = answers[0].answer;
    if (typeof firstAnswer === 'boolean') return 'border-red-500';
    if (typeof firstAnswer === 'number') return 'border-yellow-500';
    return 'border-blue-500';
  };

  return (
    <div className="relative w-[600px] h-[600px]">
      {/* Colored ring */}
      <div className={`absolute inset-0 rounded-full border-4 ${getRingColor(answers)} 
        w-[550px] h-[550px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`} />
      
      <ul className="relative w-[600px] h-[600px] m-0 p-0 list-none">
        {answers.map((answer, index) => {
          const angle = +(((index * (360 / totalAnswers)) * (Math.PI / 180))).toFixed(3);
          const radius = 375;
          const left = radius * Math.cos(angle) + 300;
          const top = radius * Math.sin(angle) + 300;

          return (
            <li 
              key={index} 
              onClick={() => onAnswerClick(index)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer 
                p-6 rounded-full shadow-md hover:scale-110 
                transition-all duration-200 ease-in-out w-40 h-40 break-words drop-shadow-lg
                flex flex-col items-center justify-center text-center text-2xl
                ${selectedAnswers.includes(index) 
                  ? 'bg-white text-black shadow-lg' 
                  : 'bg-black text-white'
                }`}
              style={{ 
                left: `${left}px`,
                top: `${top}px`,
              }}
            >
              <span>{answer.title}</span>
              {selectedAnswers.includes(index) && (
                <span className="mt-1">
                  {typeof answer.answer === 'boolean' ? (
                    answer.answer ? (
                      <span className="text-green-600 font-bold text-xl">✓</span>
                    ) : (
                      <span className="text-red-600 font-bold text-xl">✗</span>
                    )
                  ) : (
                    <span className="text-gray-700 font-semibold text-lg">{answer.answer}</span>
                  )}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}