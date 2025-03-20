package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

// Handler for the home route
func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Hello, World! Welcome to the Gorilla Mux HTTP Server."))
}

// Handler for another route
func aboutHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("This is the About page!"))
}

func main() {
	// Create a new router
	r := mux.NewRouter()

	// Define routes
	r.HandleFunc("/", homeHandler).Methods("GET")
	r.HandleFunc("/about", aboutHandler).Methods("GET")

	// Start the server
	port := 8080
	fmt.Printf("Server running at http://localhost:%d\n", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), r)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}
