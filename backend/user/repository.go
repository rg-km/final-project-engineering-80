package user

import (
	"database/sql"
)

type Repository interface {
	Save(user User) (User, error)
	FindByEmail(email string) (User, error)
	FindByID(ID int) (User, error)
	Update(user User) (User, error)
}

type repository struct {
	db *sql.DB
}

func NewRepository(db *sql.DB) *repository {
	return &repository{db}
}

func (r *repository) Save(user User) (User, error) {
	// err := r.db.Create(&user).Error
	// if err != nil {
	// 	return user, err
	// }

	// return user, nil

	var sqlStatement string
	// Task 1: lengkapi statement SQL untuk mengambil data user berdasarkan id
	sqlStatement = `
		INSERT INTO users (name, email, phone_number, occupation, password_hash, role, profile_pic, token, created_at, updated_at)
		VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
	`

	// Task 2: buatlah query dengan prepared statement dengan statement SQL yang sudah di lengkapi	diatas
	// row := r.db.QueryRow(sqlStatement, user)
	_, err := r.db.Exec(sqlStatement, user.Name, user.Email, user.PhoneNumber, user.Occupation, user.PasswordHash, user.Role, user.ProfilePic, user.Token, user.CreatedAt, user.UpdatedAt)
	if err != nil {
		return user, err
	}

	return user, nil
}

func (r *repository) FindByEmail(email string) (User, error) {
	// var user User

	// err := r.db.Where("email = ?", email).Find(&user).Error
	// if err != nil {
	// 	return user, err
	// }

	// return user, nil

	// sql statement dibawah ini akan mengambil data dari tabel student dengan email yang diberikan
	sqlStmt := `
	SELECT 
	    id, name, phone_number, occupation, password_hash, role, token, profile_pic, created_at, updated_at, email
    FROM 
        users 
    WHERE email = ?`

	// queryrow untuk mengambil data dari tabel student dengan email yang diberikan
	row := r.db.QueryRow(sqlStmt, email)
	// row.Scan digunakan untuk mengambil data dari tabel student dengan email yang diberikan
	var user User
	err := row.Scan(&user.ID, &user.Name, &user.PhoneNumber, &user.Occupation, &user.PasswordHash, &user.Role, &user.Token, &user.ProfilePic, &user.CreatedAt, &user.UpdatedAt, &user.Email)
	if err != nil {
		return user, err
	}

	return user, nil
}

func (r *repository) FindByID(ID int) (User, error) {
	// sql statement dibawah ini akan mengambil data dari tabel student dengan email yang diberikan
	sqlStmt := `
	SELECT 
	    id, name, phone_number, occupation, password_hash, role, token, profile_pic, created_at, updated_at, email
    FROM 
        users 
    WHERE id = ?`

	// queryrow untuk mengambil data dari tabel student dengan email yang diberikan
	row := r.db.QueryRow(sqlStmt, ID)
	// row.Scan digunakan untuk mengambil data dari tabel student dengan email yang diberikan
	var user User
	err := row.Scan(&user.ID, &user.Name, &user.PhoneNumber, &user.Occupation, &user.PasswordHash, &user.Role, &user.Token, &user.ProfilePic, &user.CreatedAt, &user.UpdatedAt, &user.Email)
	if err != nil {
		return user, err
	}

	return user, nil
}

func (r *repository) Update(user User) (User, error) {
	// err := r.db.Save(&user).Error
	
	// if err != nil {
	// 	return user, err
	// }

	// return user, nil

	// stmt dibawah ini adalah syntax untuk mengupdate data
	// dalam tabel student dengan nim yang sama dengan nim yang diberikan
	// data yang diupdate adalah nama dan umur
	stmt := `
		UPDATE users
		SET name = ?, phone_number = ?, occupation = ?, password_hash = ?, role = ?, token = ?, profile_pic = ?, created_at = ?, updated_at = ?, email = ? 
		WHERE id = ?
	`
	_, err := r.db.Exec(stmt, user.Name, user.PhoneNumber, user.Occupation, user.PasswordHash, user.Role, user.Token, user.ProfilePic, user.CreatedAt, user.UpdatedAt, user.Email, user.ID)
	if err != nil {
		return user, err
	}

	return user, nil
}