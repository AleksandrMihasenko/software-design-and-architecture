# HTTP versions

HTTP/2 and HTTP/3 address many of the limitations of HTTP/1.1, offering improved performance, efficiency, and security.
HTTP/3, in particular, introduces significant advancements by leveraging the QUIC transport protocol, aiming to further reduce
latency and enhance reliability, especially over modern network conditions.

## HTTP/1.1:

1. Serial Processing:
In HTTP/1.1, requests and responses are processed sequentially. Each request requires a new connection, and resources are fetched
one at a time, leading to inefficiencies, especially for websites with multiple resources.

2. Header Overhead:
HTTP/1.1 sends headers with each request and response, which can lead to significant overhead, especially for small requests or responses.

3. Resource Bottlenecks:
Limited resource loading, as only one request can be sent per connection at a time. This leads to head-of-line blocking,
where one slow resource can delay the loading of other resources on the page.

4. Compression:
HTTP/1.1 supports gzip compression for reducing the size of transferred data, but it's optional and not always utilized.

## HTTP/2:

1. Multiplexing:
HTTP/2 introduces multiplexing, allowing multiple requests and responses to be sent and received in parallel over
a single connection. This reduces latency and improves performance by avoiding the overhead of establishing multiple connections.

2. Header Compression:
HTTP/2 compresses headers, reducing overhead and improving efficiency compared to HTTP/1.1.

3. Server Push:
HTTP/2 supports server push, where the server can proactively send resources to the client before they are requested.
This reduces round-trip times and accelerates page loading, especially for resources required to render the initial page.

4. Binary Framing Layer:
HTTP/2 introduces a binary framing layer, which encapsulates HTTP messages into smaller units called frames.
This allows more efficient processing and reduces the risk of head-of-line blocking.

## HTTP/3:

1. Transport Protocol:
HTTP/3 is built on top of the QUIC (Quick UDP Internet Connections) transport protocol instead of TCP (Transmission Control Protocol)
used by HTTP/1.1 and HTTP/2. QUIC provides built-in encryption, multiplexing, and improved congestion control mechanisms.

2. Reduced Latency:
HTTP/3 aims to reduce latency further by addressing limitations of TCP, such as head-of-line blocking and slow start algorithms.
It allows for faster and more reliable connections, especially over lossy or congested networks.

3. Improved Security:
QUIC, the underlying transport protocol of HTTP/3, encrypts data by default, providing improved security compared to TCP-based connections.
This helps protect against eavesdropping and man-in-the-middle attacks.

4. Connection Migration:
HTTP/3 supports connection migration, allowing a client to switch between different networks (e.g., Wi-Fi to cellular)
without interrupting the ongoing communication. This enhances reliability and improves the user experience, especially for mobile devices.

5. Stream Multiplexing:
Similar to HTTP/2, HTTP/3 supports stream multiplexing, enabling concurrent transmission of multiple requests and responses over a single connection.
This improves efficiency and performance, particularly for applications with many small requests.
