# OWASP Top 10 - 2021 (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Learn about and exploit each of the OWASP Top 10 vulnerabilities; the 10 most critical web security risks.

## Core Concepts Covered
1. What is OWASP?
    - OWASP stands for the Open Worldwide Application Security Project.
    - It’s a nonprofit foundation focused on improving software security.
    -  OWASP provides:
        * Free tools, documentation, and community-driven resources
        * The OWASP Top 10, a widely respected list of the most critical web application security risks
        * Guidance for developers, testers, and security professionals to build safer applications
2. OWASP Top 10 - Broken Access Control
    - Broken Access Control occurs when unauthorized users can access restricted resources or perform actions they shouldn’t be allowed to.
    - This includes:
        * Viewing sensitive data from other users
        * Accessing admin-only features or private content
        * Performing actions like deleting data or changing permissions
    - **Why It Matters**
        * Access control is supposed to enforce user roles and permissions
        * If broken, attackers can bypass these checks and exploit the system
    - **IDOR (Insecure Direct Object Reference) a key subcategory of Broken Access Control:**
        * IDOR (Insecure Direct Object Reference) is a vulnerability where an application exposes internal object identifiers (like user IDs, account numbers, filenames) in the URL or request parameters without verifying if the user is authorized to access them.
        * The app uses predictable identifiers in the URL or request:
            * `https://bank.tfh.com/account?id=111111`
        * If the app doesn’t check whether the logged-in user owns that account, an attacker can change the ID:
            * `https://bank.tfh.com/account?id=222222`
        * Result: 
            * The attacker sees another user's private data—like savings, account number, or personal info.
3. OWASP Top 10 – Cryptographic Failures
    - Cryptographic failures occur when sensitive data is not properly protected using encryption or secure algorithms either due to weak implementation or complete absence of encryption.
    - **Key Concepts**
        * **Data in Transit:**
            * When accessing email or web apps via browser, encryption (eg, HTTPS) protects data from being intercepted.
            * Without it, attackers can sniff network packets and steal credentials or messages.
        * **Data at Rest:**
            * Emails and files stored on servers should be encrypted.
            * Prevents unauthorized access if the server is compromised.
        * **Man-in-the-Middle Attacks:**
            * Occur when attackers intercept unencrypted communication between client and server.
            * Encryption helps prevent these attacks.
    -  **Common Causes of Cryptographic Failures**
        * Using outdated or weak algorithms (eg, MD5, SHA1)
        * Not encrypting sensitive data at all
        * Poor key management or insecure storage
        * Accidental data exposure due to misconfigurations
4. OWASP Top 10 – Injection
    - Injection flaws occur when user-controlled input is treated as executable code or commands by the application. 
    - This allows attackers to manipulate backend systems.
    - **Common Types of Injection**
        * **SQL Injection:**
            * Attacker injects SQL code into queries.
            * Can read, modify, or delete database records.
            * May expose sensitive data like passwords or credit card info.
        * **Command Injection:**
            * Attacker injects system commands via input fields.
            * Can execute arbitrary commands on the server.
            * May lead to full system compromise.
    - **Prevention Techniques**
        * **Allow List Filtering:**
            * Only accept known-safe input values.
            * Reject anything not explicitly permitted.
        * **Input Stripping:**
            * Remove dangerous characters (eg, `;`,`--`) before processing.
        * **Use Trusted Libraries:**
            * Avoid manual sanitization.
            * use vetted libraries for input validation and query handling.
5. OWASP Top 10 – Insecure Design
    - Insecure design refers to vulnerabilities built into the architecture or logic of an application before any code is written.
    - It’s not about bugs or misconfigurations, but about unsafe design decisions that make the app inherently exploitable.
    - **Key Risks**
        * Shortcuts or features that bypass authentication or authorization
        * Lack of proper validation or threat modeling during early development
        * Attackers can exploit these flaws to access sensitive data or perform unauthorized actions
    - **Prevention Tips**
        * Apply Secure Software Development Framework (SSDF) principles early in the lifecycle.
        * Focus on threat modeling, design validation, and secure architecture before implementation.
