import { generateFundsAllocation } from "../src";
import { app } from "../src/typings";

describe('Index :: ', () => {
  describe('generateFundsAllocation', () => {
    test('when deposit plans are empty', () => {
      const depostPlans: app.DepositPlan[] = [];
      const funds: number[] = [0, 10, 10000];

      expect(generateFundsAllocation(depostPlans, funds)).toEqual([]);
    });

    test('when deposit funds are empty', () => {
      const depostPlans: app.DepositPlan[] = [
        {
          portfolioType: "ONE_TIME",
          allocations: [
            {
              planType: 'HIGH_RISK',
              amount: 10000,
            },
            {
              planType: 'RETIREMENT',
              amount: 500,
            },
          ],
        },
      ];
      const funds: number[] = [];

      expect(generateFundsAllocation(depostPlans, funds)).toEqual([]);
    });
  });
});