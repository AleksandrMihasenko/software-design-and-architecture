# REST API

REST (Representational State Transfer) is an architectural style that defines a set of constraints for designing networked
applications.
RESTful APIs use HTTP methods such as GET, POST, PUT, DELETE to perform CRUD (Create, Read, Update, Delete) operations on resources.

## Key Concepts:

1. Resources.
* Resources are the key entities in a RESTful API, representing the data or objects that clients interact with.
* Each resource should have a unique identifier (URI), and interactions with the resource are performed through standard HTTP methods.

2. Uniform Interface.
* A uniform interface is a fundamental principle of REST, ensuring that interactions between clients and servers are consistent and predictable.

3. Statelessness.
* RESTful APIs are stateless, meaning each request from a client must contain all the information necessary to understand and process the request.
* Servers do not store client state between requests, improving scalability and reliability.

4. HTTP Methods.
* RESTful APIs use standard HTTP methods to perform actions on resources.

5. Content Negotiation.
* Content negotiation allows clients and servers to communicate about the content type they can accept or produce.
* It enables clients to request resources in different formats (e.g., JSON, XML) based on their preferences and capabilities, enhancing interoperability.

6. Security.
* Common security mechanisms include HTTPS for secure communication, OAuth for authentication and authorization, and input validation to prevent injection attacks.
