package models

type ListStatementItem struct {
	Id int `json:"id"`
	Title string `json:"title"`
	List []string `json:"list"`
}

type ImageStatementItem struct {
	Id int `json:"id"`
	Header string `json:"header"`
	Body string `json:"body"`
	ImageSrc string `json:"imageSrc"`
}