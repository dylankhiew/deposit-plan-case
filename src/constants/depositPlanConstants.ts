import { app } from '../typings';

export const DEPOSIT_PLAN_ALLOWED_AMOUNT = 2;

export const SAMPLE_FUND_DEPOSITS: number[] = [10500, 100];

export const SAMPLE_DEPOSIT_PLANS: app.DepositPlan[] = [
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
      },
    ],
  },
];