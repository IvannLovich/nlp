import { checkForName } from '@/client/utils/nameChecker';

describe('checkForName function', () => {
  it('should return false for an invalid URL', () => {
    const invalidUrl = 'not a valid URL';
    const result = checkForName(invalidUrl);
    expect(result).toBe(false);
  });
});
