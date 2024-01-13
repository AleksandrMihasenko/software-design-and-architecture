# Event Driven Architecture

Event-driven architecture (EDA) is a system design practice built to record, transmit, and process events through
a decoupled architecture. This means that systems don't need to know about each other to share information and accomplish tasks.

This pattern uses events to communicate between different components or services,
where events trigger actions or reactions in the system. Events are processed asynchronously,
meaning the system does not stop to wait for the handling of an event, increasing overall efficiency.
This pattern is handy for applications that require real-time responsiveness and scalability.

Decoupling is a key advantage of EDA over other data-sharing methods like APIs.
With APIs, applications need to know dependencies and parameters, send a properly formatted request, and wait for a response.
This creates a request-response model for data transfer.

## Use cases:

* Data replication: One event can be shared between multiple services that need to copy its data into their databases.
* Parallel processing: Multiple processes can be triggered by one event to execute asynchronously of each other.
* Real-time monitoring: Systems can generate events for changes to their state so an organization can scan for anomalies and suspicious activities.
* Interoperability: Events can be persisted and propagated regardless of the code services are written in.
* Redundancy: If a service is down, events can be persisted in the router until the service is available to consume the event.
* Microservices: EDA is commonly paired with microservices to efficiently share information between decoupled systems at scale.
