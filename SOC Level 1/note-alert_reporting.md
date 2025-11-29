# SOC L1 Alert Reporting (TryHackMe - SOC Level 1)
**Platform:** TryHackMe (SOC Level 1 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Learn how to properly report, escalate, and communicate about high-risk SOC alerts.

## Core Concepts Covered
1. **Alert Reporting**
    - Documents the investigation process and evidence behind a True Positive alert.
    - Helps L2 analysts and incident handlers understand context without starting from scratch.
    - **What to Include:**
        * Summary of alert activity
        * Key evidence (eg, affected host, commandline, login time)
        * Analyst’s verdict and severity rating
        * Any supporting threat intel or workbook steps followed
    - **When Required:**
        * After escalating a True Positive alert
        * Based on team standards or analyst discretion
2. **Alert Escalation**
    - **When to Escalate:**
        * If the alert is confirmed malicious and needs deeper review
        * If the activity involves critical assets, privileged accounts, or advanced techniques
    - **How to Escalate:**
        * Move alert to L2 queue
        * Attach your alert report with all findings
        * Follow defined escalation procedures (eg, tagging, status change)
3. **Alert Reporting Guide**
    - **Why L1 Analysts Should Write Alert Reports:**
        * Even after marking alerts as True Positive or False Positive, writing a report is essential.
        * Here's why:
            * **Provide context for escalation:** Saves time for L2 analysts by summarizing findings clearly and concisely.
            * **Save findings for the records:** SIEM logs are deleted after 30 days, but alert reports are stored long-term.
            * **Improve investigation skills:** Writing forces clarity If you can’t explain it simply, you don’t understand it well enough.
    - **Alert Report Format:**
        1. **Who:**
            * Identify the user involved
            * Mention the source, such as:
                * Who ran the command
                * Who downloaded the file
        2. **What:**
            * Describe what happened
            * Include:
                * Alert type
                * Your findings from investigation
        3. **When:**
            * Provide date and time of the alert
            * Use timestamps from SIEM or EDR logs
        4. **Where:**
            * Specify the host or system affected
            * Include:
                * Reporting logs
                * Screenshots (if applicable)
        5. **Why:**
            * Explain why the alert was triggered
            * Clarify:
                * What you discovered
                * Why it matters (impact or risk)
        - [Example of a report is shown here.](images/alert_reporting.jpg)
4. **Escalation guide for SOC alerts**
    - **When to escalate to L2:**
        * **Major attack indicators:** Alert suggests a significant cyberattack requiring deeper investigation or DFIR support.
        * **Remediation needed:** Actions like malware removal, password resets, or host isolation are necessary.
        * **Threat campaign linkage:** Alert appears part of a broader campaign and should be shared across teams.
        * **VIP user involvement:** Alert affects a high-profile user and needs senior analyst attention.
    - **How to escalate:**
        * **Primary method:** Reassign the alert to the on-shift L2 analyst and ping them via corporate chat or in person.
        * **Formal escalation (if required):** Create a written report with screenshots, logs, and relevant evidence, per org policy.
        * **L1 validation remains:** Even after escalation, L1 must manually re-validate the ticket, set a verdict, and close if needed.
        * **Feedback loop:** Once resolved, L2 provides feedback (true positive, false positive, suspicious) for L1 documentation and future reports.
5. **SOC Communication**
    - Escalation and reporting may seem straightforward, but unexpected situations often arise.
    - SOC teams should ideally have Crisis Communication procedures.
    - These are documented guides to help analysts respond effectively.
    - If no formal guide exists, analysts must be prepared to handle the following cases with clarity and urgency.
    - **Communication Cases & Response Strategies:**
        1. **L2 Unavailable for Urgent Escalation:**
            * If L2 doesn’t respond within 30 minutes, escalate through fallback channels:
                * Try another L2 analyst
                * Reach out to a senior L1
                * Contact your SOC manager
        2. **Compromised Slack/Teams Account:**
            * Alert requires user validation (eg, confirming login activity)
            * Ensure rapid communication with the affected user don’t leave them waiting
        3. **Alert Overload:**
            * You receive too many alerts in a short time, some of which are critical
            * Follow triage workflow to prioritize
            * Inform the on-shift L2 about critical alerts for support
        4. **Delayed Realization of Misclassification:**
            * If you later realize an alert was misclassified and a threat was missed:
                * Inform L2 immediately
                * Treat it seriously, threat actors move fast and may already be exploiting the gap
        5. **SIEM Logs Missing or Unsearchable:**
            * If you can’t complete triage due to missing logs:
                * Notify L2 analyst
                * Open a ticket with your L2 unit or SOC engineer to resolve the issue

## Learning and Reflection
- Learned Alert reporting.
- Learned how to escalate alerts.
- Learned alert reporting guide.
- Learned escalation guide for SOC alerts.
- Learned SOC communication.