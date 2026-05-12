# OWASP Juice Shop QA Security Analysis

## Status
🚧 Work in progress

## Overview
This repository contains:

### 1. Project objective:

This repository demonstrates how I approach quality, security, and automation in a real application, prioritizing critical flows, risk analysis, and decision-making based on business impact.

### 2. System under test

This project uses OWASP Juice Shop as the target application
for executing quality and security testing.

The original source code belongs to its respective authors and is
available in the official OWASP Juice Shop repository.

This repository only contains the analysis,
documentation, testing strategy, and automation work performed
from a QA perspective.

### 3. Repository scope (analysis + strategy + testing)

#### This repository covers:

System analysis and business flow understanding
Identification of critical flows and security risks
Impact-oriented manual exploration
Selective automation of critical scenarios
Result analysis and conclusions from a business perspective

#### Out of scope:

Development or modification of the application source code
Advanced vulnerability exploitation for offensive purposes
Solving CTF-style challenges without impact on real flows
### 4. Repository structure
    security-testing-owasp-juice-shop/
        README.md
        analysis/
            01-system-context.md
            02-critical-flows.md
            03-security-risk-map.md
        strategy/
            evidence-rules.md
            scope.md
            test-approach.md
        notes/
            week-01-log/
                week-01-log.md
            week-02-log.md/
                Day1.md
                Day2.md
                Day3.md
                Day4.md
                Day5.md
                Day6.md
            week-03-log.md/
                README.md
                test-cases.md
        juice-shop-playwright
            tests/
                auth/
                    access-home.spec.js
                    login-invalid.spec.js
                    login-valid.js
                    logout.spec.js
                    register-duplicate-email.spec.js
                cart/
                    add-product.spec.js
                helpers/
                    doRegister.js
                    goToLogin.js
                    goToRegister.js
                    login.js
                utils/
                    dataGenerator.js
                Videos/



5. How to replicate the environment
How to replicate the environment

The system under test (OWASP Juice Shop) runs locally using Docker.

Start the container
bash

docker run -d --name juice-shop -p 3000:3000 bkimminich/juice-shop

The application will be available at:
http://localhost:3000

Stop the container

docker stop juice-shop

Start the container again

docker start juice-shop
