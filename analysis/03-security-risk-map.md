# Security Risk Map

This document identifies the main security risks
associated with the critical flows of OWASP Juice Shop, prioritized
from the perspective of business impact and QA decision-making.

## 2. Critical flows
1. Registration / Login
2. User account access
3. Purchase process
4. Checkout / Payment
5. Administrator access and actions

## 3. Main Table

<table><caption><h3>Flow 1: Registration/Login</h3></caption>
 <thead>
   <tr>
	<th>Flow</th>
	<th>Risk</th>
    <th>Technique</th>
    <th>Business Impact</th>
    <th>Test Type</th>
    <th>Automatable?</th>
   </tr>
 </thead>
 <tbody>
 
<tr>
	<td>Registration / Login</td>
	<td>Authentication bypass</td>
	<td>SQL Injection</td>
    <td>Unauthorized access to accounts</td>
    <td>API / UI</td>
    <td>Yes</td>
</tr>
<tr>
	<td>Registration / Login</td>
	<td>Credential stuffing</td>
	<td>Brute force</td>
    <td>Mass account compromise</td>
    <td>API</td>
    <td>Partial</td>
</tr>
<tr>
	<td>Registration / Login</td>
	<td>Session fixation</td>
	<td>Session manipulation</td>
    <td>Session hijacking</td>
    <td>UI</td>
    <td>No</td>
</tr>

</tbody></table>

<table><caption><h3>Flow 2: User account access</h3></caption>
 <thead>
 </thead>
 <tbody>
<tr>
	<td>Account access</td>
	<td>IDOR</td>
	<td>ID manipulation</td>
    <td>Exposure of personal data</td>
	<td>API</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Account access</td>
	<td>Broken access control</td>
	<td>Lack of role validation</td>
    <td>Access to other users' information</td>
    <td>API / UI</td>
    <td>Yes</td>
</tr>
  
 </tbody></table>

<table><caption><h3>Flow 3: Purchase flow</h3></caption>
 <thead>

 </thead>
 <tbody>
<tr>
	<td>Purchase process</td>
	<td>Cart manipulation</td>
	<td>Input tampering</td>
    <td>Quantity alteration</td>
	<td>UI</td>
	<td>Partial</td>
</tr>
<tr>
	<td>Purchase process</td>
	<td>Negative quantities</td>
	<td>Business logic flaw</td>
    <td>Economic loss</td>
    <td>API</td>
    <td>Yes</td>
</tr>
  
 </tbody></table>

 <table><caption><h3>Flow 4: Checkout/Payment</h3></caption>
 <thead>

 </thead>
 <tbody>
<tr>
	<td>Checkout</td>
	<td>Price manipulation</td>
	<td>Business logic flaw</td>
    <td>Direct revenue loss</td>
	<td>API</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Checkout</td>
	<td>Request replay</td>
	<td>Transaction resubmission</td>
    <td>Inconsistent charges</td>
    <td>API</td>
    <td>Partial</td>
</tr>
  
 </tbody></table>

  <table><caption><h3>Flow 5: Administrator access and actions</h3></caption>
 <thead>

 </thead>
 <tbody>
<tr>
	<td>Admin</td>
	<td>Privilege escalation</td>
	<td>Role bypass</td>
    <td>Total system control</td>
	<td>API</td>
	<td>Yes</td>
</tr>
<tr>
	<td>Admin</td>
	<td>Mass assignment</td>
	<td>Unprotected fields</td>
    <td>Unauthorized modification</td>
    <td>API</td>
    <td>Yes</td>
</tr>  
 </tbody></table>

 ## 4. Risk ranking
 Priority risks by impact
1. Privilege escalation for administrator access
2. Price manipulation during checkout
3. Authentication bypass during login

These risks are prioritized because of their direct impact on security, economic loss, and system control.

 ## 5. Out of scope
Risks out of scope
- Denial of Service (DoS) attacks
- Advanced cryptography
- Infrastructure or network exploitation
- Discovery of 0-day vulnerabilities

These scenarios are considered out of scope for the project because they are not aligned with the QA objective focused on critical business flows.

Note: This risk map is used as a base to define
the scope of manual and automated testing in the
next phases of the project.
