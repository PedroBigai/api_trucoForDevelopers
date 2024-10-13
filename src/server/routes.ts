import { Router } from 'express';
import { getMatches } from '../controllers/getScores';

const router = Router();

// Rota para obter todos dados de partidas
router.get('/matches', getMatches);

// Rota para adicionar partida
router.post('/matches', getMatches);


export default router;
