'use strict';

import { app } from './typings';
import { getSumOfFunds } from './utils/depositPlanUtils';

// Pseudocode
/**
 * a function that accepts an array of deposit plan (one-time/monthly) and fund deposits
 * array can contain at max 2 objects
 * the array is a mixture of 1 one-time plan and/or one monthly deposit plan
 * DepositPlan must have portflio (can be either HighRisk or Retirement), as well as amount
 * output should be allocation of funds based on the customers portfolio
 * all funds must be distributed
 */

const sampleFundDeposits: number[] = [10500, 100];

const sampleDepositPlan: app.DepositPlan[] = [
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
  {
    portfolioType: "MONTHLY",
    allocations: [
      {
        planType: 'HIGH_RISK',
        amount: 0,
      },
      {
        planType: 'RETIREMENT',
        amount: 100,
      }
    ],
  },
];

const getPortfolioFunds = (
  depositPlans: app.DepositPlan[],
  planType: app.DepositPlanType,
) => {
  // TO-DO: Remove chaining
  return depositPlans.map((depositPlan) => {
    return depositPlan.allocations.find((allocation) => allocation.planType === planType)?.amount ?? 0;
  });
};

// Happy case first
const generateFundsAllocation = (
  depositPlans: app.DepositPlan[],
  fundDeposits: number[],
): app.FundAllocationResult[] => {
  let totalHighRiskAllocation: number = 0;
  let totalRetirementAllocation: number = 0;
  let sumOfFunds = getSumOfFunds(fundDeposits);

  while(sumOfFunds !== 0) {
    // Check what funds need minus
    // Add it to the result
    // minus from total funds
  }

  const result: app.FundAllocationResult[] = [];

  return result;
};

console.log(generateFundsAllocation(sampleDepositPlan, sampleFundDeposits));