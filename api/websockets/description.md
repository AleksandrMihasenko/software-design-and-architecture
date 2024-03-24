# Websockets

WebSockets are a technology that enables real-time, bidirectional communication between a client (such as a web browser) and
a server over a single, long-lived connection. This technology is particularly valuable for web applications that require
instant data exchange and interactive features.

## Key Concepts:

* WebSockets start with an initial handshake using the HTTP protocol, but once the connection is established, it switches to a WebSocket protocol.
* Unlike HTTP, where the client initiates communication, WebSockets allow both the client and server to send messages at any time without waiting for a request.
* WebSockets are supported in modern web browsers through the WebSocket API, which provides methods and events for managing WebSocket connections.

## WebSocket API methods:

1. ```open``` - Used to open a WebSocket connection to the specified URL.
2. ```close``` - Used to close the WebSocket connection.
3. ```message``` - Used to handle incoming messages from the WebSocket server.
4. ```error``` - Used to handle WebSocket errors.
5. ```send``` - Used to send data over the WebSocket connection to the server.
