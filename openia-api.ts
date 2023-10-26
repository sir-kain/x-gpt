import OpenAI from 'openai';

const configuration = new OpenAI({
  apiKey: Bun.env.OPENIA_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai