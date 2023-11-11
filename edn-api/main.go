package main

import (
	"ednAPI/database"
	"ednAPI/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
    
    database.InitDB()

    r := gin.Default()

    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:5173", "https://edn-react.vercel.app/"}
    config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}

    r.Use(cors.New(config))

    routes.InitializeRoutes(r, database.NewStatementRepository(database.DB))

    r.Run(":8080")

}