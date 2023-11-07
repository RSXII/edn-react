package database

import (
	"database/sql"
	"ednAPI/config"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func InitDB() {

    config.LoadEnvironmentVariables()

    db, err := sql.Open("mysql", os.Getenv("DSN"))

    if err != nil {
        
        fmt.Printf("failed to connect: %v", err)
    }

    DB = db
}