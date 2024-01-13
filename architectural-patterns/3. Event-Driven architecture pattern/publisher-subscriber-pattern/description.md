# Publisher/Subscriber Pattern

In a publisher/subscriber architecture (sometimes shortened to pub/sub), the event router tracks subscriptions from consumers to event channels.
When an event is published, the router ensures the subscriber receives it.

Events can't be replayed, so if a subscriber joins an event stream after an event is generated, they can't retroactively access it.
The consumer will receive new events from that point forward.
