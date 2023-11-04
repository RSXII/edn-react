package main

import (
	"ednAPI/database"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
    database.InitDB()

    r := gin.Default()

    config := cors.DefaultConfig()
    config.AllowOrigins = []string{"http://localhost:4200", "https://www.sarkaz.site"}
    config.AllowMethods = []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}

    r.Use(cors.New(config))

    routes.InitializeRoutes(r, characterRepo)

    r.Run(":8080")


    // err := godotenv.Load()
    // if err != nil {
    //     log.Fatal("failed to load env", err)
    // }

    // db, err := sql.Open("mysql", os.Getenv("DSN"))
    // if err != nil {
    //     log.Fatalf("failed to connect: %v", err)
    // }

    // rows, err := db.Query("SHOW TABLES")
    // if err != nil {
    //     log.Fatalf("failed to query: %v", err)
    // }

    // var tableName string
    // for rows.Next() {
    //     if err := rows.Scan(&tableName); err != nil {
    //         log.Fatalf("failed to scan row: %v", err)
    //     }
    //     log.Println(tableName)
    // }

    // defer db.Close()

    
}