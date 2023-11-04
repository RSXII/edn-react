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
	rows, err := r.DB.Query("SELECT * FROM list_statement_items")
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	var listStatements []*models.ListStatementItem
	
	for rows.Next() {
		var listStatement models.ListStatementItem
		err := rows.Scan(&listStatement.Id, &listStatement.Title, &listStatement.List)
		if err != nil {
			panic(err)
		}

		listStatements = append(listStatements, &listStatement)
		
	}

	return listStatements

}