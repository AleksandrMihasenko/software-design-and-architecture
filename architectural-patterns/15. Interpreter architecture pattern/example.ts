interface Expression {
  interpret(context: Context): number;
}

class NumberExpression implements Expression {
  constructor(private value: number) {}

  interpret(context: Context): number {
    return this.value;
  }
}

class AdditionExpression implements Expression {
  constructor(private left: Expression, private right: Expression) {}

  interpret(context: Context): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

class Context {
  private variables: Map<string, number> = new Map();

  setVariable(name: string, value: number): void {
    this.variables.set(name, value);
  }

  getVariable(name: string): number | undefined {
    return this.variables.get(name);
  }
}

const context = new Context();
context.setVariable('a', 5);
context.setVariable('b', 7);

const expression = new AdditionExpression(
    new NumberExpression(10),
    new AdditionExpression(
        new NumberExpression(2),
        new NumberExpression(3)
    )
);

const result = expression.interpret(context);
console.log('Result:', result); // Output: Result: 15
