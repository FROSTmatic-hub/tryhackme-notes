# IDS Fundamentals (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 8 min

## Objective 
Learn the fundamentals of IDS, along with the experience of working with Snort.

## Core Concepts Covered
1. Intrusion Detection System (IDS)
    - **What Is IDS?**
        * Intrusion Detection System (IDS) is a security solution designed to monitor network or system activity for signs of malicious behavior, policy violations, or unauthorized access.
        * It helps detect threats in real-time or retrospectively by analyzing traffic, logs, or system behavior.
        * **IDS does not block threats, It detects and alerts.**
        * It can be deployed at the host level (HIDS) or network level (NIDS).
        * IDS can use signatures, anomaly detection, or a hybrid approach.
    - **Types of IDS**
        * **Deployment Modes**
            * HIDS (Host-based IDS):
                * Installed on individual hosts.
                * Monitors internal activities like file access, process execution, and system changes.
                * Ideal for large networks with many endpoints.
            * NIDS (Network-based IDS):
                * Monitors traffic across the entire network.
                * Detects suspicious patterns in data flow between devices.
                * Provides centralized visibility.
        * **Detection Modes**
            * Signature-Based IDS:
                * Matches known attack patterns (signatures) stored in a database.
                * Fast and accurate for known threats.
                * Cannot detect new/unknown attacks.
            * Anomaly-Based IDS:
                * Learns normal behavior and flags deviations.
                * Can detect unknown or insider threats.
                * High false positive rate.
            * Hybrid IDS:
                * Combines both methods for broader coverage.
                * Detects both known and unknown threats.
                * May require more resources and tuning.
    - **Example Use Cases**
        * **Signature-Based:** Antivirus detecting malware using known patterns.
        * **Anomaly-Based:** Detecting unusual login times or data transfers.
        * **Hybrid:** Detecting known phishing attempts and unknown lateral movement.
2. Snort
    - **What Is Snort?**
        * Snort is a widely used open-source IDS developed in 1998.
        * Supports both signature-based and anomaly-based detection.
        * Uses rule files to define known attack patterns and detection logic.
    - **Snort Rule Management**
        * Comes with built-in rule files for detecting common threats.
        * Users can:
            * Disable default rules if irrelevant
            * Create custom rules to detect specific traffic
        * Highly configurable for tailored network protection.
    - **Snort Modes of Operation**
        * Packet Sniffer Mode:
            * Reads and displays raw network packets without analysis.
            * Used for traffic monitoring and diagnostics.
        * Packet Logging Mode:
            * Detects and logs suspicious traffic as alerts in a file.
            * Used for forensic analysis and threat investigation.
        * NIDS Mode (Network Intrusion Detection System):
            * Performs real-time traffic analysis and intrusion detection.
            * Used for proactive threat detection and alerting.
3. Snort Directory & Rule Format
    - **Snort Directory Structure**
        * Main Config Directory: `/etc/snort`
        * Contains essential configuration files:
            * `snort.conf`: Main config file that defines rule paths and variables
            * `classification.config`, `reference.config`, `threshold.conf`: Supporting configs
            * `snort.debian.conf`, `unicode.map`, `tmp`: Additional system files
        * Rules Directory: `/etc/snort/rules`
            * Stores built-in and custom rule files.
            * Analysts can modify or add rules based on detection needs.
    - **Snort Rule Format Breakdown**
        * **Example:** `alert icmp any any -> $HOME_NET any (msg:"Ping Detected"; sid:10001; rev:1;)`
        * **Action:** `alert`triggers an alert when rule matches
        * **Protocol:** `icmp` monitors ICMP traffic (eg, ping)
        * **Source IP/Port:** `any any` matches traffic from any IP and port
        * **Direction:** `->` traffic flowing toward destination
        * **Destination IP/Port** `$HOME_NET any` targets internal network
        * **Message (msg):** `"Ping Detected"` alert message shown
        * **Signature ID (sid):** `10001` unique identifier for the rule
        * **Revision (rev):** `1` version number of the rule
        * `$HOME_NET` is a variable defined in snort.conf representing your internal network.

## Learning and Reflections
- Learned about IDS and its types.
- Learned about Snort.
- Learned about Snort directory and rule format.

























