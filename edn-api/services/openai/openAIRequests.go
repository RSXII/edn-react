package openAI

import (
	"encoding/json"
	"fmt"
)

const COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions"

// CreateCompletionsRaw sends a raw completion request to the OpenAI API.
func (c *Client) CreateCompletionsRaw(r CreateCompletionsRequest) ([]byte, error) {
	return c.Post(COMPLETIONS_URL, r)
}

// CreateCompletions sends a completion request and returns a structured response.
func (c *Client) CreateCompletions(r CreateCompletionsRequest) (CreateCompletionsResponse, error) {
	var response CreateCompletionsResponse

	raw, err := c.CreateCompletionsRaw(r)
	if err != nil {
		return response, err
	}

	err = json.Unmarshal(raw, &response)
	return response, err
}

func (e *Error) Error() string {
	return fmt.Sprintf("%s: %s", e.Code, e.Message)
}
