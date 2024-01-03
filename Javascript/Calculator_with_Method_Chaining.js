// leet code challenge 'Calculator with Method Chaining'
// problem link https://leetcode.com/problems/calculator-with-method-chaining/description/

class Calculator {
  /**
   * Initialize the Calculator with the starting value.
   * The class provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It also allow consecutive operations to be performed using method chaining.
   * @param {number} startValue
   */
  constructor(startValue = 0) {
    this.result = startValue;
  }

  /**
   * Add the provided value to the current result.
   *
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * Subtract the provided value from the current result.
   *
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * Multiply the current result by the provided value.
   *
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * Divide the current result by the provided value.
   *
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= value;
    return this;
  }

  /**
   * Raise the current result to the power of the provided value.
   *
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  /**
   * Return the current result of the Calculator.
   *
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
