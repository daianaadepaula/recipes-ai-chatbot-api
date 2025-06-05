import express from 'express';
import { questionRecipe } from '../controllers/recipes.controller.js';

const router = express.Router();

router.post('/question', questionRecipe);

// ✅ Rota GET raiz (opcional, para evitar erro "Cannot GET /")
router.get('/', (req, res) => {
  res.send('API de receitas rodando!');
});

export default router;
