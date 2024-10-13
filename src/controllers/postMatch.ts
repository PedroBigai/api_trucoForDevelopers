import { Request, Response } from 'express';
import { Match } from '../interfaces/match.interface';
import { addMatch } from '../modules/addMatch';

// Controlador para obter todas as partidas
export const postMatch = async (req: Request, res: Response) => {
    try {
        const match: Match = req.body; // Obtém a partida do corpo da requisição
        const matches = await addMatch(match);

        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar partidas', error });
    }
  };