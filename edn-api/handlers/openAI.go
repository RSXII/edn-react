package handlers

import (
	"ednAPI/services/openai"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

// This is an example of a handler that uses the openAI service
// Future endpoints will build on this to create suggestions for users
func TestOpenAI() gin.HandlerFunc {
	apiKey := os.Getenv("OPENAI_API_KEY")
	organization := os.Getenv("OPENAI_ORG")

	client := openai.NewClient(apiKey, organization)

	return func(c *gin.Context) {

		r := openai.CreateCompletionsRequest{
			Model: "gpt-3.5-turbo",
			Messages: []openai.Message{
				{
					Role:    "user",
					Content: "Tell me a joke",
				},
			},
			Temperature: 0.7,
		}

		completions, err := client.CreateCompletions(r)

		if err != nil {
			fmt.Print(err)
		}

		c.JSON(200, completions)
	}
}

type CompletionRequestBody struct {
	Message string `json:"message"`
}

func CompletionRequest() gin.HandlerFunc {
	apiKey := os.Getenv("OPENAI_API_KEY")
	organization := os.Getenv("OPENAI_ORG")

	client := openai.NewClient(apiKey, organization)

	return func(c *gin.Context) {

		var body CompletionRequestBody
		err := c.BindJSON(&body)
		if err != nil {
			fmt.Print(err)
    		c.JSON(http.StatusInternalServerError, gin.H{"error": "error creating completions"})
    		return
		}


		r := openai.CreateCompletionsRequest{
			Model: "gpt-3.5-turbo",
			Messages: []openai.Message{
				{
					Role:    "user",
					Content: body.Message,
				},
			},
			Temperature: 0.7,
		}

		completions, err := client.CreateCompletions(r)

		if err != nil {
			fmt.Print(err)
		}

		c.JSON(200, completions)
	}
}