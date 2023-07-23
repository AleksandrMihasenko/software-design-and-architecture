// Using objects
const ConfigOne = {
  start: () => console.log('App has started'),
  update: () => console.log('App has updated'),
}

Object.freeze(ConfigOne);

ConfigOne.start();
ConfigOne.update();

// There will be error
// Config.name = "New name";


// Using classes
// variant 1
class ConfigTwo {
  constructor() {
  }
  
  start() {
    console.log('App has started');
  }
  
  updated() {
    console.log('App has updated');
  }
}

const instanceOne = new ConfigTwo();
Object.freeze(instanceOne);

// variant 1
let instanceTwo;

class Singleton {
  private static instance: Singleton;

  constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
