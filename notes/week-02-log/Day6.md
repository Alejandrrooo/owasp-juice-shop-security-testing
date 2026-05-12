# Vulnerability Summary
## Context

Security assessment performed on OWASP Juice Shop,
focused on critical flows: authentication, cart, and resource access.

---  
## Identified vulnerabilities
### 1. IDOR (Broken Access Control)
- Severity: High
- Description: Access to other users' carts through ID manipulation.
- Impact: Data exposure and unauthorized access to resources.
- Evidence: GET /rest/basket/{id} returns 200 for unrelated IDs.
---
### 2. Mass Assignment
- Severity: Medium
- Description: The backend allows unauthorized fields during registration.
- Impact: Risk of data manipulation.
- Evidence: Additional fields were sent without validation.
---
### 3. Weak backend validation
- Severity: Medium
- Description: The API accepts invalid data and responds with inconsistent HTTP status codes.
- Impact: May affect clients and request handling logic.
- Evidence: 200 OK responses containing error messages.
--- 
### 4. Late cart validation
- Severity: Medium
- Description: The system allows invalid cart values and blocks them only during checkout.
- Impact: Inconsistent states and poor user experience.
- Evidence: Invalid quantity values accepted by API and UI.
---
## General conclusion

The system presents weaknesses mainly in:
- Access control
- Backend data validation

This indicates an architecture that validates inconsistently
and does not properly apply authorization controls.

### Recommendations
- Implement strict backend validation
- Apply access control based on resource ownership
- Validate data types and ranges
- Use consistent HTTP status codes for errors