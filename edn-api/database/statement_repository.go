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



func (r *StatementRepository) GetListStatementById(id string) (models.ListStatement, error) {

	queryString := `SELECT ls.id 
	AS list_statements_id, ls.title, lsi.value 
	FROM list_statements ls 
	LEFT JOIN list_statement_items lsi 
	ON ls.id = lsi.list_statement_id 
	WHERE ls.id = ?;`

	stmt, err := r.DB.Prepare(queryString)

	if err != nil {
		panic(err)
	}
	defer stmt.Close()


	rows, err := stmt.Query(id)

	if err != nil {
		panic(err)
	}

	defer rows.Close()

	var listStatement models.ListStatement
	
	for rows.Next() {
		var id int
        var title string
        var value sql.NullString

		err := rows.Scan(&id, &title, &value)

		if err != nil {
			panic(err)
		}

		listStatement.Id = id
		listStatement.Title = title

		if value.Valid {
			listStatement.List = append(listStatement.List, value.String)
		}

	}

	return listStatement, nil
}

func (r *StatementRepository) GetAllListStatements() ([]models.ListStatement, error) {
	
	queryString := `SELECT ls.id 
	AS list_statements_id, ls.title, lsi.value 
	FROM list_statements ls 
	LEFT JOIN list_statement_items lsi 
	ON ls.id = lsi.list_statement_id;`

	stmt, err := r.DB.Prepare(queryString)

	if err != nil {
		panic(err)
	}
	defer stmt.Close()

	rows, err := stmt.Query()

	if err != nil {
		panic(err)
	}

	defer rows.Close()

	var listStatements []models.ListStatement

	for rows.Next() {
		var id int
		var title string
		var value sql.NullString

		err := rows.Scan(&id, &title, &value)

		if err != nil {
			panic(err)
		}

		var listStatement models.ListStatement
		listStatement.Id = id
		listStatement.Title = title

		if value.Valid {
			listStatement.List = append(listStatement.List, value.String)
		}

		listStatements = append(listStatements, listStatement)
	}

	return listStatements, nil

}