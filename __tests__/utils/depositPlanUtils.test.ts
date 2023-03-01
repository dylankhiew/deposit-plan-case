import { getSumOfFundDeposits } from '../../src/utils/depositPlanUtils';

describe('Util :: depositPlanUtils', () => {
  describe('getSumOfFundDeposits', () => {
    it('should return sum of funds', () => {
      const funds: number[] = [0, 10, 10000];
      expect(getSumOfFundDeposits(funds)).toEqual(10010);
    });

    it('should return zero if there are no funds', () => {
      const noFunds: number[] = [];
      expect(getSumOfFundDeposits(noFunds)).toEqual(0);
    });
  });
});