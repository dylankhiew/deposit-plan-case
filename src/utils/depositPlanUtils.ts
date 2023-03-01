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
  const hasAtMaxTwoDepositPlans = depositPlans.length <= 2;
  const hasFunds = Boolean(sumOfFunds);

  return hasSufficientDepositPlans && hasAtMaxTwoDepositPlans && hasFunds;
};

// TO-DO: Add test spec
const findDepositPlan = (
  depositPlans: app.DepositPlan[],
  portfolioType: app.PortfolioType,
): app.DepositPlan | undefined => depositPlans.find((depositPlan) => {
  return depositPlan.portfolioType === portfolioType;
});

export { getSumOfFundDeposits, checkPrerequisites, findDepositPlan };