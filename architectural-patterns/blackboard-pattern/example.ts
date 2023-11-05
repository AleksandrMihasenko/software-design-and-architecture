interface ExpertSystem {
  analyze(data: any): void;
}

class LetterRecognitionSystem implements ExpertSystem {
  analyze(data: any): void {
    console.log(`Letter Recognition System analyzed: ${data}`);
  }
}

class DigitRecognitionSystem implements ExpertSystem {
  analyze(data: any): void {
    console.log(`Digit Recognition System analyzed: ${data}`);
  }
}

class Blackboard {
  private data: any;

  constructor() {
    this.data = null;
  }

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
}

class Controller {
  private expertSystems: ExpertSystem[] = [];

  constructor(expertSystems: ExpertSystem[]) {
    this.expertSystems = expertSystems;
  }

  run() {
    const data = blackboard.getData();

    for (const system of this.expertSystems) {
      system.analyze(data);
    }
  }
}

const letterSystem = new LetterRecognitionSystem();
const digitSystem = new DigitRecognitionSystem();
const blackboard = new Blackboard();

const expertSystems = [letterSystem, digitSystem];

const controller = new Controller(expertSystems);

blackboard.setData("A123");

controller.run();
