## Evaluated endpoint

GET /rest/basket/{id}

### Test performed

Cart access was tested using different authenticated users with a valid bearer token.

### Test case

User: qaa91136c5@test.com
- Successfully authenticated
- Requested: /rest/basket/7
- Result: 200 OK
- The cart did not belong to the user account
### Result
- Any authenticated user was able to access other users' carts
- By manually modifying the cart ID, the server returned 200 OK
- It was possible to access carts with IDs different from the user's own (example: 3, 4, 6, 7, 8, 9)
### Impact
- Exposure of other users' information
- Unauthorized access to private resources
- Lack of authorization validation based on resource ownership
### Classification
IDOR / Broken Access Control

### Severity

High

Affects:
- Privacy
- Authorization
- User separation
### Technical conclusion

The endpoint requires authentication, but it does not apply authorization control over the ownership of the requested resource.