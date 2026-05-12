#  Technical Assessment
Evaluated area: Registration and Authentication
Application: OWASP Juice Shop (local)
Approach: Manual exploration + API testing (Postman)

## Executive Summary

During the evaluation of the registration and authentication flow, multiple inconsistencies were identified between client-side validation (UI) and backend validation (API).

The server accepts invalid data, skips critical validations, and allows the inclusion of unexpected sensitive fields (mass assignment).

The lack of robust server-side validation, absence of password policies, and lack of rate limiting significantly increase the risk of system abuse.

#  Main Findings
## 1️ Lack of robust server-side validation

### Description:
- The API (POST /api/Users) allows:
- Emails with invalid format
- Extremely long emails
- Passwords below the expected minimum length
- Password different from passwordRepeat
- Missing securityQuestion
- Empty securityAnswer

While the UI blocks some of these cases, the API accepts them with 201 Created.

### Impact:
- Validation mainly occurs in the frontend, which allows an attacker to:
- Create invalid accounts
- Corrupt data integrity
- Bypass business rules defined in the UI

### Classification
- Server-side validation bypass

 ## 2️ Mass Assignment (Overposting)
### Description
- The API allows sending and processing additional fields such as:
- "role": "admin"
- "isActive": false
- "id": 1
- "credits": 999999
- "isAdmin": true

The server responds with 201 Created without rejecting those fields.

Later, the user can log in and obtain a valid token.

** Additional validation is still required to confirm whether these fields directly affect user roles or privileges..

### Potential Impact
- Depending on how the backend processes these values:
- Privilege escalation
- Account state manipulation
- Identity inconsistencies
- Business logic alteration

### Classification
- Mass Assignment / Broken Access Control

## 3️ Non-existent password policy
Description

The API allows very weak passwords (example: 1234) and does not apply additional controls.

- The UI does not warn about weak password strength.

### Impact
- In the absence of:
- Rate limiting
- Failed attempt lockout
- Mandatory 2FA
### The risk of:
- Credential stuffing
- Brute force
- Account takeover

### Increases considerably.

### Classification

Weak Authentication Policy

## 4. Lack of Rate Limiting

During multiple failed authentication attempts:

- No account lockout was detected
- No progressive delay was detected
- No dynamic CAPTCHA was detected
### Impact
- Allows unrestricted automation of login attempts.
### Classification
- Authentication Hardening Deficiency
## General System Assessment
### The backend presents:
- Inconsistent server-side validation
- Acceptance of unauthorized fields (mass assignment)
- Lack of strong password policies
- Absence of anti-bruteforce mechanisms

The UI implements basic controls, but they can be easily bypassed through direct interaction with the API.

### In terms of security maturity:
- Level: Low to Medium
    - Due to the lack of basic controls in authentication and incoming data validation.
- Main risk: Registration and authentication manipulation.

## Day 1 Conclusion

The registration and authentication flow presents multiple structural weaknesses in server-side validation and incoming data control.

The architecture allows direct payload manipulation, showing a lack of sanitization and strict control of allowed fields.

### Recommended actions:
- Implement strict backend validation
- Apply a whitelist of allowed fields
- Establish a strong password policy
- Implement rate limiting and progressive lockout
