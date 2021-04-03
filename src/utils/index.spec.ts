import { average } from '.';

describe('average()', () => {
    test('should return average value', () => {
        const expectedOutput = 26;
        const total = 104;
        const n = 4;

        expect(average(total)(n)).toEqual(expectedOutput);
    });
});
