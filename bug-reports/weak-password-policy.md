## Missing Server-Side Password Validation

## Description
The registration endpoint accepts any password regardless of length, character type, or complexity. No minimum or maximum character length is enforced, and no combination of letters, numbers, or special characters is required. This validation bypass occurs at the API level — the UI applies basic frontend validation, but it can be bypassed through direct API interaction.

### Prerequisites
- OWASP Juice Shop running locally via Docker
- Postman installed and configured

### Steps to Reproduce

    1. Open Postman and create a new request:
        - Method: POST
        - Endpoint: /api/Users

        - Body (JSON):
            json {
                "email": "correo@correo.com",
                "password": "a",
                "passwordRepeat": "a",
                "securityQuestion": {
                    "id": "1",
                    "answer": "test"
                    }
                }

    2. Send the request.
    3. Observe the response.

### Expected Result
The server should return 400 Bad Request with a validation message requiring a minimum of 8 characters and a combination of letters, numbers, and at least one special character (e.g. !"#$%&/()=?-_.,).

### Actual Result
The server returns 201 Created and successfully registers the user with a single-character password, with no validation error.

### Impact
- Weak passwords increase vulnerability to brute force and credential stuffing attacks
- No complexity requirements make accounts easy to compromise
- Risk of unauthorized account access and account takeover
- Validation exists only in the frontend — direct API interaction bypasses all password rules

### Classification

- Vulnerability: Missing Server-Side Password Validation / Server-Side Validation Bypass
- OWASP Category: Broken Authentication — Weak Password Policy

### Severity
High

### Priority
Urgent

### Environment

- Application: OWASP Juice Shop (local instance)
- Platform: Windows PC
- Tool: Postman
- Docker: bkimminich/juice-shop → http://localhost:3000