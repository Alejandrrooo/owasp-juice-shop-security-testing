# No Rate Limiting on Login Endpoint

**Project:** OWASP Juice Shop  
**Date:** 2026-10-27  
**Tester:** Alex Reyes  
**Severity:** High  
**Category:** Authentication  
**Status:** Open  

---

## Summary

The login endpoint (`/rest/user/login`) does not implement rate limiting, account lockout, or any throttling mechanism. An attacker can send unlimited authentication attempts without being blocked, enabling brute force attacks against any known account.

---

## Steps to Reproduce

1. Open Burp Suite and configure browser proxy
2. Navigate to `http://localhost:3000/#/login`
3. Attempt login with a known email (`admin@juice-sh.op`) and any wrong password
4. Intercept the POST request in Burp HTTP History
5. Send request to Intruder → Sniper attack
6. Mark only the password field as payload position:
   ```json
   {"email":"admin@juice-sh.op","password":"§test§"}
   ```
7. Load a password wordlist (100+ entries) as payload
8. Start attack

---

## Expected Result

After a defined number of failed attempts (typically 5–10), the server should:
- Block the IP temporarily
- Lock the account
- Require CAPTCHA
- Return `429 Too Many Requests`

---

## Actual Result

All 100 requests completed without any restriction. The server returned `401 Unauthorized` for each failed attempt with no indication of throttling or lockout being triggered.

```
Row  Payload     Status  Length
0    (blank)     401     20
1    123456      401     26
2    password    401     18
...
100  moscow      401     17
```

No `429` response, no account lockout, no CAPTCHA challenge at any point.

---

## Impact

An attacker who knows or enumerates a valid email address can:
- Automate password guessing at unlimited speed
- Use large wordlists (millions of entries) without risk of detection or blocking
- Eventually compromise accounts with weak or common passwords

Combined with username enumeration (separate finding), this vulnerability creates a complete brute force attack chain.

---

## Recommended Fix

- Implement rate limiting: max 5–10 failed attempts per IP per minute
- Add account lockout after N consecutive failures with unlock via email
- Require CAPTCHA after repeated failures
- Return `429 Too Many Requests` with a `Retry-After` header
- Consider alerting on unusual login activity

---

## Evidence

- **Tool:** Burp Suite Community Edition v2026.9.2 — Intruder (Sniper)
- **Target:** `POST http://localhost:3000/rest/user/login`
- **Payload position:** `password` field
- **Attempts sent:** 100
- **Blocked:** 0
- **Result:** No rate limiting, throttling, or lockout triggered

---

## Attack Strategy *(para mi)*

Este ataque demuestra la ausencia de rate limiting, no necesariamente que encontré la contraseña correcta. El hallazgo es la vulnerabilidad en sí — que el servidor acepta peticiones ilimitadas sin restricción. En un escenario real, con una wordlist de millones de entradas y tiempo suficiente, esta falta de protección permitiría comprometer cualquier cuenta con contraseña débil o común.