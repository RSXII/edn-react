package database

import (
	"database/sql"
	"ednAPI/models"
	"fmt"
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
		fmt.Printf("Error: %v", err)
	}

	defer stmt.Close()


	rows, err := stmt.Query(id)

	if err != nil {
		fmt.Printf("Error: %v", err)
	}

	defer rows.Close()

	var listStatement models.ListStatement
	
	for rows.Next() {
		var id int
        var title string
        var value sql.NullString

		err := rows.Scan(&id, &title, &value)

		if err != nil {
			fmt.Printf("Error: %v", err)
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
		fmt.Printf("Error: %v", err)
	}

	defer stmt.Close()

	rows, err := stmt.Query()

	if err != nil {
		fmt.Printf("Error: %v", err)
	}

	defer rows.Close()

	var listStatementMap =  make(map[int]models.ListStatement)

	for rows.Next() {
		var id int
		var title string
		var value sql.NullString

		err := rows.Scan(&id, &title, &value)

		if err != nil {
			fmt.Printf("Error: %v", err)
		}

		listStatement, ok := listStatementMap[id]

		if !ok {
			listStatement = models.ListStatement{
				Id: id,
				Title: title,
			}
		}

		if value.Valid {
			listStatement.List = append(listStatement.List, value.String)
		}

		listStatementMap[id] = listStatement

	}

	var listStatements []models.ListStatement

	for _, listStatments := range listStatementMap {
		listStatements = append(listStatements, listStatments)
	}

	return listStatements, nil

}

func (r *StatementRepository) GetAllImageStatements() ([]models.ImageStatementItem, error) {
	
	queryString := `SELECT * FROM image_statements;`

	stmt, err := r.DB.Prepare(queryString)

	if err != nil {
		fmt.Printf("Error: %v", err)
	}

	defer stmt.Close()

	rows, err := stmt.Query()

	if err != nil {
		fmt.Printf("Error: %v", err)
	}

	defer rows.Close()

	var imageStatementItems []models.ImageStatementItem

	for rows.Next() {
		var id int
		var header string
		var body string
		var imageSrc string

		err := rows.Scan(&id, &header, &body, &imageSrc)

		if err != nil {
			fmt.Printf("Error: %v", err)
		}
		fmt.Printf("Image Statement: %v", imageStatementItems)

		imageStatementItems = append(imageStatementItems, models.ImageStatementItem{
			Id: id,
			Header: header,
			Body: body,
			ImageSrc: imageSrc,
		})
	}

	return imageStatementItems, nil

}