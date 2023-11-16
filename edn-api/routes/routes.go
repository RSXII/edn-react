package routes

import (
	"ednAPI/auth"
	"ednAPI/database"
	"ednAPI/handlers"

	"github.com/gin-gonic/gin"
)

func InitializeRoutes(r *gin.Engine, db *database.StatementRepository) {

	api := r.Group("/api") 
	{
		api.GET("/getListStatement/:id", handlers.GetListStatementById(db))
		api.GET("/getAllListStatements", handlers.GetAllListStatements(db))
		api.GET("/getAllImageStatements", handlers.GetAllImageStatements(db))
		
	}
	protected := r.Group("/api", auth.AuthenticateWithClerk())
	{
		protected.GET("/testOpenAI", handlers.TestOpenAI())
	}
}