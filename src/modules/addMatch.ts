import { firestore } from '../config/firebase';
import { Match } from '../interfaces/match.interface';

// Serviço para adicionar uma nova partida
export const addMatch = async (match: Match): Promise<Match> => {
  const matchRef = await firestore.collection('matches').add(match);
  const newMatch = { id: matchRef.id, ...match }; // Inclui o id gerado pelo Firestore
  return newMatch;
};
