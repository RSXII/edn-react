package database

import (
	"database/sql"
	"ednAPI/models"
)

type StatementRepository struct {
	DB *sql.DB
}

func NewStatementRepository(db *sql.DB) *StatementRepository {
	return &StatementRepository{
		DB: db,
	}
}

func (r *StatementRepository) GetListStatements() ([]*models.ListStatementItem) {
	
}