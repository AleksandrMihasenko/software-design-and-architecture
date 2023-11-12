# Client-Server Pattern

In the client-server architecture patterns, there are two main components:
The client, which is the service requester, and the server, which is the service provider.
Although both client and server may be located within the same system,
they often communicate over a network on separate hardware.

The client component initiates certain interactions with the server to generate the services needed.
While the client components have ports that describe the needed services, the servers have ports that describe
the services they provide. Both components are linked by request/reply connectors.
A classic example of this architecture pattern is the World Wide Web.
The client-server pattern is also used for online applications such as file sharing and email.

One major advantage of this architecture pattern is the central computing of data;
all files are stored in a central location for this network. Therefore, the data, as well as the network peripherals,
are centrally controlled. A disadvantage, however, is that the server is expensive to purchase and manage.

The client-server model is related to the peer-to-peer architecture pattern and is often described as a subcategory
of this pattern. The latter uses a decentralized system in which peers communicate with each other directly.