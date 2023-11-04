package routes

import (
	"ednAPI/database"
	"ednAPI/handlers"

	"github.com/gin-gonic/gin"
)

func InitializeRoutes(r *gin.Engine, db *database.StatementRepository) {
	api := r.Group("/api") 
	{
		api.GET("/list", handlers.GetListItems(db))	
	}
}