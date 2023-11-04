package handlers

import (
	"ednAPI/database"

	"github.com/gin-gonic/gin"
)

func GetListItems(db *database.StatementRepository) gin.HandlerFunc {

	return func(c *gin.Context) {

		listStatements := db.GetListStatements()
		
		c.JSON(200, listStatements)
	}
}