export default class Validator {
  constructor(inpName) {
    this.inpName = inpName;
  }

  validateUsername() {
    const regexp1 = /^[a-z]+[a-z-_0-9]*$/ig;
    const regexp2 = /\d{4,}/ig;
    let output = 0;
    if (!regexp1.test(this.inpName)) {
      output = 'Not valid1!';
      return output;
    }
    if (regexp2.test(this.inpName)) {
      output = 'Not valid2!';
    } else {
      output = 'It`s valid!!!';
    }
    return output;
  }
}
