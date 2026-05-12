# Critical Flows

## Criteria for defining critical flows
- Exposure of sensitive data
- Loss of system control
- Direct impact on revenue or profitability
- Lack of trust and insecurity while using the application

## Flow 1: Registration / Login

**Flow objective:**  
Allow the correct use of credentials approved by the system to authenticate the user and grant legitimate access to the application.

**Value generated:**  
Validating this flow enables access to the rest of the system and guarantees the proper use of user data, reducing risks of unauthorized access.

**What is considered a critical failure?:**  
- Unauthorized access to accounts
- Visualization or modification of other users' data
- Loss or blocking of user accounts

## Flow 2: User account access

**Flow objective:**  
Allow the management of personal information, order visualization, and secure purchases.a.

**Value generated:**  
Strengthens user and administrator trust in the correct handling of personal information and system operations.

**What is considered a critical failure?:**  
- Loss of account access
- Exposure or modification of other users' data
- Failures in the account recovery process 

## Flow 3: Purchase process

**Flow objective:**  
Allow the correct selection of products, quantities, and prices for the proper preparation of an order.

**Value generated:**  
Directly impacts conversion and the correct preparation of orders within the system.

**What is considered a critical failure?:**  
- Incorrect quantities or prices
- Unauthorized price modification
- Inconsistent order states

## Flow 4: Checkout / Payment

**Flow objective:**  
Complete the purchase transaction correctly, ensuring payment integrity and process stabilit

**Value generated:**  
Represents direct business revenue and the most critical point of the purchase flow.

**What is considered a critical failure?:**  
- Incorrect prices during payment
- Duplicate or inconsistent charges
- Improper storage of sensitive information (CVV/CVC)
- Irregular charges to the user

## Flow 5: Administrator access and actions

**Flow objective:**  
Allow control and management of the application by users with administrative privileges.

**Value generated:**  
Guarantees the correct operation and administration of the business at the level of users, products, and orders.

**What is considered a critical failure?:**  
- Unauthorized administrative access
- Improper data manipulation
- Identity theft
- Irreversible changes to the system


