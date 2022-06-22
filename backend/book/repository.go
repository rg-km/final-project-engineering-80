package book

import (
	"database/sql"
	"fmt"
)

type Repository interface {
	FindAll() ([]Book, error)
	FindByUserID(userID int) ([]Book, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]Book, error) {
	var books []Book

	sqlStmt := `
	SELECT 
	    id, user_id, name, file_image, short_description, description, quantity, slug, created_at, updated_at
    FROM 
        books`
	
	// Query untuk mengambil data dari tabel books
	rows, err := r.db.Query(sqlStmt)
	if err != nil {
		return books, err
	}
	

	// rows.Scan digunakan untuk mengambil data dari tabel books dan dimasukkan ke dalam slice Book
	for rows.Next() {
		fmt.Println("test")
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Name, &book.FileImage, &book.ShortDescription, &book.Description, &book.Quantity, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return books, err
		}
		fmt.Println(book)
		books = append(books, book)
	}

	return books, nil
	// time := time.Now().Unix()
}

func (r *repository) FindByUserID(userID int) ([]Book, error) {
	var books []Book
	sqlStmt := `
	SELECT 
	    id, user_id, name, file_image, short_description, description, quantity, slug, created_at, updated_at
    FROM 
        books
		WHERE user_id = ?`
	
	// Query untuk mengambil data dari tabel students
	rows, err := r.db.Query(sqlStmt)
	if err != nil {
		return books, err
	}

	// slice students untuk menampung data dari tabel students
	
	// rows.Scan digunakan untuk mengambil data dari tabel students dan dimasukkan ke dalam slice students
	for rows.Next() {
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Name, &book.FileImage, &book.ShortDescription, &book.Description, &book.Quantity, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return books, err
		}
		books = append(books, book)
	}

	return books, nil
}