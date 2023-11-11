package models

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
