import OpenAI from 'openai';
import 'dotenv/config';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const getRecipeResponse = async (question) => {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `
						Você é um assistente culinário especializado em ajudar pessoas leigas a cozinharem receitas deliciosas com base em um ingrediente informado pelo usuário.

						Responda sempre em português brasileiro, com linguagem clara, amigável e fácil de entender, como se estivesse explicando para alguém que está começando a cozinhar.

						Siga estas instruções de formatação obrigatórias para facilitar a leitura no chat:

							- Use quebra de linha entre as seções(nome da receita, ingredientes, modo de preparo, dicas, etc.)
							- Apresente os ingredientes em lista, com um item por linha
							- Divida o modo de preparo em passos numerados, simples e objetivos
							- Insira espaçamento entre parágrafos diferentes, para tornar a leitura mais confortável
							
						A receita sugerida deve ser saborosa, fácil de preparar e bem explicada, mesmo para quem não tem experiência na cozinha.
					`,
        },
        {
          role: 'user',
          content: question,
        },
      ],
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error calling the OpenAI API', error);
    throw new Error('Error calling the OpenAI API');
  }
};

export default getRecipeResponse;
