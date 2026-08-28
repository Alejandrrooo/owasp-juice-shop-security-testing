## Toast notification persists too long and overlaps the Submit button on the Add New Address page

### Description:
After adding a product to the cart, a toast notification ("Placed [product] into basket") appears on the Add New Address page. The notification takes longer to disappear than the test takes to execute, causing it to overlap the Submit button and block interaction. This was identified during automated testing with Playwright.

### Prerequisites:
- OWASP Juice Shop running locally via Docker
- Project open in VSCode
- Git Bash available

### Steps to Reproduce:

1. Open Git Bash and navigate to the test folder:
cd "security-testing-owasp-juice-shop\juice-shop-playwright\tests\checkout"
2. Run the test in debug mode:
npx playwright test addAddress.spec.js --debug
3. Press Play in the Playwright Inspector window
4. Observe the Add New Address page while the form is being filled

### Expected Result:
The toast notification should disappear before the user reaches the Add New Address page, or its duration should be short enough not to overlap interactive elements like the Submit button.

### Actual Result:
The toast notification remains visible on the Add New Address page and overlaps the Submit button, blocking interaction until it disappears automatically.

# Severity: 
Low
# Priority: 
Low

### Environment:
Application: OWASP Juice Shop (local instance)
Tool: Playwright + VSCode
Browser: Chrome
Docker: bkimminich/juice-shop → http://localhost:3000