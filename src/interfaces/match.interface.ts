export interface Match {
    id?: string; // Pode ser opcional se você não definir um id antes de salvá-lo
    team1: { name: string; points: number };
    team2: { name: string; points: number };
    date: Date;
  }
  