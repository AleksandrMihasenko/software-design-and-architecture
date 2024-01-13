interface Event {
  typeEvent: string;
  data: any;
}

class EventPublisher {
  private subscribers: ((event: Event) => void)[] = [];

  subscribe(subscriber: (event: Event) => void) {
    this.subscribers.push(subscriber);
  }

  publish(eventType: string, eventData: any) {
    const event = { typeEvent: eventType, data: eventData };
    this.subscribers.forEach(subscriber => subscriber(event as Event));
  }
}

class EventSubscriber {
  handleEvent(event: Event) {
    console.log(`Received event of type '${event.type}' with data:`, event.data);
  }
}

const publisher = new EventPublisher();
const subscriber = new EventSubscriber();

publisher.subscribe(subscriber.handleEvent.bind(subscriber));
publisher.publish('userLoggedIn', { username: 'john_doe' });
