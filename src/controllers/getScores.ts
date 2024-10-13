import { Request, Response } from 'express';
import { getAllMatches } from '../modules/scores';

// Controlador para obter todas as partidas
export const getMatches = async (req: Request, res: Response) => {
    try {
      const matches = await getAllMatches();
      res.status(200).json(matches);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar partidas', error });
    }
  };