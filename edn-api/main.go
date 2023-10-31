package main

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

func main() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("failed to load env", err)
    }

    db, err := sql.Open("mysql", os.Getenv("DSN"))
    if err != nil {
        log.Fatalf("failed to connect: %v", err)
    }

    rows, err := db.Query("SHOW TABLES")
    if err != nil {
        log.Fatalf("failed to query: %v", err)
    }
    defer rows.Close()

    var tableName string
    for rows.Next() {
        if err := rows.Scan(&tableName); err != nil {
            log.Fatalf("failed to scan row: %v", err)
        }
        log.Println(tableName)
    }

    defer db.Close()
}
