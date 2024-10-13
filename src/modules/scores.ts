import { firestore } from '../config/firebase';
import { Match } from '../interfaces/match.interface';

// Referência à coleção de partidas
const matchCollection = firestore.collection('matches');

// Serviço para obter todas as partidas
export const getAllMatches = async (): Promise<Match[]> => {
  try {
    const snapshot = await matchCollection.get();
    const matches = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Match[];
    return matches;
  } catch (error) {
    console.error('Error getting matches:', error);
    throw new Error('Unable to fetch matches');
  }
};

