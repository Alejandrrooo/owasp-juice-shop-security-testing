# User Data Extraction via SQL Injection UNION Attack

## Description
By exploiting a SQL injection vulnerability in the product search endpoint, 
it is possible to extract sensitive data from unrelated database tables — 
including user emails and hashed passwords — without authentication. 
The server constructs the SQL query using the search parameter without sanitizing it, 
allowing an attacker to inject a UNION SELECT statement that appends results 
from the Users table to the normal product query response.

## Prerequisites
- Project running with Docker on localhost
- Application accessible at http://localhost:3000/

## Steps to Reproduce
1. Open the application at `http://localhost:3000`
2. Open DevTools → Network → Fetch/XHR
3. In the browser address bar, navigate to the following URL:
```
http://localhost:3000/rest/products/search?q='))+UNION+SELECT+email,password,3,4,5,6,7,8,9+FROM+Users--
```
4. In DevTools, select the `search?q=...` request and open the **Response** tab

## Expected Result
The search endpoint should only return product data matching the search query. 
User data from other tables should never be accessible through this endpoint.

## Actual Result
The server returns a 200 OK response containing a JSON array that includes 
all registered user emails and hashed passwords extracted from the Users table, 
mixed with the regular product results.

## Impact
An unauthenticated attacker can extract the complete user database including 
emails and hashed passwords. These credentials can be used for:
- Offline password cracking attacks
- Credential stuffing against other platforms
- Account takeover if passwords are weak or reused
- Full compromise of all user accounts in the system

## Classification
- Vulnerability: SQL Injection — UNION-based Data Extraction
- OWASP: A03:2021 - Injection
- Severity: Critical
- Priority: Urgent

## Environment
- Application: OWASP Juice Shop (local instance)
- Platform: Windows PC
- Browser: Google Chrome
- Docker: bkimminich/juice-shop → http://localhost:3000