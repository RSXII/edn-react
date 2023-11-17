package auth

import (
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/clerkinc/clerk-sdk-go/clerk"
	"github.com/gin-gonic/gin"
)

func AuthenticateWithClerk() gin.HandlerFunc {
	apiKey := os.Getenv("CLERK_SECRET_KEY")
	client, err := clerk.NewClient(apiKey)

	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if err != nil {
			fmt.Println(err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
			c.Abort()
			return
		}

		// Splitting the header to extract the session ID and token
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid authorization header format"})
			c.Abort()
			return
		}

		bearerToken := parts[1]

		session, err := client.VerifyToken(bearerToken)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
			c.Abort()
			return
		}

		c.Set("session", session)

		c.Next()
	}
}
