# Test Approach
## General Approach
The validation of critical system workflows is the foundation of the testing approach, focusing on scenarios that have a significant impact on security, data, and business operations. The goal is not to achieve complete coverage, but to perform a focused assessment aimed at preventing major failures.

## Strategy by Test Type
- Manual Testing:
    Initial exploration of critical workflows to understand how the system behaves in real-world conditions and to identify obvious issues.
- API Testing:
    Monitoring access controls, verifying business rules, and managing data without relying on the user interface.
- Automated Testing:
    Selected coverage of critical and repetitive scenarios that enables early detection of regressions.

## Automation Criteria
A scenario is automated when it:
- Is critical for security or business operations
- Is stable and repeatable
- Helps identify issues at an early stage
Scenarios that are complex, unstable, or have a low impact continue to be evaluated manually.

## Types of Evidence
- Screenshots
- Request and response logs
- Execution logs
- Automated test results