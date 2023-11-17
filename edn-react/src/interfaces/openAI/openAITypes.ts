interface Message {
  role: string;
  content: string;
}

interface ChoiceMessage {
  role: string;
  content: string;
}

interface Choices {
  message: ChoiceMessage;
  text: string;
  index: number;
  logprobs: unknown;
  finish_reason: string;
}

interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface Error {
  code: number;
  message: string;
  type: string;
  param: string;
}

export interface CreateCompletionsRequest {
  model: string;
  message: Message[];
  propmts: string[];
  suffix: string;
  max_tokens: number;
  temperature: number;
  top_p: number;
  n: number;
  stream: boolean;
  logprobs: number;
  echo: boolean;
  stop: string[];
  presence_penalty: number;
  frequency_penalty: number;
  best_of: number;
  logit_bias: { [key: string]: string };
  user: string;
}

export interface CreateCompletionsResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choices[];
  usage: Usage;
  error: Error;
}
