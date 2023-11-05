interface Service {
  performOperation(data: string): void;
}

class Service1 implements Service {
  performOperation(data: string): void {
    console.log(`Service 1 performs operation with data: ${data}`);
  }
}

class Service2 implements Service {
  performOperation(data: string): void {
    console.log(`Service 2 performs operation with data: ${data}`);
  }
}

class Broker {
  private services: { [key: string]: Service } = {};

  registerService(name: string, service: Service): void {
    this.services[name] = service;
  }

  requestService(name: string, data: string): void {
    if (this.services[name]) {
      this.services[name].performOperation(data);
    } else {
      console.log(`Service '${name}' not found.`);
    }
  }
}

const broker = new Broker();
const service1 = new Service1();
const service2 = new Service2();

broker.registerService('Service1', service1);
broker.registerService('Service2', service2);

broker.requestService('Service1', 'Data for Service 1');
broker.requestService('Service2', 'Data for Service 2');
