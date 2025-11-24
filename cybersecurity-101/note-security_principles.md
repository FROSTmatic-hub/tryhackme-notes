# Security Principles (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 24 min

## Objective
Learn about the security triad and common security models and principles.

## Core Concepts Covered
1. Security Principles
    - Security principles are the fundamental guidelines used to design, implement, and evaluate secure systems. 
    - They help ensure that digital assets are protected against threats and vulnerabilities.
    - **Key Goals of Security:**
        * Prevent unauthorized access
        * Preserve data integrity
        * Ensure availability of services
        * Enable accountability and trust
2. CIA Triad
    - The CIA Triad is the cornerstone of information security, representing three essential pillars:
        1. **Confidentiality**
            * Ensures that information is accessible only to authorized users.
            * Prevents data leakage or exposure.
            * Techniques: encryption, access controls, classification levels.
        2. **Integrity**
            * Ensures that data remains accurate and unaltered.
            * Detects unauthorized modifications.
            * Techniques: hashing, checksums, digital signatures.
        3. **Availability**
            * Ensures that systems and data are accessible when needed.
            * Protects against downtime, denial-of-service attacks, and hardware failures.
            * Techniques: redundancy, failover systems, backups.
    - **Beyond CIA**
        - Going one more step beyond the CIA security triad, we can think of:
            1.  **Authenticity**
                * Verifies that data, users, or systems are genuine.
                * Prevents spoofing or impersonation.
                * Techniques: digital certificates, biometric authentication, tokens.
            2.  **Non-Repudiation**
                * Ensures that actions or communications cannot be denied by the sender.
                * Provides proof of origin and delivery.
                * Techniques: digital signatures, audit logs, secure timestamping.
3. Parkerian Hexad 
    - Proposed by Donn B. Parker in 1988.
    - the Parkerian Hexad adds three more dimensions to the CIA triad, forming a six-element model for a more holistic view of information security.
    - **The Six Elements:**
        1. **Confidentiality:** Prevents unauthorized disclosure of information
        2. **Integrity:** Ensures information is accurate and unmodified
        3. **Availability:** Ensures access to information when needed
        4. **Authenticity:** Confirms the source and legitimacy of data
        5. **Possession/Control:** Ensures rightful ownership or control over data (eg, stolen laptop may still have confidential data)
        6. **Utility:** Ensures data is useful and usable for its intended purpose (eg, encrypted data without a key is useless)
4. DAD in Cybersecurity
    - DAD stands for:
        * Disclosure
        * Alteration
        * Destruction/Denial
    - It represents the threat actions that compromise the core security principles of the CIA triad.
    - While CIA focuses on protecting data, DAD focuses on how attackers can violate those protections.
    - **Key Concepts**
        1. **Disclosure**
            * Violates confidentiality.
            * Occurs when sensitive data is exposed to unauthorized entities.
            * Examples:
                * Data breaches
                * Eavesdropping on network traffic
                * Leaked credentials
        2. **Alteration**
            * Violates integrity.
            * Involves unauthorized changes to data or code.
            * Example:
                * Tampering with logs
                * Modifying configuration files
                * Injecting malicious code
        3. **Destruction / Denial**
            * Violates availability.
            * Prevents legitimate users from accessing systems or data.
            * Examples:
                * Denial-of-Service (DoS) attacks
                * Ransomware encrypting files
                * Physical destruction of hardware
    - **Why DAD Matters**
        * Helps security teams think like attackers and anticipate threat vectors.
        * Complements CIA by showing what can go wrong if protections fail.
        * Useful in risk assessment, incident response, and threat modeling.
