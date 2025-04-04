import { useState } from 'react';
import { useTeams } from '../context/TeamsContext';
import { useRouter } from 'next/navigation';

export default function TeamSetup() {
  const [teamName, setTeamName] = useState('');
  const { teams, addTeam, resetTeams } = useTeams();
  const router = useRouter();

  const handleAddTeam = (e: React.FormEvent) => {
    e.preventDefault();
    if (teamName.trim()) {
      addTeam(teamName.trim());
      setTeamName('');
    }
  };

  const handleStartGame = () => {
    if (teams.length >= 2) {
      router.push('/game');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Team Setup</h1>
      
      <form onSubmit={handleAddTeam} className="mb-8">
        <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter team name"
          className="px-4 py-2 border rounded-l-lg focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-r-lg"
        >
          Add Team
        </button>
      </form>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Teams:</h2>
        <ul className="space-y-2">
          {teams.map((team, index) => (
            <li key={index} className="text-lg">{team.name}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleStartGame}
          disabled={teams.length < 2}
          className="px-6 py-3 bg-black text-white rounded-full disabled:opacity-50
            disabled:cursor-not-allowed hover:scale-105 transition-transform"
        >
          Start Game
        </button>

        {teams.length > 0 && (
          <button
            onClick={resetTeams}
            className="px-6 py-3 bg-red-500 text-white rounded-full
              hover:bg-red-600 hover:scale-105 transition-transform"
          >
            Reset Teams
          </button>
        )}
      </div>
    </div>
  );
} 