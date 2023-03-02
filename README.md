## Deposit Plan Case

In this project, we will be looking at a method that allocates the user's fund deposits to its respective portfolio. Right now, only a maximum of two deposit plans can be held at a time.

Replit: [here](https://replit.com/@dylankhiew/deposit-plan-case)

---

### How Does it Work?
Below shows process of the method from the input it accepts, logic as well as the expected output.

#### Accepting Inputs
The method accepts two parameters, an array of deposit plans as well as an array of fund deposits. Here's a sample of the deposit plan object:

```
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
  }
```

#### Checking for Prerequisites
Since this deals with customer's finance, a strict check before any sorting/calculation is added to handle any incorrect parameters. Currently, the prerequisite checks for three things:
1. There are deposit plans (at least one).
2. The limit of deposit plans is within range (set for two at the moment).
3. Has fund deposits.

If one of the above check fails, no calculations will be done and the method returns an empty array.


#### Handling Deposit Plans
Once the prerequisite is complete and the check is successful, the method will now loop through the deposit plans, where we will then cycle through each allocation. Upon initialisation, there would be an empty array (let's call it results array) that
also acts as the output of the method.

Upon cycling through the allocations, a check will be performed to determine whether the current plan type is already available in the results array. If not, it would add that in, along with the current amount. If its present, the method would just
find the index of the exisitng plan type and sum up the amount.

The method is made with future-proofing in mind, which means for a case with multiple portfolios in the future, it should be able to output each and every allocations into the array as well (provided we update the typings in the index.d.ts). Deposit
plans is also limited to 2 as of now, but can be easily configured to a suited amount and the method would still work.

#### Output
Once the calculations are done, the reuslts array that was used to store the plan types as well as the amount are now shown as a output. Here's a sample output in a happy case scenario:

```
[
    {
        "planType": "HIGH_RISK",
        "amount": 10000
    },
    {
        "planType": "RETIREMENT",
        "amount": 600
    }
]
```

---
### Thoughts and Findings

1. I was doubting to add a check for excessive fund deposits, but using the app previously, I noticed that they would not simply allow funds more than the stated amount to be approved (e.g Amount that we state is RM100, but we added RM200. It would be rejected as it does not match the amount and reference code).
2. Initially, the method was catered for only two portfolios but noticed that the app itself offered a wide variety of portfolios and decided to rework the thinking to allow for more portfolios (eventhough its just two in the example).






