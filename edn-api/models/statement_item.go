package models

import (
	"encoding/json"
	"errors"
)

type ListStatementItem struct {
	Value string `json:"value"`
}

type ListStatement struct {
	Id int `json:"id"`
	Title string `json:"title"`
	List []string `json:"list"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}

type ImageStatementItem struct {
	Id int `json:"id"`
	Header string `json:"header"`
	Body string `json:"body"`
	ImageSrc string `json:"imageSrc"`
}

func (u * ListStatementItem) Scan(value interface{}) error {
	b, ok := value.([]byte)
	if !ok {
	  return errors.New("type assertion to []byte failed")
	}
	return json.Unmarshal(b, &u)
  }