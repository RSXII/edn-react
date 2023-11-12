package openai

// Message represents a single message in the conversation.
type Message struct {
	Role    string `json:"role,omitempty"`
	Content string `json:"content,omitempty"`
}

// CreateCompletionsRequest defines the request structure for creating completions.
type CreateCompletionsRequest struct {
	Model            string            `json:"model,omitempty"`
	Messages         []Message         `json:"messages,omitempty"`
	Prompt           []string          `json:"prompt,omitempty"`
	Suffix           string            `json:"suffix,omitempty"`
	MaxTokens        int               `json:"max_tokens,omitempty"`
	Temperature      float64           `json:"temperature,omitempty"`
	TopP             float64           `json:"top_p,omitempty"`
	N                int               `json:"n,omitempty"`
	Stream           bool              `json:"stream,omitempty"`
	LogProbs         int               `json:"logprobs,omitempty"`
	Echo             bool              `json:"echo,omitempty"`
	Stop             []string          `json:"stop,omitempty"`
	PresencePenalty  float64           `json:"presence_penalty,omitempty"`
	FrequencyPenalty float64           `json:"frequency_penalty,omitempty"`
	BestOf           int               `json:"best_of,omitempty"`
	LogitBias        map[string]string `json:"logit_bias,omitempty"`
	User             string            `json:"user,omitempty"`
}

type ChoiceMessage struct {
	Role    string `json:"role,omitempty"`
	Content string `json:"content,omitempty"`
}

type Choices struct {
	Message      ChoiceMessage `json:"message"`
	Text         string        `json:"text,omitempty"`
	Index        int           `json:"index,omitempty"`
	Logprobs     interface{}   `json:"logprobs,omitempty"`
	FinishReason string        `json:"finish_reason,omitempty"`
}

type Usage struct {
	PromptTokens     int `json:"prompt_tokens,omitempty"`
	CompletionTokens int `json:"completion_tokens,omitempty"`
	TotalTokens      int `json:"total_tokens,omitempty"`
}

// CreateCompletionsResponse defines the response structure for completion requests.
type CreateCompletionsResponse struct {
	ID      string    `json:"id,omitempty"`
	Object  string    `json:"object,omitempty"`
	Created int       `json:"created,omitempty"`
	Model   string    `json:"model,omitempty"`
	Choices []Choices `json:"choices,omitempty"`
	Usage   Usage     `json:"usage,omitempty"`
	Error   *Error    `json:"error,omitempty"`
}

// Error defines the standard error response from the API.
type Error struct {
	Message string      `json:"message,omitempty"`
	Type    string      `json:"type,omitempty"`
	Param   interface{} `json:"param,omitempty"`
	Code    interface{} `json:"code,omitempty"`
}
