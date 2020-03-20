const add = (a, b) => a+b;

const generateGreeting = (name= 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should generate Greeting', () => {
  expect(generateGreeting('Harshini')).toBe('Hello Harshini!');
});

test('Should generate greeting for anonymous', () => {
  expect(generateGreeting()).toBe('Hello Anonymous!');
});