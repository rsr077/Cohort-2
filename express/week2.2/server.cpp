#include <iostream>      // For std::cout, std::cerr
#include <string>        // For std::string
#include <cstring>       // For memset
#include <sys/types.h>   // For data types used in sockets
#include <sys/socket.h>  // For socket functions
#include <netinet/in.h>  // For sockaddr_in structure
#include <unistd.h>      // For close()
#include <arpa/inet.h>   // For htons(), htonl()

#define PORT 8080
#define BUFFER_SIZE 1024

int main() {
    int server_fd, client_fd;
    struct sockaddr_in address;
    char buffer[BUFFER_SIZE] = {0};

    // 1. Create socket
    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd == -1) {
        std::cerr << "Socket creation failed\n";
        return 1;
    }

    // 2. Configure server address
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY; // Accept any IP
    address.sin_port = htons(PORT);  // Convert port number to network byte order

    // 3. Bind the socket
    if (bind(server_fd, (struct sockaddr*)&address, sizeof(address)) < 0) {
        std::cerr << "Bind failed\n";
        return 1;
    }

    // 4. Start listening
    if (listen(server_fd, 3) < 0) {
        std::cerr << "Listen failed\n";
        return 1;
    }

    std::cout << "Server running on port " << PORT << "\n";
    
    while (true) {
        // 5. Accept incoming connections
        socklen_t addrlen = sizeof(address);
        client_fd = accept(server_fd, (struct sockaddr*)&address, &addrlen);
        if (client_fd < 0) {
            std::cerr << "Accept failed\n";
            continue;
        }

        // 6. Read request
        read(client_fd, buffer, BUFFER_SIZE);
        std::cout << "Received request:\n" << buffer << "\n";

        // 7. Send a basic HTTP response
        std::string http_response = 
            "HTTP/1.1 200 OK\r\n"
            "Content-Type: text/html\r\n"
            "Content-Length: 13\r\n"
            "\r\n"
            "Hello, World!";
        
        send(client_fd, http_response.c_str(), http_response.size(), 0);

        // 8. Close the connection
        close(client_fd);
    }

    // 9. Close server socket
    close(server_fd);
    return 0;
}
