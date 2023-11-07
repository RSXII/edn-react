package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
)

func LoadEnvironmentVariables() {
	environment := os.Getenv("ENVIRONMENT")

	if environment != "production" {

		err := godotenv.Load()

		if err != nil {
			
			fmt.Printf("Error loading .env file")
		}
	}
}