5. Fundamental Concepts of Security Models
    - Security models are formal frameworks used to enforce security policies in systems. 
    - They help implement principles like confidentiality, integrity, and controlled access.
    - **Bell-LaPadula Model (Confidentiality-Focused)**
        * Goal is to preserve confidentiality in multi-level security systems.
        * **Key Rules:**
            * **Simple Security Property ("No Read Up"):**
                * Subjects at lower clearance levels cannot read data at higher levels.
            * **Star Security Property ("No Write Down"):**
                * Subjects at higher clearance levels cannot write to lower levels.
            * **Discretionary Security Property:**
                * Allows users to define access permissions beyond mandatory rules.
        * **Summary Principle:**
            * **"Write Up, Read Down":** Prevents data leakage from high to low levels.
        * **Limitation:**
            * Does not support file sharing or address integrity concerns.
    - **Biba Model (Integrity-Focused)**
        * Goal is to preserve data integrity by preventing unauthorized modification.
        * **Key Rules:**
            * **Simple Integrity Property ("No Read Down"):**
                * High-integrity subjects cannot read low-integrity data.
            * **Star Integrity Property ("No Write Up"):**
                * Lower integrity subject should not write to a higher integrity object.
        * **Summary Principle:**
            * **"Read Up, Write Down":** Prevents contamination of trusted data.
        * **Limitation:**
            * Does not address insider threats or confidentiality.
    - **Clark-Wilson Model (Integrity via Controlled Access)**
        * Goal is to enforce commercial-grade integrity through structured controls.
        * **Core Concepts:**
            * **Constrained Data Items (CDIs):**
                * Trusted data requiring integrity protection.
            * **Unconstrained Data Items (UDIs):**
                * This refers to all data types beyond CDI, such as user and system input.
            * **Transformation Procedures (TPs):**
                * These procedures are programmed operations, such as read and write, and should maintain the integrity of CDIs.
            * **Integrity Verification Procedures (IVPs):**
                * These procedures check and ensure the validity of CDIs.
    - **Other Security Models**
        * **Brewer-Nash Model:**
            * Dynamic access control based on user activity (aka "Cinderella Model").
        * **Goguen-Meseguer Model:**
            * Based on noninterference and formal state transitions.
        * **Harrison-Ruzzo-Ullman Model:**
            * Formal model for access rights and their propagation.
        * **Graham-Denning Model:**
            * Defines secure creation, deletion, and access control of subjects/objects.
        * **Sandhu Model:**
            * Role-Based Access Control (RBAC) framework.
6. ISO/IEC 12489 (Security Architecture Principles)
    - This standard focuses on structural design principles for building secure IT systems.
    - It emphasizes how systems should be organized and compartmentalized to reduce risk and improve control.
    - **ISO/IEC 19249 lists five architectural principles:**
        1. **Domain Separation**
            * Groups security-critical components into isolated domains.
            * Prevents unauthorized access across boundaries.
            * Supports access control, privilege isolation, and containment.
        2. **Layering**
            * Implements multiple layers of defense (defense-in-depth).
            * Inspired by the OSI model where each layer adds protection.
            * Makes it harder for attackers to reach core assets.
        3. **Abstraction**
            * Hides internal complexity from users and systems.
            * Exposes only essential interfaces or functions.
            * Reduces attack surface and limits misuse.
        4. **Encapsulation**
            * Protects internal data and logic by exposing only safe methods.
            * Example: A clock exposes increment() instead of direct access to seconds.
            * Prevents tampering and enforces interface boundaries.
        5. **Modularity**
            * Breaks systems into independent, manageable components.
            * Enhances scalability, maintainability, and security isolation.
            * Easier to update or patch without affecting the whole system.
7. ISO/IEC 12949 (Secure System Design Principle)
    - This standard focuses on operational and defensive strategies for secure system behavior and resilience.
    - **ISO/IEC 19249 teaches five design principles:**
        1. **Least Privilege**
            * Users and processes get only the permissions they need.
            * Limits damage from compromised accounts or misused privileges.
        2. **Attack Surface Minimization**
            * Reduces the number of entry points for attackers.
            * Involves disabling unused services, ports, and features.
        3. **Threat Parameter Validation**
            * Validates all input data to prevent injection and overflow attacks.
            * Protects against malformed or malicious inputs.
        4. **Centralized General Security Services**
            * Consolidates security functions (eg, authentication, logging).
            * Ensures consistency, easier management, and better visibility.
        5. **Preparing for Error and Exception Handling**
            * Designs systems to fail gracefully.
            * Prevents crashes, logs errors securely, and maintains integrity during faults.
8. Zero Trust vs. Trust but Verify
    - Trust is a very complex topic; in reality, we cannot function without trust.
    - **Two security principles that are of interest to us regarding trust:**
        1. **Trust but Verify**
            * Assumes baseline trust in entities (users, systems, vendors), but emphasizes verification.
            * Encourages monitoring mechanisms like:
                * Log reviews
                * Intrusion detection systems
                * Antivirus and port blocking
            * Recognizes that full verification is impractical (eg, reviewing every user action).
            * Relies on the assumption that security tools are functioning correctly.
            * Suitable for environments where some trust is necessary, but oversight is maintained.
        2. **Zero Trust**
            * Assumes no inherent trust where every entity is treated as potentially hostile.
            * Requires authentication and authorization for every access request.
            * Promotes microsegmentation:
                * Network segments can be as small as a single host.
                * Communication between segments is tightly controlled.
            * Views trust as a vulnerability and aims to eliminate it.
            * Supports fine-grained access control and continuous verification.

## Learning and Reflections
- Learned about security principles and its key goals.
- Learned about the CIA triad.
- Learned about DAD in cybersecurity.
- Learned about cybersecurity models.
- Learned about ISO/IEC 12489.
- Learned about ISO/IEC 12949.
- Learned about zero trust and trust but verify.






























































































            










