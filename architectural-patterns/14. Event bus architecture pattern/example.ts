class EventGeneral {
  constructor(public name: string, public data?: any) {}
}

class EventBus {
  private static instance: EventBus;
  private events: { [key: string]: Function[] } = {};

  private constructor() {}

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  public subscribe(eventName: string, callback: Function): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  public publish(event: EventGeneral): void {
    const eventHandlers = this.events[event.name];
    if (eventHandlers) {
      eventHandlers.forEach(handler => handler(event.data));
    }
  }
}

const eventBus = EventBus.getInstance();

class ComponentA {
  constructor() {
    // Подписываемся на событие 'example'
    eventBus.subscribe('example', this.handleExampleEvent.bind(this));
  }

  private handleExampleEvent(data: any): void {
    console.log('Component A handled the event with data:', data);
  }
}

class ComponentB {
  constructor() {
    eventBus.subscribe('example', this.handleExampleEvent.bind(this));
  }

  private handleExampleEvent(data: any): void {
    console.log('Component B handled the event with data:', data);
  }
}

const eventData = { message: 'Hello, Event Bus!' };
const exampleEvent = new EventGeneral('example', eventData);

eventBus.publish(exampleEvent);
