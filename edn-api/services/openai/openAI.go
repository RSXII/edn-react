package openai

import (
	"bytes"
	"encoding/json"
	"io"
	"net/http"
)

type Client struct {
	apiKey       string
	organization string
}

// NewClient creates a new client
func NewClient(apiKey, organization string) *Client {
	return &Client{
		apiKey:       apiKey,
		organization: organization,
	}
}

func (c *Client) makeRequest(method, url string, input any) ([]byte, error) {
	var body io.Reader

	if input != nil && method == http.MethodPost {
		rJson, err := json.Marshal(input)
		if err != nil {
			return nil, err
		}
		body = bytes.NewReader(rJson)
	}

	req, err := http.NewRequest(method, url, body)
	if err != nil {
		return nil, err
	}

	req.Header.Add("Authorization", "Bearer "+c.apiKey)
	req.Header.Add("Content-Type", "application/json")
	if c.organization != "" {
		req.Header.Add("OpenAI-Organization", c.organization)
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	return io.ReadAll(resp.Body)
}

// Post makes a post request
func (c *Client) Post(url string, input any) ([]byte, error) {
	return c.makeRequest(http.MethodPost, url, input)
}

// Get makes a get request
func (c *Client) Get(url string) ([]byte, error) {
	return c.makeRequest(http.MethodGet, url, nil)
}
