import { average, sum } from '.';

describe('Utility Tests', () => {
    test('should return average value', () => {
        const expectedOutput = 26;
        const total = 104;
        const n = 4;
        expect(average(total)(n)).toEqual(expectedOutput);
    });

    test('should return sum of two numbers', () => {
        const x = 10;
        const y = 20;
        const output = 30;
        expect(sum(x)(y)).toEqual(output);
    });
});
