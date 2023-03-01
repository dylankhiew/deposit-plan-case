import { getSumOfFunds } from '../../src/utils/depositPlanUtils';

describe('Util :: depositPlanUtils', () => {
  describe('getSumOfFunds', () => {
    const funds: number[] = [0, 10, 10000];

    it('should return sum of funds', () => {
      expect(getSumOfFunds(funds)).toEqual(10010);
    });
  });
});