# Incident Response Fundamentals (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Learn how to perform Incident Response in cyber security.

## Core Concepts Covered
1. Incident Response
    - **What Is Incident Response?**
        * Incident Response (IR) is the structured approach a cybersecurity team takes to detect, investigate, contain, and recover from security incidents.
        * These incidents can include malware infections, data breaches, phishing attacks, or unauthorized access.
        * The goal is to minimize damage, restore operations, and prevent future incidents.
    - **What Triggers an Incident?**
        * Devices run many processes (e.g, `Explorer.exe`, `Lsass.exe`, `Svchost.exe`, `Wininit.exe`).
        * These processes generate events, some of which may indicate malicious activity.
        * Security solutions analyze these events and raise alerts.
    - **Alert Classification**
        * **False Positive:** Alert triggered by benign activity (eg, backup to cloud mistaken for data exfiltration)
        * **True Positive:** Alert triggered by actual malicious activity (eg, phishing email confirmed as a threat).
        * True positives are classified as incidents and require investigation
2. Types of Cybersecurity Incident
    - **General Insight**
        * Not all harmful digital activity is just “hacking” incidents vary in nature and impact.
        * A true positive alert becomes an incident after validation by the security team.
        * Incidents may occur independently or simultaneously across systems or users.
    - **Types of Incidents**
        * **Malware Infection:** Malicious software (.exe, docs, etc.) that damages systems or networks.
        * **Security Breach:** Unauthorized access to confidential data, high priority and sensitive.
        * **Data Leak:** Exposure of private data, often due to misconfigurations or human error.
        * **Insider Attack:** Malicious actions by internal personnel (eg, disgruntled employee using USB).
        * **Denial of Service (DoS):** Flooding systems with fake requests, exhausting resources and causing downtime.
3. Incident Response Process
    - SANS and NIST are popular organizations contributing to cyber security.
    - SANS has offered various courses and certifications in cyber security
    - NIST played its role in developing standards and guidelines for cyber security.
    -  Both SANS and NIST have quite similar incident response frameworks.
    - The SANS incident Response framework has 6 phases, which can be called *'PICERL'*
    - **Six Phases (SANS Model)**
        1. **Preparation**
            * Build IR capabilities, train team, define policies
            * Security team sets up training and policies
        2. **Identification**
            * Detect abnormal behavior or alerts
            * Large outbound data transfer triggers investigation
        3. **Containment**
            * Isolate affected systems to prevent spread
            * Infected systems are disconnected from network
        4. **Eradication**
            * Remove root cause (malware, compromised accounts)
            * Malware scan removes malicious files
        5. **Recovery**
            * Restore systems and monitor for reinfection
            * Reconfigure and reconnect cleaned host
        6. **Lessons Learned**
            * Review incident and improve future response
            * Post-incident meeting to refine strategy
    - The Incident Response Framework of NIST is similar to the SANS framework we studied above. 
    - The number of phases in this framework is reduced to 4.
    - [SANS vs NIST Frameworks comparsion of both frame work is given here.](images/samns_nist.png)
    - Both frameworks emphasize structured response, but NIST consolidates containment, eradication, and recovery into one phase.
    - Organizations use these models to build formal Incident Response Plans, which include:
        * Roles and responsibilities
        * Methodology
        * Communication protocols (eg, law enforcement)
        * Escalation paths
4. Incident Response Techniques
    - **Detection & Analysis Phase**
        * Manual detection of abnormal behavior is difficult.
        * Security tools help automate incident detection and sometimes response.
    - **Key Tools**
        * **SIEM:** Centralizes logs and correlates events to detect incidents
        * **Antivirus (AV):** Scans systems for known threats
        * **EDR:** Monitors endpoints, detects advanced threats, and can contain/eradicate them
    - **Playbooks & Runbooks**
        * **Playbooks**
            * High-level guidelines for responding to specific incident types.
            * Example: Phishing Email Playbook
                1. Notify stakeholders
                2. Analyze email headers/body
                3. Remove attachments
                4. Check if attachments were opened
                5. Isolate infected systems
                6. Block sender
        * **Runbooks**
            * Detailed step-by-step instructions for executing actions during incidents.
            * Tailored to available tools and resources.

## Learning and Reflections
- Learned about IR and how it gets triggered.
- Learned about types of cybersecurity incidents.
- Learned about the IR process.
- Learned about the IR techniques.

















