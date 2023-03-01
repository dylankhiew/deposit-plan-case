export namespace app {
  type DepositPlanType = 'HIGH_RISK' | 'RETIREMENT';
  
  type PortfolioType = 'ONE_TIME' | 'MONTHLY';

  interface DepositPlanAllocation {
    planType: DepositPlanType;
    amount: number;
  }

  interface DepositPlan {
    portfolioType: PortfolioType;
    allocations: DepositPlanAllocation[];
  }

  interface FundAllocationResult {
    planType: DepositPlanType;
    amount: number;
  }
}