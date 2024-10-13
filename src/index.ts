import express, { Application, Request, Response } from 'express';
import userRoutes from './server/routes';

const app: Application = express();
const PORT = 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

app.use('/', userRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
