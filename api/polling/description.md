# Polling

Polling is a technique used in various computing contexts to periodically check the state of a system, device, or service to determine
if there is any new data available or if an action needs to be taken. In web development, polling refers specifically to the process where the client (e.g., a web browser)
continuously sends requests to a server to retrieve updates or new data at regular intervals.

### How Polling Works
1. Client Request: The client makes an HTTP request to the server to ask for new data.
2. Server Response: The server processes the request and responds immediately with the available data, whether it is new or unchanged from the previous request.
3. Wait and Repeat: After receiving the server's response, the client waits for a predefined interval and then sends another request.
This loop continues indefinitely until the client stops the polling or the web page is closed.

### Characteristics of Polling
1. Interval-Based: Polling happens at regular intervals, which can be set according to the needs of the application.
2. Resource Intensive: Since the client sends requests at regular intervals regardless of whether there's new data,
this can lead to inefficient use of resources and unnecessary network traffic, especially if the intervals are very short.
3. Simple Implementation: Polling is relatively simple to implement and doesn't require complex protocols or server-side infrastructure beyond what is normally needed for handling HTTP requests.
4. Predictable Load: The server load is predictable since the requests arrive at regular, known intervals, making it easier to manage server resources.
