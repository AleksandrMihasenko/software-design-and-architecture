# Long polling

Long polling is a web communication technique used to enable real-time, server-side updates to be pushed to a client, such as a web browser.
It's often used in applications where real-time updates are crucial, like in chat apps, live notifications, or real-time feeds.

### Here’s how long polling typically works:

1. Client Request: The client makes a standard HTTP request to the server, just like a normal request,
but with the intention that the server will not respond immediately if there’s no data available to send back.
2. Server Handling: Instead of responding immediately with no data, the server holds the request open, waiting until data becomes available or a certain timeout is reached.
During this time, the server checks for new or updated data to send.
3. Server Response: When new data is available, the server responds to the held request with the new data, sending it back to the client.
4. New Request: After receiving the data, the client processes it and immediately sends another request to the server, starting the process over.
This allows the server to continuously push updates to the client as soon as new data comes in.
5. Timeout: If no data becomes available before a defined timeout, the server sends a response back to the client to indicate that no data is available.
The client will then immediately make another request.

Long polling is an improvement over traditional polling because it reduces the amount of unnecessary HTTP requests sent to the server.
Traditional polling involves the client repeatedly making requests at regular intervals, regardless of whether new data is available,
which can lead to inefficiency and increased load on the server.
