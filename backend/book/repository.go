package book

import (
	"database/sql"
)

type Repository interface {
	FindAll() ([]Book, error)
	FindByUserID(userID int) ([]Book, error)
	FindByID(ID int) (Book, error)
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
		// fmt.Println("test")
		var book Book
		err := rows.Scan(&book.ID, &book.UserID, &book.Name, &book.FileImage, &book.ShortDescription, &book.Description, &book.Quantity, &book.Slug, &book.CreatedAt, &book.UpdatedAt)
		if err != nil {
			return books, err
		}
		// fmt.Println(book)
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

	rows, err := r.db.Query(sqlStmt, userID)
	if err != nil {
		return books, err
	}
	
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

func (r *repository) FindByID(ID int) (Book, error) {
	var b Book

	// sqlStmt := `
	// SELECT
	// 	b.id,
	// 	b.user_id,
	// 	b.name,
	// 	b.file_image,
	// 	b.short_description,
	// 	b.description,
	// 	b.quantity,
	// 	b.slug,
	// 	b.created_at,
	// 	b.updated_at,
	// 	u.name AS user_name
	// FROM books AS b
	// INNER JOINS users AS u ON b.user_id = u.id
	// ORDER BY b.id
	// `

	// row := r.db.QueryRow(sqlStmt, ID)

	// err := row.Scan(
	// 	&b.ID, &b.UserID, &b.Name, &b.FileImage, &b.ShortDescription, &b.Description, &b.Quantity, &b.Slug, &b.CreatedAt, &b.UpdatedAt, &b.User.Name)

	// 	if err != nil {
	// 		return b, err
	// 	}

	// 	return b, nil

	sqlStmt := `
	SELECT 
	    b.id, b.user_id, b.name, b.file_image, b.short_description, b.description, b.quantity, b.slug, b.created_at, b.updated_at, u.id AS user_id, u.name AS user_name, u.occupation AS user_occupation, u.email AS user_email, u.phone_number AS user_phone_number, u.password_hash AS user_password_hash, u.profile_pic AS user_profile_pic, u.role AS user_role, u.token AS user_token, u.created_at AS user_created_at, u.updated_at AS user_updated_at
    FROM books AS b
		JOIN users AS u ON u.id = b.user_id
		WHERE b.id = ?`

		row := r.db.QueryRow(sqlStmt, ID)

		err := row.Scan(&b.ID, &b.UserID, &b.Name, &b.FileImage, &b.ShortDescription, &b.Description, &b.Quantity, &b.Slug, &b.CreatedAt, &b.UpdatedAt, &b.User.ID, &b.User.Name, &b.User.Occupation, &b.User.Email, &b.User.PhoneNumber, &b.User.PasswordHash, &b.User.ProfilePic, &b.User.Role, &b.User.Token, &b.User.CreatedAt, &b.User.UpdatedAt)
		if err != nil {
			return b, err
		}

		return b, nil
		
}