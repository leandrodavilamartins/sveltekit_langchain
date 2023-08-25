import { OpenAI } from 'langchain/llms/openai';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { PUBLIC_OPENAI_KEY } from '$env/static/public';

const llm = new OpenAI({ openAIApiKey: PUBLIC_OPENAI_KEY });
const chat = new ChatOpenAI({ openAIApiKey: PUBLIC_OPENAI_KEY });

export { llm, chat };
