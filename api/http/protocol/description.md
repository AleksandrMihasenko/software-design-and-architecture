# HTTP

HTTP is an application layer protocol used for transmitting hypertext documents on the World Wide Web.
It serves as the foundation of data communication for the web.

HTTP is stateless, meaning each request from the client to the server is independent and unrelated to previous requests.
This simplifies implementation and enhances scalability but requires additional mechanisms
(like cookies or sessions) for maintaining state between requests if needed.

It follows a client-server model where clients (such as web browsers) send requests to servers,
and servers respond with resources (such as HTML documents, images, or other data).

HTTP headers provide additional information about the request or response. Headers can include metadata such as content type,
content length, cache directives, authentication tokens, and more.

HTTP is inherently insecure as data is transmitted in plain text, making it susceptible to interception and tampering.
HTTPS (HTTP Secure) adds a layer of encryption using SSL/TLS protocols to secure data transmission over the network.

HTTP operates on a request-response cycle:

* Client Request: A client sends an HTTP request to the server. The request includes a method (e.g., GET, POST),
a URL (Uniform Resource Locator) identifying the resource, headers containing metadata, and optionally a message body with data.

* Server Response: The server processes the request and sends back an HTTP response. The response includes a status code
indicating the outcome of the request (e.g., 200 for success, 404 for not found), response headers providing additional
information, and optionally a message body with the requested resource or data.


## HTTP Methods

HTTP defines various methods (also known as verbs) to specify the action to be performed on the identified resource.

Common methods include:

* GET: Retrieves data from the server.
* POST: Submits data to the server to create a new resource.
* PUT: Updates an existing resource on the server.
* DELETE: Removes a resource from the server.
* HEAD: Similar to GET but retrieves only response headers without the message body.
* OPTIONS: Retrieves the HTTP methods supported by the server for a given URL.
* PATCH: Partially updates an existing resource.

## HTTP Status Codes:

HTTP status codes indicate the outcome of a request. They are three-digit integers grouped into five categories:

* 1xx: Informational responses.
* 2xx: Success responses (e.g., 200 OK).
* 3xx: Redirection responses (e.g., 301 Moved Permanently).
* 4xx: Client error responses (e.g., 404 Not Found).
* 5xx: Server error responses (e.g., 500 Internal Server Error).
* State Management:
