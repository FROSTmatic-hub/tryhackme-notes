# Logs Fundamentals (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn what logs are and how to analyze them for effective investigation.

## Core Concepts Covered
1. Introduction to Logs
    - Just like detectives use physical traces (footprints, broken doors, CCTV) to solve crimes.
    - Cybersecurity teams use digital traces (logs) to understand how an attack occurred and who was behind it.
    - Even if attackers try to hide their tracks, logs often reveal the execution path and source of the attack.
    - **Use Cases of Logs**
        * **Security Events Monitoring:** Detects anomalies in real-time using log data.
        * **Incident Investigation & Forensics:** Helps reconstruct events and identify root causes.
        * **Troubleshooting:** Diagnoses system/application errors for resolution.
        * **Performance Monitoring:** Tracks system health and application efficiency
        * **Auditing & Compliance:** Maintains activity trails for legal and regulatory review.
2. Types of Logs
    - **Why Categorize Logs?**
        * Systems generate thousands of events across different categories.
        * Investigating issues becomes easier when logs are grouped by type.
    - **Common Log Types & Their Purpose**
        * **System Logs**
            * Usage in OS troubleshooting
            * Startup/shutdown, driver load, system errors
        * **Security Logs**
            * Usage in Incident detection
            * Authentication, access control, policy changes
        * **Application Logs**
            * Usage in App-level monitoring
            * User actions, app errors, startup/shutdown
        * **Audit Logs**
            * Usage in User/system tracking
            * Data access, modification, deletion
        * **Network Logs**
            * Usage in Network diagnostics
            * Traffic flow, connections, firewall activit
        * **Access Logs**
            * Usage in Resource access tracking
            * Web/file/device access records
3. Windows Event Logs
    - Windows records many activities in separate log files so investigators can find relevant events quickly.
    - Main built-in logs: Application, System, and Security.
    - Security logs are most important for audits/forensics.
    - **How to inspect logs in windows**
        * Open Event Viewer (Start menu or search).
        * Click a log (eg, Security) to see events, double-click any event to view full details.
        * Use Filter Current Log to narrow by Event ID, time range, level, source or keywords.
        * [Example of event viewer start menu](images/event_viewer_startmenu.png)
        * [Example of event viewer security logs](images/event_securitylogs.png)
        * Double-click on one of these logs to see its contents. 
        * [Example of a log content](images/event_logscontent.png)
    - **Event record key fields**
        * **Description:** Detailed message of the activity.
        * **Log Name:** Which log file (Security, System, Application).
        * **Logged:** Timestamp of the event.
        * **Event ID:** Unique numeric identifier for the event type.
        * **Source:** Component that generated the event.
        * **Level/Keywords/Task Category:** Severity and classification.
        * **User / Subject:** account involved (if available).
        * **Computer:** Host where the event occurred.
        * **OpCode, Logon Type, Logon ID:** Context details (very useful in investigations).
    - **Important Event IDs**
        * **4624:** A user account successfully logged in (successful logon).
        * **4625:** A user account failed to logon.
        * **4634:** A user account logged off (logoff).
        * **4720:** A user account was created.
        * **4724:** An attempt was made to reset an account’s password.
        * **4722:** A user account was enabled.
        * **4725:** A user account was disabled.
        * **4726:** A user account was deleted.

## Learning and Reflections
- Learned about logs and its use cases.
- Learned about types of logs.
- Learned about windows event logs and important event IDs.






