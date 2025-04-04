import { useTeams } from '../context/TeamsContext';
import TeamScore from '@/app/components/TeamScore';

export default function Scoreboard() {
  const { teams, updateScore } = useTeams();

  return (
    <div className="absolute right-10 top-10 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Scoreboard</h2>
      <div className="space-y-4">
        {teams.map((team, index) => (
          <TeamScore
            key={index}
            teamName={team.name}
            score={team.score}
            onScoreSubmit={(delta: number) => updateScore(index, delta)}
          />
        ))}
      </div>
    </div>
  );
} 