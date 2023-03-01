import { DEPOSIT_PLAN_ALLOWED_AMOUNT } from '../constants/depositPlanConstants';
import { app } from '../typings';

const getSumOfFundDeposits = (funds: number[]): number => {
  return funds.reduce((
    totalFunds: number,
    fundAmount: number,
  ) => totalFunds + fundAmount, 0);
};

// TO-DO: Add test spec
const checkPrerequisites = (
  depositPlans: app.DepositPlan[],
  sumOfFunds: number,
): boolean => {
  const hasSufficientDepositPlans = Boolean(depositPlans.length);
  const isDepositPlansWithinLimit = depositPlans.length <= DEPOSIT_PLAN_ALLOWED_AMOUNT;
  const hasFunds = Boolean(sumOfFunds);

  return hasSufficientDepositPlans && isDepositPlansWithinLimit && hasFunds;
};

export { getSumOfFundDeposits, checkPrerequisites };