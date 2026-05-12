 # Evaluated flow

Validation of cart business rules through API.

## Tests performed

Direct modifications were sent to the endpoint:
PUT /api/BasketItems/{id}
Testing different values in the quantity field.


<table>
  <tr>
    <th>Case</th>
    <th>Request</th>
    <th>API Result</th>
    <th> UI Behavior</th>
  </tr>
  <tr>
    <td>5</td>
    <td>{quantity:5}</td>
    <td>200 OK</td>
    <td>valid quantity</td>
  </tr>
    <tr>
    <td>6</td>
    <td>{quantity:6}</td>
    <td>400 Bad Request</td>
    <td>maximum limit applied</td>
  </tr>
    <tr>
    <td>0</td>
    <td>{quantity:0}</td>
    <td>200 OK</td>
    <td>UI displays 0</td>
  </tr>
    <tr>
    <td>-1</td>
    <td>{quantity:-1}</td>
    <td>200 OK</td>
    <td>UI displays -1</td>
  </tr>
    <tr>
    <td>1.5</td>
    <td>{quantity:1.5}</td>
    <td>200 OK</td>
    <td>UI displays decimal value</td>
  </tr>

</table>

## Observation

The API accepts invalid values for quantity:

- Negative numbers
- Zero
- Decimal values

These values are stored and reflected in the cart interface.

However, when attempting to complete the order, the checkout process blocks the transaction, preventing the order from being processed with invalid values.

## Conclusion

The system implements business rule validation at a late stage, allowing inconsistent cart states but detecting them during checkout.

This indicates incomplete validation in the cart endpoint, since the restriction should be applied when modifying quantity, not only when completing the purchase.