# OWASP Juice Shop — QA Security Analysis
## Status
🚧 Work in progress

## Overview
This repository demonstrates how I approach quality assurance and security testing on a real application — prioritizing critical flows, risk analysis, and decision-making based on business impact.
It is not a CTF writeup. The goal is to document a structured QA process: understanding the system, identifying risks, designing tests, and communicating findings clearly.

## System Under Test
### OWASP Juice Shop — a deliberately vulnerable web application designed for security training.

The original source code belongs to its respective authors and is available in the official OWASP Juice Shop repository.
This repository contains only the analysis, documentation, testing strategy, and automation work performed from a QA perspective.

## Key Findings
Security assessment performed on critical flows: authentication, cart management, checkout, and resource access.
<table>
  <tr>
    <th>#</th>
    <th>Vulnerability</th>
    <th>Severity</th>
    <th>OWASP Category</th>
  </tr>
  <tr>
    <td>1</td>
    <td>IDOR — any authenticated user can access other users' carts by modifying the basket ID</td>
    <td>High</td>
    <td>Broken Access Control</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Mass Assignment — registration endpoint accepts unauthorized fields (role, isAdmin, credits)</td>
    <td>Medium</td>
    <td>Broken Access Control</td>
  </tr>
    <tr>
    <td>3</td>
    <td>No password policy — API accepts single-character passwords with no complexity validation</td>
    <td>High</td>
    <td>Weak Authentication</td>
  </tr>
    <tr>
    <td>4</td>
    <td>Weak backend validation — API accepts negative, zero, and decimal quantities in cart</td>
    <td>Medium</td>
    <td>Improper Input Validation</td>
  </tr>
    <tr>
    <td>5</td>
    <td>Inconsistent HTTP status codes — validation errors returned with 200 OK instead of 4xx</td>
    <td>Medium</td>
    <td>Improper Input Validation</td>
  </tr>
    <tr>
    <td>6</td>
    <td>No rate limiting — unlimited failed login attempts with no lockout or delay</td>
    <td>Medium</td>
    <td>Authentication Hardening</td>
  </tr>
</table>

General conclusion: The system validates inconsistently between UI and API layers. The frontend applies basic controls, but they can be bypassed through direct API interaction. Main risks are concentrated in access control and backend data validation.

## Scope
### In scope
- Manual exploration and API testing of critical flows
- Security risk identification and classification (OWASP)
- Test case design and execution
- Selective automation of critical scenarios

### Out of scope
- Development or modification of the application source code
- Advanced exploitation for offensive purposes
- CTF-style challenges without real business impact


### Tools Used

<table>
  <tr>
    <th>Tool</th>
    <th>Purpose</th>
  </tr>
  <tr>
    <td>Postman</td>
    <td>API testing and manual exploration</td>
  </tr>
  <tr>
    <td>Playwright</td>
    <td>Test automation</td>
  </tr>
    <tr>
    <td>Chrome DevTools</td>
    <td>Network inspection and request analysis</td>
  </tr>
    <tr>
    <td>Docker</td>
    <td>Local environment setup</td>
  </tr>
</table>

## How to Replicate the Environment
### OWASP Juice Shop runs locally via Docker.
    bash# 
    
    Start the container
        docker run -d --name juice-shop -p 3000:3000 bkimminich/juice-shop

    # Stop
        docker stop juice-shop

    # Restart
        docker start juice-shop

    Application available at: http://localhost:3000

## Repository Structure
    security-testing-owasp-juice-shop/
        README.md
        bug-reports/
          IDOR in basket endpoint
        analysis/
          01-system-context.md
          02-critical-flows.md
          03-security-risk-map.md
        strategy/
          evidence-rules.md
          scope.md
          test-approach.md
        notes/
          week-01-log/
          week-02-log/
            Day1.md  — Registration & Authentication
            Day2.md  — Purchase flow (UI)
            Day3.md  — Cart business rules (API)
            Day4.md  — IDOR in basket endpoint
            Day5.md  — Findings classification
            Day6.md  — Vulnerability summary
        week-03-log/
        juice-shop-playwright/
          tests/
            auth/
              access-home.spec.js
              login-invalid.spec.js
              login-valid.spec.js
              logout.spec.js
              register-duplicate-email.spec.js
              register-user.spec.js          
            cart/
              add-product.spec.js
              remove-product.js
              update-quantity.spec.js
            helpers/
              doRegister.js
              goToLogin.js
              goToRegister.js
              login.js
            utils/
              dataGenerator.js
