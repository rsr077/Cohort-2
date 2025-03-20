#include <iostream>
#include <winsock2.h>
#include <ws2tcpip.h>

#pragma comment(lib, "ws2_32.lib")  // Link Winsock library

#define PORT 8080
#define BUFFER_SIZE 1024

void handle_client(SOCKET client_socket) {
    char buffer[BUFFER_SIZE];
    int bytes_received = recv(client_socket, buffer, sizeof(buffer) - 1, 0);

    if (bytes_received > 0) {
        buffer[bytes_received] = '\0';
        std::cout << "Received request:\n" << buffer << "\n";

        // Simple HTTP response
        std::string response =
            "HTTP/1.1 200 OK\r\n"
            "Content-Type: text/html\r\n"
            "Content-Length: 46\r\n"
            "Connection: close\r\n"
            "\r\n"
            "<html><body><h1>Hello, World!</h1></body></html>";

        send(client_socket, response.c_str(), response.length(), 0);
    }

    closesocket(client_socket);
}

int main() {
    WSADATA wsaData;
    SOCKET server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    int addr_len = sizeof(client_addr);

    // Initialize Winsock
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        std::cerr << "WSAStartup failed\n";
        return 1;
    }

    // Create socket
    server_socket = socket(AF_INET, SOCK_STREAM, 0);
    if (server_socket == INVALID_SOCKET) {
        std::cerr << "Socket creation failed\n";
        WSACleanup();
        return 1;
    }

    // Configure server address
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);

    // Bind socket
    if (bind(server_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) == SOCKET_ERROR) {
        std::cerr << "Bind failed\n";
        closesocket(server_socket);
        WSACleanup();
        return 1;
    }

    // Listen for connections
    if (listen(server_socket, 5) == SOCKET_ERROR) {
        std::cerr << "Listen failed\n";
        closesocket(server_socket);
        WSACleanup();
        return 1;
    }

    std::cout << "Server listening on port " << PORT << "...\n";

    // Accept connections
    while (true) {
        client_socket = accept(server_socket, (struct sockaddr*)&client_addr, &addr_len);
        if (client_socket == INVALID_SOCKET) {
            std::cerr << "Accept failed\n";
            continue;
        }

        handle_client(client_socket);
    }

    closesocket(server_socket);
    WSACleanup();
    return 0;
}
