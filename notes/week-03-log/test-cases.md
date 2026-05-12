## Case 1: Registration
- Name: Registration with inconsistent validations
- Type: Hybrid (functional + security)
- Risk: Acceptance of invalid data or data outside the defined rules, which can compromise system integrity

    ### What would you observe in the UI:
    - validation messages
    - behavior when entering invalid data
    - differences between what is allowed in the UI vs backend
    ### Why automate it:
    - it is a critical flow
    - highly repetitive
    - helps detect validation regressions

## Case 2: Login
- Name: Login with invalid credentials
- Type: Security / functional
- Risk: Unauthorized access due to incorrect credential validation

    ### What would you observe in the UI:
    - error messages
    - access blocking
    - system behavior with incorrect credentials
    ### Why automate it:
    - critical flow
    - prevents unauthorized access
    - useful for regression

## Case 3: Cart
- Name: Product quantity manipulation in cart
- Type: Security
- Risk: Quantity alteration outside business rules

    ### What would you observe in the UI:
    - real-time quantity changes
    - behavior when proceeding to checkout
    - automatic system correction
    ### Why automate it:
    - validates business rule integrity
    - detects inconsistencies between intermediate state and final validation
    - ideal case for regression