package handlers

import (
	"ednAPI/database"

	"github.com/gin-gonic/gin"
)

func GetListStatementById(db *database.StatementRepository) gin.HandlerFunc {

	return func(c *gin.Context) {
		id := c.Param("id")

		listStatements, error := db.GetListStatementById(id)

		if error != nil {
			panic(error)
		}

		c.JSON(200, listStatements)
	}
}

func GetAllListStatements(db *database.StatementRepository) gin.HandlerFunc {
	
	return func(c *gin.Context) {

		listStatements, error := db.GetAllListStatements()

		if error != nil {
			panic(error)
		}

		c.JSON(200, listStatements)
	}
}