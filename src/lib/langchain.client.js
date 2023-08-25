import { OpenAI } from 'langchain/llms/openai';
import { PUBLIC_API_KEY } from '$env/static/public';

const llm = new OpenAI({ openAIApiKey: PUBLIC_API_KEY });

export { llm };
