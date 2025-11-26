# Systems as Attack Vectors (TryHackMe - SOC Level 1)
**Platform:** TryHackMe (SOC Level 1 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Learn how attackers exploit vulnerable and misconfigured systems, and how you can protect them.

## Core Concepts Covered
1. **Definition of System**
    - A system is any platform where data is stored or processed:
        * Physical server
        * Virtual machine
        * Cloud platform (eg, Microsoft 365)
    - **Key Insight:**
        * Human defenses (like training) are important, but system security is critical.
        * Even with trained users, a weak system lock can be exploited directly by attackers.
        * Breaching a user’s mailbox affects one person, breaching a mail server compromises thousands.
2. **Human-Led Attacks on Systems**
    - **Attack Goals:**
        * Gain access to target systems
        * Follow-up actions may include:
            * Data theft
            * Ransomware deployment
            * System sabotage (irreversible damage)
    - **Common Human-Led Entry Points:**
        * **Malicious USBs (eg, RubberDucky):** auto-execute malware when plugged in
        * **Pirated software downloads:** often bundled with malware
        * **Weak or reused passwords:** easily cracked or already leaked in breaches
3. **Supply Chain Threats**
    - **What It Means:**
        * Attackers compromise software dependencies (apps, libraries, browsers)
        * A single infected library can impact thousands of companies
    - **Notable Breaches:**
        * **SolarWinds**: nation-state level supply chain compromise
        * **3CX:** VoIP software breach affecting global users
4. **Software Vulnerabilities**
    - All software contains flaws, some discovered years after release.
    - If attackers find a flaw before defenders, it becomes a zero-day vulnerability.
    - Once disclosed, vulnerabilities are tracked using CVE (Common Vulnerabilities and Exposures) numbers.
    - **Responding to Vulnerabilities:**
        * Apply patches immediately after CVE disclosure.
        * Monitor systems for exploitation attempts.
        * Use network restrictions like IPS (Intrusion Prevention Systems) or WAF (Web Application Firewalls).
5. **Misconfigurations**
    - **What Are Misconfigurations?**
        * Simple setup mistakes that create security vulnerabilities
        * Often overlooked but can lead to massive breaches
        * Examples:
            * Using weak/default passwords (eg, “123456”)
            * Leaving default settings active
            * Granting unrestricted access to sensitive systems
    - **Real-World Breach Examples:**
        * Capital One: 106 million records exposed due to a misconfigured firewall
        * AWS S3 Bucket: 1.8 billion records leaked from public cloud storage
    - **Responding to Misconfigurations:**
        * **Penetration Testing:** Ethical hackers simulate attacks to find and report misconfigurations
        * **Configuration Audits:**
            * Manual reviews of system settings
            * Use standards like CIS Benchmarks for secure configuration

## Learning and Reflection
- Learned about systems.
- Learned different human-led attacks on systems.
- Learned about supply chain threats and software vulnerabilities.
- Learned about misconfigurations.