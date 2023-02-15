import LimitStringLength from './LimitStringLength';

describe('LimitStringLength', () => {

    it('should return a string with a length of 103 or greater when the input string is 103 characters long and stringLimit is true', () => {
        const inputString = 'a'.repeat(103);
        const result = LimitStringLength(inputString, true);
        expect(result.length).toBeGreaterThanOrEqual(103);
    });
    it('should return the first 100 characters of the input string followed by " . . . " when stringLimit is true and input string length is greater than 100', () => {
        const inputString = 'a'.repeat(200);
        const result = LimitStringLength(inputString, true);
        expect(result).toMatch(/^a{100} \. \. \./);
    });


    it('should return the same input string when stringLimit is false', () => {
        const inputString = 'This is a test string';
        const result = LimitStringLength(inputString, false);
        expect(result).toBe(inputString);
    });

    it('should return an empty string when an empty string is passed as input', () => {
        const inputString = '';
        const result = LimitStringLength(inputString, true);
        expect(result).toBe('');
    });

    it('should return the first 1000 characters of the input string when stringLimit is false and input string length is greater than 1000', () => {
        const inputString = 'a'.repeat(2000);
        const result = LimitStringLength(inputString, false);
        expect(result.length).toBe(1000);
    });

});
