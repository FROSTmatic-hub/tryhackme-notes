# Introduction to SIEM (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 12 min

## Objective
Learn the fundamentals of SIEM and explore its features and functionality.

## Core Concepts Covered
1. SIEM (Security Information and Event Management)
    - **What Is SIEM?**
        * SIEM stands for Security Information and Event Management.
        * It’s a centralized platform that helps security teams:
            * Collect logs and event data from across the network (servers, endpoints, firewalls, applications, etc.)
            * Correlate and analyze this data to detect suspicious patterns or threats
            * Alert the team when potential incidents occur
            * Investigate and trace the root cause using historical and real-time data
    - **Key Capabilities of SIEM**
        * **Log Aggregation:** Collects logs from diverse sources into one place
        * **Event Correlation:** Links related events to identify complex attack patterns
        * **Alerting:** Notifies analysts of anomalies or threats
        * **Dashboards & Reports:** Visualizes security posture and trends
        * **Threat Intelligence:** Integrates external data to enrich detection
        * **Compliance Support:** Helps meet regulatory requirements (eg, PCI-DSS, HIPAA)
2. Challenges in Log Analysis
    - Despite having logs from various devices, analyzing them to detect malicious activity is not straightforward.
    - Here are the key obstacles:
        1. Numerous Log Sources
            * A network may include many devices (servers, endpoints, firewalls, etc.).
            * Each device generates hundreds of events per second.
            * Logs are scattered across systems, making it hard to collect and analyze them efficiently.
        2. No Centralization
            * Logs reside locally on the devices where they’re generated.
            * Analysts must manually connect to each device (via SSH, RDP, etc.) to access logs.
            * This process is time-consuming, inefficient, and unsuitable for real-time investigations.
        3. Limited Context
            * Individual logs often lack enough information to determine intent.
            * Cross-source correlation is essential to understand the full story.
        4. Format Inconsistencies
            * Logs come in different formats depending on the device or application.
            * Analysts must understand each format to interpret the data correctly.
            * This adds complexity and slows down the investigation process.
    - **Using SIEM or other tools**
        * To overcome these challenges, organizations often adopt centralized log management systems like SIEM, which:
            * Aggregate logs from all sources
            * Normalize formats
            * Enable real-time correlation and alerting
3. Features of SIEM
    -  Security Information and Event Management (SIEM) is a security solution that collects logs from various types of log sources, standardizes their format into a consistent one, correlates them, and detects malicious activities using detection rules.
    - **Key Features of SIEM**
        1. Centralized Log Collection
            * Collects logs from endpoints, servers, firewalls, etc.
            * Uses agents or bots to push logs to a central location.
            * Enables visibility into each machine for analysis.
        2. Normalization of Logs
            * Converts logs from varied formats into a consistent structure.
            * Parsing: Understanding field formats.
            * Normalization: Standardizing logs for unified analysis.
        3. Correlation of Logs
            * Links related events across sources to detect attack patterns.
            * Example:
                * User logs in
                * Accesses shared folder
                * Executes PowerShell
                * Makes outbound connection
                * SIEM flags this as potential data exfiltration
        4. Real-Time Alerting
            * Built-in and custom detection rules trigger alerts.
            * Analysts are notified instantly and can investigate within the SIEM platform.
4. Log Sources and Ingestion
    - **What Are Log Sources?**
        * Every device in a network (Windows, Linux, servers, etc.) generates logs when activities occur, like login attempts, file access, or network connections.
        * These logs are crucial for monitoring, troubleshooting, and detecting threats.
        * Devices that generate logs are called log sources.
    - **Log Sources in Windows Machines**
        * Logs are stored in Event Viewer.
        * Each event has a unique ID for easy tracking.
        * Logs from Windows endpoints are forwarded to SIEM for centralized monitoring.
    - **Log Sources in Linux Machines**
        * Linux OS stores all the related logs, such as events, errors, warnings, etc.
        * These are then ingested into SIEM for continuous monitoring. 
        * Some of the common locations where Linux stores logs are:
            * `/var/log/httpd`: Contains HTTP Request  / Response and error logs.
            * `/var/log/cron`: Events related to cron jobs are stored in this location.
            * `/var/log/auth.log` and `/var/log/secure`: Stores authentication-related logs.
            * `/var/log/kern`: This file stores kernel-related events.
    - **Log Ingestion Methods in SIEM**
        * **Agent / Forwarder:** Lightweight tool installed on endpoints to capture and send logs to SIEM (eg, Splunk Forwarder).
        * **Syslog:** Standard protocol for sending logs from devices to a central server.
        * **Manual Upload:** Analysts manually upload log files for analysis and normalization.
        * **Port Forwarding:** SIEM listens on a specific port to receive logs directly from endpoints.
5. Alerting Process and Analysis
    - **How SIEM Triggers Alerts**
        * SIEM solutions correlate logs from multiple sources to detect threats.
        * Detection rules are predefined by engineers to identify known TTPs (Tactics, Techniques, and Procedures) used by attackers.
        * When a rule’s conditions are met, an alert is triggered.
    - **Common Alert Use Cases**
        * **Multiple failed login attempts:** Alert triggered `Brute Force Attempt`
        * **Successful login after failures:** Alert triggered `Suspicious Login Pattern`
        * **USB device plugged in (if restricted):** Alert triggered `Unauthorized USB Access`
        * **Command executed on system:** Alert triggered `Command Execution Detected`
    - **How Detection Rules Are Created**
        * **Use Case 1 (Event Log Cleared)**
            * Log Source: `WinEventLog: Microsoft-Windows-EventLog`
            * Event ID: `104`
            * Rule: If EventID = 104 → Trigger alert: Event Log Cleared
        * **Use Case 2 (Command Execution)**
            * Log Source: `WinEventLog: PowerShell`
            * Event ID: `4688` (Process creation)
            * Field: `ProcessCommandLine` contains `whoami`
            * Rule: If EventID = 4688 and command = whoami → Alert: whoami Command Execution Detected
    - **Alert Investigation Workflow**
        * Analysts monitor SIEM dashboards for alerts and system summaries.
        * When an alert is triggered:
            * Examine associated event logs
            * Review detection rule conditions
            * Determine if alert is True Positive or False Positive

## Learning and Reflections
- Learned about SIEM and its key concepts.
- Learned about log analysis and its challenges.
- Learned different features of SIEM.
- Learned about log source and ingestion.
- Learned how SIEM triggers alerts and responses.


















































