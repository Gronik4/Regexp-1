import Validator from "../app";

const incoming = ['1sdfh_123-jh', '-sdfh_123-jh', 'sdfh_1235-jh', 'sdfh_123-jh'];
const expected = ['Not valid1!', 'Not valid2!', 'It`s valid!!!'];

test('Test exampl-1', () => {
  const result = new Validator(incoming[0]).validateUsername();
  expect(result).toBe(expected[0]);
});

test('Test exampl-2', () => {
  const result = new Validator(incoming[1]).validateUsername();
  expect(result).toBe(expected[0]);
});

test('Test exampl-3', () => {
  const result = new Validator(incoming[2]).validateUsername();
  expect(result).toBe(expected[1]);
});

test('Test exampl-4', () => {
  const result = new Validator(incoming[3]).validateUsername();
  expect(result).toBe(expected[2]);
});
