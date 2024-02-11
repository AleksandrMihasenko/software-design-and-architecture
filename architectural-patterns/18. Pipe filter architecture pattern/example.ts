function multiplyByTwo(input: number[]): number[] {
  return input.map(num => num * 2);
}

function filterEvenNumbers(input: number[]): number[] {
  return input.filter(num => num % 2 === 0);
}

function pipeline(input: number[], ...filters: ((input: number[]) => number[])[]): number[] {
  let result = input;

  for (const filter of filters) {
    result = filter(result);
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const processedNumbers = pipeline(numbers, filterEvenNumbers, multiplyByTwo);
console.log(processedNumbers);
