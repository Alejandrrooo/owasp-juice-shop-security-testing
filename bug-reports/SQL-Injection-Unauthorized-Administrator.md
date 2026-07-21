# Unauthorized Administrator Access via SQL Injection

## Description
By exploiting an SQL injection vulnerability in the email field of the login form, 
it is possible to authenticate as an administrator without valid credentials. 
The server constructs the SQL query using the user's input 
without sanitizing it, allowing the user to manipulate the logic and bypass 
password validation. As a result, the system returns a 
valid session token with administrator privileges.

## Prerequisites
- Project running with Docker on localhost
- Application accessible at http://localhost:3000/

## Steps to reproduce
1. Access the login form
2. Open DevTools > Network > Fetch/XHR
3. In the “email” field, enter: ' OR '1'='1'--
4. In the “password” field, enter any value
5. Click “Login”
6. In DevTools, select the “login” request and review the response

## Expected Result
The server should reject the request and return a 401 Unauthorized status code 
when a malicious entry is entered in the “email” field.

## Actual Result
The server returns a 200 OK response with a valid session token and the administrator’s email address: admin@juice-sh.op

## Impact
Unauthorized administrative access allows full control over 
users, products, and orders. An attacker could manipulate or delete data, escalate privileges, and cause irreversible damage to the system and end users.

## Classification
- Vulnerability: SQL Injection
- OWASP: A03:2021 - Injection
- Severity: Critical
- Priority: Urgent

## Environment
- Application: OWASP Juice Shop (local instance)
- Platform: Windows PC
- Browser: Google Chrome
- Docker: bkimminich/juice-shop → http://localhost:3000