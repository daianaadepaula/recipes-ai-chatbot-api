import express from 'express';
import recipesRoutes from './routes/recipes.route.js';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'https://recipe-ai-chatbot.netlify.app/',
    credentials: true,
  }),
);

app.use(express.json());

app.use('/api/recipes', recipesRoutes);

export default app;
