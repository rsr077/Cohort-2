package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello from Gorilla Mux!"))
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", homeHandler).Methods("GET")

	port := 8080
	fmt.Printf("Server running on http://localhost:%d\n", port)
	http.ListenAndServe(fmt.Sprintf(":%d", port), r)
}

