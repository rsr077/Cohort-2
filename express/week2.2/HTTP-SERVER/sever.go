package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, World! This is a Go HTTP Server.")
}

func main() {
	http.HandleFunc("/", handler) // Route requests to handler function

	port := 8080
	fmt.Printf("Server listening on http://localhost:%d\n", port)

	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}
