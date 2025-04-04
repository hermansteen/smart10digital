import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface Team {
  name: string;
  score: number;
}

interface TeamsContextType {
  teams: Team[];
  addTeam: (name: string) => void;
  updateScore: (index: number, delta: number) => void;
  resetTeams: () => void;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

export function TeamsProvider({ children }: { children: ReactNode }) {
  const [teams, setTeams] = useState<Team[]>([]);

  // Load teams from localStorage on mount
  useEffect(() => {
    const savedTeams = localStorage.getItem('teams');
    if (savedTeams) {
      setTeams(JSON.parse(savedTeams));
    }
  }, []);

  // Save teams to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
  }, [teams]);

  const addTeam = (name: string) => {
    setTeams(prev => [...prev, { name, score: 0 }]);
  };

  const updateScore = (index: number, delta: number) => {
    setTeams(prev => prev.map((team, i) => 
      i === index ? { ...team, score: team.score + delta } : team
    ));
  };

  const resetTeams = () => {
    setTeams([]);
    localStorage.removeItem('teams');
  };

  return (
    <TeamsContext.Provider value={{ teams, addTeam, updateScore, resetTeams }}>
      {children}
    </TeamsContext.Provider>
  );
}

export function useTeams() {
  const context = useContext(TeamsContext);
  if (context === undefined) {
    throw new Error('useTeams must be used within a TeamsProvider');
  }
  return context;
} 