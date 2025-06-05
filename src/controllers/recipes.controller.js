import getRecipeResponse from '../services/openai.service.js';

export const questionRecipe = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        error: 'A question is required',
      });
    }

    const response = await getRecipeResponse(question);
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Error processing your question. Please try again.',
    });
  }
};
