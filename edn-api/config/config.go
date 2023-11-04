package config

import (
	"os"

	"github.com/joho/godotenv"
)

func LoadEnvironmentVariables() {
	environment := os.Getenv("ENVIRONMENT")

	if environment != "production" {
		err := godotenv.Load()
		if err != nil {
			panic("failed to load env")
		}
	}
}