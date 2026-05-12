## Findings and classification
### 1. Mass Assignment
- OWASP: Broken Access Control
- Description: The server accepts invalid data, skips critical validations, and allows the inclusion of unexpected sensitive fields.

### 2. Weak backend validation
- OWASP: Improper Input Validation
- Description: The backend applies business validation for quantity limits. However, the error signaling through HTTP status codes is inconsistent and may affect API consumers and automated testing.

### 3. Late cart validation
- OWASP: Improper Input Validation
- Description: The system applies business rule validation at a late stage, allowing inconsistent cart states but detecting them during checkout.

### 4. IDOR in /rest/basket/{id}
- OWASP: Broken Access Control
- Description: The endpoint requires authentication, but it does not apply authorization control over the ownership of the requested resource.

### Conclusion
The main system risks are concentrated in:
- Access control
- Data validation

This indicates inconsistent backend validation and lack of authorization control over resources.