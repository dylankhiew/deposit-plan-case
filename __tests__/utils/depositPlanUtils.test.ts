import { SAMPLE_DEPOSIT_PLANS } from '../../src/constants/depositPlanConstants';
import { app } from '../../src/typings';
import { checkPrerequisites, getSumOfFundDeposits } from '../../src/utils/depositPlanUtils';

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

  describe('checkPrerequisites', () => {
    it('should return false when deposit plans are empty but has sum of funds', () => {
      const depositPlans: app.DepositPlan[] = [];
      const sumOfFunds = 10000;
      expect(checkPrerequisites(depositPlans, sumOfFunds)).toEqual(false);
    });

    it('should return false when there are deposit plans but sum of funds is zero', () => {
      const depositPlans: app.DepositPlan[] = SAMPLE_DEPOSIT_PLANS;
      const sumOfFunds = 0;
      expect(checkPrerequisites(depositPlans, sumOfFunds)).toEqual(false);
    });

    it('should return false when there are no deposit plans and sum of funds is zero', () => {
      const depositPlans: app.DepositPlan[] = [];
      const sumOfFunds = 0;
      expect(checkPrerequisites(depositPlans, sumOfFunds)).toEqual(false);
    });

    it('should return false when deposit plans are over the limit', () => {
      const depositPlans: app.DepositPlan[] = [
        ...SAMPLE_DEPOSIT_PLANS,
        ...SAMPLE_DEPOSIT_PLANS,
      ];
      const sumOfFunds = 10000;
      expect(checkPrerequisites(depositPlans, sumOfFunds)).toEqual(false);
    });

    it('should return true when there are deposit plans and sum of funds', () => {
      const depositPlans: app.DepositPlan[] = SAMPLE_DEPOSIT_PLANS;
      const sumOfFunds = 10600;
      expect(checkPrerequisites(depositPlans, sumOfFunds)).toEqual(true);
    });
  });
});