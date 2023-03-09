'use strict';

import { SAMPLE_DEPOSIT_PLANS, SAMPLE_FUND_DEPOSITS } from './constants/depositPlanConstants';
import { app } from './typings';
import { checkPrerequisites, getSumOfFundDeposits } from './utils/depositPlanUtils';

/**
 * 
 * @param depositPlans a list of deposit plans (at max two, with one each (ONE_TIME, MONTHLY))
 * @param fundDeposits a list of fund deposits initated by the user
 * @returns a list of allocation that shows the plan type along with the amount
 */
export const generateFundsAllocation = (
  depositPlans: app.DepositPlan[],
  fundDeposits: number[],
): app.DepositPlanAllocation[] => {
  const allocationResults: app.DepositPlanAllocation[] = [];

  const sumOfFunds = getSumOfFundDeposits(fundDeposits);

  const isPrerequisiteFufilled = checkPrerequisites(depositPlans, sumOfFunds);

  if (!isPrerequisiteFufilled) {
    return allocationResults;
  }

  depositPlans.forEach((depositPlan) => {
    depositPlan.allocations.forEach((allocation) => {
      // Check if the allocation type is available
      const existingAllocation: app.DepositPlanAllocation | undefined = allocationResults.find((result) => {
        return result.planType === allocation.planType;
      });

      if (!existingAllocation) {
        // Add the allocation in if it does not exist
        allocationResults.push(allocation);
      } else {
        // Get the index and sum up the amount of the existing allocation
        const existingAllocationIndex : number = allocationResults.findIndex((result) => {
          return result.planType === allocation.planType;
        });
        allocationResults[existingAllocationIndex] = {
          ...existingAllocation,
          amount: existingAllocation.amount + allocation.amount,
        }
      }
    })
  })

  return allocationResults;
};

console.log('Scenario 1: Happy case');
console.log('Funds: ', SAMPLE_FUND_DEPOSITS);
console.log('Deposit Plans: ', JSON.stringify(SAMPLE_DEPOSIT_PLANS, null, 4));
console.log('Output:', JSON.stringify(
  generateFundsAllocation(SAMPLE_DEPOSIT_PLANS, SAMPLE_FUND_DEPOSITS),
  null,
  4,
));
console.log('=============================');
console.log('Scenario 2: When fund deposits is empty');
console.log('Funds: ', []);
console.log('Deposit Plans: ', JSON.stringify(SAMPLE_DEPOSIT_PLANS, null, 4));
console.log('Output:', JSON.stringify(
  generateFundsAllocation(SAMPLE_DEPOSIT_PLANS, []),
  null,
  4,
));
console.log('=============================');
console.log('Scenario 3: When deposit plans is empty');
console.log('Funds: ', SAMPLE_FUND_DEPOSITS);
console.log('Deposit Plans: ', JSON.stringify([], null, 4));
console.log('Output:', JSON.stringify(
  generateFundsAllocation([], SAMPLE_FUND_DEPOSITS),
  null,
  4,
));