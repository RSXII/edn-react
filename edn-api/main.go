package main

import (
	"ednAPI/config"
	"ednAPI/database"
	"ednAPI/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	config.LoadEnvironmentVariables()

	database.InitDB()

	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173", "https://edn-react.vercel.app"}
	config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Authorization", "Content-Type"}

	r.Use(cors.New(config))

	routes.InitializeRoutes(r, database.NewStatementRepository(database.DB))

	r.Run(":8080")

}
