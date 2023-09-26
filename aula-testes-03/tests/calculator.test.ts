import calculator from "calculator";

describe("Testing Calculator", () => {
    it("Should return 3", () => {
        expect(calculator.sum(1, 2)).toBe(3);
    });

    it("Should return 3", () => {
        expect(calculator.sub(5, 2)).toBe(3);
    });

    it("Should return 3", () => {
        expect(calculator.div(6, 2)).toBe(3);
    });

    it("Should return 3", () => {
        expect(calculator.mul(1.5, 2)).toBe(3);
    })
})