# Day 2 Manual Exploration: Purchase Process (UI) 

## Technical evidence (DevTools / Network)

- When modifying quantities through the UI controls (+/-), the UI sends PUT /api/BasketItems/{id} with the new quantity value.
- A server-side business rule was identified: maximum 5 units per product.
Example: PUT /api/BasketItems/20 with payload { "quantity": 6 } returns the message:
"You can order only up to 5 items of this product."

### Quality observation (API contract)
- The server returned 200 OK even though the body contains an "error" property.
- This behavior is inconsistent with REST conventions, where a validation error is normally reflected with a 4xx status code (example: 400/422).

### Conclusion

The backend applies business validation for quantity limits. However, the error signaling through HTTP status codes is inconsistent and may affect API consumers and automated testing.