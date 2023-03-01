// TO-DO: Add test spec
const getSumOfFunds = (funds: number[]): number => {
  return funds.reduce((total: number, fund: number) => total + fund, 0);
};

export { getSumOfFunds };