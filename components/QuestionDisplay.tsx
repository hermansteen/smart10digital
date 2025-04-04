interface QuestionDisplayProps {
  questionNumber: number;
  question: string;
}

export default function QuestionDisplay({ questionNumber, question }: QuestionDisplayProps) {
  return (
    <div className="absolute text-center max-w-[500px]">
      <h1 className="text-3xl font-bold mb-4">Question {questionNumber}</h1>
      <p className="text-2xl whitespace-pre-wrap break-words">{question}</p>
    </div>
  );
} 