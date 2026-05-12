# Week 02 — Summary
## What was completed

During this week, manual testing and API validations
were executed on the system's critical flows:

- Registration and authentication
- Cart management
- Checkout process
- Resource access through ID
--- 

## Main findings
- IDOR in cart access (Broken Access Control)
- Mass Assignment during registration
- Weak backend validation
- Late validation in business logic (cart)
---

## What I learned
- Frontend validation is not enough
- The backend must validate both data and authorization
- Not all errors are visible in the UI
- It is necessary to follow the complete flow (API + UI + business logic)
--- 

## How I would improve the system
- Implement strict backend validation
- Apply user-based access control on all endpoints
- Properly validate data types and ranges
- Use consistent HTTP status codes
--- 

## Reflection
The system presents weaknesses in access control and validation,
which allows inconsistent states and unauthorized access to resources.

This analysis demonstrates the importance of validating not only functionality,
but also security and business logic in every critical flow.