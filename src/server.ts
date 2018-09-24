/**
 * This is a smaple class to perform some arithmetic operations on numbers
 */
export default class MainClass {

    // private name variable
    private name: string;

    /**
     * Adds two numbers together
     *
     * @param a first number to add
     * @param b second number to add
     *
     */
    public add(a: number, b: number): number {
     return a + b;
    }

    /**
     * Subtracts a number from another
     *
     * @param a first number to subtract
     * @param b second number to subtract
     */
    public subtract(a: number, b: number): number {
        return a - b;
    }

    /**
     * Divides one number from another
     *
     * @param a first number to divide
     * @param b second number to divide
     */
    public divide(a: number, b: number): number {
        return a / b;
    }

    /**
     * Multiplies two numbers together
     *
     * @param a first number to multiply
     * @param b second number to multiply
     */
    public multiply(a: number, b: number): number {
        return a * b;
    }
}