6. OWASP Top 10 – Security Misconfiguration
    - Security misconfiguration happens when default settings, exposed features, or weak configurations leave systems vulnerable to attack.
    - It’s one of the most common and easily exploitable flaws.
    - **Common Examples**
        * Cloud misconfigurations (eg, public S3 buckets)
        * Unpatched software vulnerabilities
        * Default accounts/passwords still enabled
        * Unnecessary services or ports left open
        * Verbose error messages revealing stack traces or internal logic
    - **Prevention Tips**
        * Disable unused features and ports.
        * Remove default credentials.
        * Patch regularly.
        * Restrict access to internal tools (eg, debug consoles).
        * Use secure deployment practices and configuration audits.
7. OWASP Top 10 – Identification and Authentication Failures
    - These vulnerabilities occur when authentication mechanisms are weak, misconfigured, or missing, allowing attackers to gain unauthorized access to user accounts or systems.
    - **Common Attack Methods**
        * **Brute Force Attacks:**
            * Attackers try many password combinations until one works.
        * **Credential Stuffing:**
            * Reuse of stolen credentials from other breaches to log into accounts.
        * **Weak Session Cookies:**
            * Poorly secured cookies can be hijacked to impersonate users.
    - **Prevention Techniques**
        * Use authentication mechanisms tailored to your threat model.
        * Implement Multi-Factor Authentication (MFA).
        * Enforce account lockout after repeated failed login attempts.
        * Use secure and verified password recovery flows.
8. OWASP Top 10 – Software and Data Integrity Failure
    - This vulnerability arises when systems fail to verify the integrity of software or data.
    - Allowing attackers to tamper with files, updates, or components without detection.
    - **Key Concepts**
        * **Software Integrity Failures:**
            * Occur when applications use unverified or tampered software (eg, plugins, updates, third-party packages).
            * Attackers may inject malicious code into the supply chain.
        * **Data Integrity Failures:**
            * Happen when downloaded or transferred data isn’t checked for authenticity.
            * Can lead to corrupted or malicious data being processed.
    - **Prevention Tips**
        * Always verify file integrity using cryptographic hashes.
        * Use signed updates and trusted repositories.
        * Implement supply chain security checks during development and deployment.
9. OWASP Top 10 – Security Logging and Monitoring Failures
    - These failures occur when applications don’t log critical security events or fail to monitor them effectively making it hard to detect, investigate, or respond to attacks.
    - **Why Logging Matters**
        * Helps detect:
            * Regular attacks (eg, brute force, scanning)
            * Targeted attacks (eg, privilege escalation, data theft)
        * Without logging, attackers can operate undetected.
    - **What to Log**
        * HTTP status codes
        * Timestamps
        * Usernames
        * IP addresses
        * Page/filename access
        * Request parameters
    - **Suspicious Activity to Monitor**
        * Multiple failed login attempts
        * Unauthorized access to sensitive data
        * Unusual or spoofed User-Agent headers
        * High-frequency or pattern-based requests
    - **Prevention Tips**
        * Log security-relevant events across all layers.
        * Monitor logs in real-time or near-real-time.
        * Use alerting systems for anomalies.
        * Store logs securely and review them regularly.
10. OWASP Top 10 – Server-Side Request Forgery (SSRF)
    - SSRF occurs when an attacker tricks a server-side application into sending unauthorized requests to internal or external systems using attacker-controlled input.
    - **How SSRF Works**
        * Web apps often fetch URLs or data from remote sources (eg, APIs, SMS services).
        * If the app exposes a `server` parameter and doesn’t validate it, attackers can redirect requests to:
            * Internal services
            * External malicious endpoints
            * Sensitive infrastructure
    - **Prevention Tips**
        * Whitelist allowed domains for outbound requests.
        * Validate and sanitize user input especially URLs.
        * Use network segmentation and firewall rules to isolate sensitive services

## Learning and Reflections
- Learned about OWASP and its top 10 vulnerabilites.





















































