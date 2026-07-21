## IDOR: Unauthorized Access to Other Users' Baskets via ID Manipulation

### Description
Any authenticated API user can access another user's basket simply by changing the ID in the endpoint GET /rest/basket/{id}. The server validates authentication but does not validate whether the requested basket belongs to the authenticated user.

### Prerequisites:

- OWASP Juice Shop running locally via Docker
- Two registered user accounts with at least one product added to each cart
- Valid bearer token obtained via POST /rest/user/login

### Steps to Reproduce

1. Log in via Postman at POST /rest/user/login using valid credentials and retrieve the bearer token:

    - email: <test-email>
    - password: Test123!
    - token: <bearer_token>

2. In the UI, log in and add a product to generate a basket. Verify the assigned basket ID in DevTools → Network tab (example: basket ID = 6).
3. In Postman, send an authenticated request to your own basket:
    - GET /rest/basket/6
    - Authorization: Bearer <bearer_token>
    - Result: 200 OK — basket content displayed as expected.

4. Change the basket ID in the endpoint to a different user's basket:

   GET /rest/basket/7
   Authorization: Bearer <bearer_token>

5. Observe the response.

### Expected Result
The server should return 403 Forbidden or 401 Unauthorized, restricting access to baskets that do not belong to the authenticated user.

### Actual Result
The server returns 200 OK and exposes the full basket contents of another user, including product details and quantities.

### Impact
- Privacy — exposes other users' purchase information
- Authorization — no ownership validation on protected resources
- User separation — authenticated users can access any basket by iterating IDs

### Classification
Vulnerability: IDOR (Insecure Direct Object Reference)
OWASP Category: Broken Access Control

### Severity
High
### Priority
Urgent
### Environment
- Application: OWASP Juice Shop (local instance)
- Platform: Windows PC
- Tool: Postman
- Docker: bkimminich/juice-shop → http://localhost:3000