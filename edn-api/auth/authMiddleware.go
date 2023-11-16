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
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		apiKey := os.Getenv("CLERK_API_KEY")

		client, err := clerk.NewClient(apiKey)
		if err != nil {
			fmt.Println(err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
			c.Abort()
			return
		}

		// Splitting the header to extract the session ID and token
		parts := strings.Split(authHeader, " ")
		if len(parts) != 3 || parts[0] != "Bearer" {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "invalid authorization header format"})
			c.Abort()
			return
		}

		sessionID := parts[1]
		bearerToken := parts[2]

		fmt.Println(sessionID)
		fmt.Println(bearerToken)

		session, err := client.Sessions().Verify(sessionID, bearerToken)
		if err != nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
			c.Abort()
			return
		}

		c.Set("session", session)

		c.Next()
	}
}
