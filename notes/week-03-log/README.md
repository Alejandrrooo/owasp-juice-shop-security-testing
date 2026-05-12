## What do I want to demonstrate with automation in this project?

Demonstrate the ability to identify which tests should be automated, prioritizing critical flows, regression testing, and repetitive scenarios.

Use automation to validate functional behaviors and detect visible signs of security risks in the user interface.

## Which critical flow will I use as a base?

Registration, because from the UI it has certain issues related to allowed characters, but also from the API, since the backend has critical failures that represent a risk to data integrity.

## What evidence do I want to obtain?
- UI messages
- Inconsistent behavior
- Incorrectly accepted data
- System responses
- State changes
- Screenshots / logs

#### Evidence of inconsistencies between UI and backend validations, acceptance of invalid data, and system behavior with inputs outside the expected rules.

## What part is functional and what part is security?
### Functional
- Registration
- Login
- Navigation
- Add to cart
### Security (better definition)
- Data validation (input validation)
- State manipulation
- UI vs backend inconsistencies
- Access control
- Data integrity
