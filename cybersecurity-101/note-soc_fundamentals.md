# SOC Fundamentals (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Learn about the SOC team and their processes.

## Core Concepts Covered
1. Introduction to Security Operations Center (SOC)
    - **What Is a SOC**
        * A Security Operations Center (SOC) is a dedicated facility run by a specialized security team.
        * Their mission is *24/7* monitoring of an organization's network, systems, and resources.
        * They detect, analyze, and respond to suspicious activity to prevent data breaches, loss, or damage.
    -  **Why SOC Matters**
        * As technology advances, data becomes the new asset, no longer stored in physical files but in digital systems.
        * Threat actors exploit vulnerabilities in networks and systems daily.
        * Traditional security methods are often insufficient against modern threats.
2. SOC Focus: Detection & Response
    - **Core Mission of a SOC**
        * The SOC team’s primary focus is Detection and Response.
        * They use centralized security solutions to monitor the entire organization’s network and systems.
        * Continuous monitoring is essential to identify and mitigate threats in real time.
    - **Detection Responsibilities**
        * **Detect vulnerabilities:** Weaknesses in software or systems that attackers can exploit (eg, unpatched Windows servers).
        * **Detect unauthorized activity:** An attacker logs in using stolen employee credentials.
        * **Detect policy violations:** Risky but authorized actions (eg, sharing unencrypted files or pirated media).
        * **Detect unusual activity:** Hardest to spot, relies on behavioral baselines and anomaly detection.
    - **Response Responsibilities**
        * **Support incident response:** Once a threat is detected, the SOC helps contain and mitigate it.
        * Coordinates with the incident response team to take corrective actions.
    - **Pillars of a SOC**
        1. **People:** Skilled analysts and responders
        2. **Process:** Defined workflows and escalation path
        3. **Technology:** Tools for monitoring, detection, and automation
3. People in a Security Operations Center (SOC)
    - **Why People Matter**
        * Despite automation, human expertise is essential to filter out false positives and respond to real threats.
        * Like a fire brigade ignoring false alarms, a SOC without people wastes time chasing irrelevant alerts.
        * Analysts help prioritize and validate alerts, ensuring efficient incident response.
    - **SOC Team Hierarchy & Role**
        1. **CISCO:** Oversees the organization’s overall security strategy
        2. **SOC Manager:** Manages the SOC team and communicates with the CISO
        3. **SOC Analyst (L1):** First responder, triages alerts and filters false positives
        4. **SOC Analyst (L2):** Investigates deeper, correlates data across sources
        5. **SOC Analyst (L3):** Proactively hunts threats, supports incident response and escalates critical issues
        6. **Security Engineer:** Deploys and configures security tools and infrastructure
        7. **Detection Engineer:** Builds and tunes detection rules; collaborates with analysts
4. Process in a Security Operations Center (SOC)
    - We discussed the roles and responsibilities of different individuals working in the SOC team.
    - Each role has its own Processes, just as we saw the role of Level 1 SOC Analysts as the first responders to carry out alert triage and determine if it is harmful.
    - **Important processes involved in a SOC**
        * **Alert Triage**
            * Alert triage is the first step in responding to a security alert.
            * It involves analyzing the alert to determine its severity, validity, and required action.
            * SOC analysts use the **5Ws + 1H** framework to investigate alerts:
                * **Who:** Who triggered or was affected by the alert?
                * **What:** What type of threat or anomaly was detected?
                * **Where:** Where in the system or network did it occur?
                * **When:** When was the activity observed?
                * **Why:** Why did the alert trigger?
                * **How:** How did the threat unfold or get executed?
            * **Example: Malware Alert on “GEORGE PC"**
                * Who: Malicious file detected on host used by George
                * What: File detected at 12:30 PM on June 5, 2024
                * Where: Located in George’s user directory
                * Why: Downloaded from a pirated software site
5. Technology in a Security Operations Center (SOC)
    - **Why Technology Matters**
        * Even with skilled people and strong processes, security solutions are essential for effective detection and response.
        * These tools automate monitoring, reduce manual effort, and enhance visibility across devices and applications.
    - **Key Security Solutions**
        * **SIEM (Security Information and Event Management)**
            * Collects logs from multiple sources
            * Detects threats via correlation rules
            * Supports user behavior analytics and threat intelligence (Detection Only)
        * **EDR (Endpoint Detection and Response)**
            * Monitors endpoint activity in real-time and historically
            * Detects threats and enables response actions like isolation and file removal
        * **Firewall**
            * Controls network traffic between internal and external zones
            * Detects suspicious behavior and malicious traffic using zone-wise sensors
        * **Others**
            * Includes Antivirus, EPS (Endpoint Protection Systems), IDS/IPS, SOAR (Security Orchestration, Automation, and Response), etc.
            * Chosen based on SOC size, use case, and budget

## Learning and Reflections
- Learned about SOC and its importance.
- Learned about pillars of SOC.
- Learned about SOC hierarchy.
- Learned about important processes in SOC.
- Learned about technology in SOC.

























