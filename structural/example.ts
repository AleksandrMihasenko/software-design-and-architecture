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

const instance = new ConfigTwo();
Object.freeze(instance);
