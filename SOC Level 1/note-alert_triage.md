# SOC L1 Alert Triage (TryHackMe - SOC Level 1)
**Platform:** TryHackMe (SOC Level 1 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn more about SOC alerts and build a systematic approach to efficiently triaging them.

## Core Concepts Covered
1. **L1 Role in Alert Triage**
    - Alert triage is a core function of a Security Operations Center (SOC).
    - Every member of the SOC team plays a role in handling and investigating alerts.
    - The process ensures that real cyberattacks are identified and responded to quickly.
    - **SOC L1 Analyst (Level 1)**
        * **Primary Responsibilities:**
            * Acts as the first line of defense in the SOC.
            * Handles the highest volume of alerts, sometimes hundreds per day
            * Each alert could potentially indicate a real cyberattack
        * **Tasks inlcude:**
            * Review incoming alerts from SIEM, EDR, or other platforms.
            * Identify false positives (benign activity)
            * Detect true positives (malicious or suspicious activity)
            * Escalate confirmed threats to L2 analysts for deeper investigation.
    - **SOC L2 Analyst (Level 2)**
        - **Role in Triage:**
            * Receives alerts escalated by L1 analysts.
            * Performs deeper analysis using threat intelligence, forensic tools, and behavioral data.
            * Responsible for remediation, containment, eradication and recovery actions.
    - **SOC Engineer:**
        * **Role in Triage Support:**
            * Ensures that alerts are well-structured and informative.
            * Configures and maintains detection rules, log pipelines and alert enrichment.
            * Goal: Make alerts actionable and efficient for L1 and L2 analysts.
    - **SOC Manager:**
        * **Oversight Responsibilities:**
            * Tracks the speed and quality of alert triage across the team.
            * Ensures that critical threats are not missed due to alert fatigue, poor prioritization, workflow bottlenecks.
            * May set KPIs (Key Performance Indicators) for triage performance.
2. **Alert Properties**
    - These properties help analysts understand, prioritize, and manage alerts effectively.
    - These properties are:
        1. **Alert Time:**
            * Definition: Timestamp when the alert was generated.
            * Note: Usually appears a few minutes after the actual event.
            * Example:
                * Event Time: March 21, 15:25
                * Alert Time: March 21, 15:35
        2. **Alert Name:**
            * Definition: Summary of what triggered the alert.
            * Source: Based on the detection rule name.
            * Examples:
                * Unusual Login Location
                * Email Marked as Phishing
                * Windows RDP Brute Force
                * Potential Data Exfiltration
        3. **Alert Severity:**
            * Definition: Indicates the urgency level of the alert.
            * Source: Initially set by detection engines but can be manually adjusted by analysts.
            * Examples:
                * Low
                * Medium
                * High
                * Critical
        4. **Alert Status:**
            * Definition: Shows the current workflow stage of the alert.
            * Purpose: Tracks whether the alert is being worked on or resolved.
            * Examples:
                * New / Unassigned
                * In Progress / Investigating
                * Pending
                * Done
                * Custom statuses (eg, Escalated, Ignored)
        5. **Alert Verdict:**
            * Definition: Final classification of the alert.
            * Purpose: Determines whether the alert was a real threat or a false alarm.
            * Examples:
                * True Positive / Real Threat
                * False Positive / No Threat
                * Custom verdicts (eg, Suspicious, Benign)
        6. **Alert Assignee:**
            * Definition: The SOC analyst responsible for investigating the alert.
            * Function: Can be self-assigned or manually assigned by a manager.
        7. **Alert Description:**
            * Definition: Explains the logic and context behind the alert.
            * Sections Typically Included:
                * Detection logic: Why the alert was triggered
                * Attack relevance: How the activity could indicate a threat  
                * Triage guidance: Optional tips for investigating the alert
        8. **Alert Fields:**
            * Definition: Technical data points tied to the alert.
            * Purpose: Helps analysts understand what exactly triggered the alert.
            * Examples:
                * Affected Hostname
                * Entered Commandline
                * Additional fields depending on alert type (eg, IP address, file hash, user ID)
        - [Example of Alert Properties is shown here.](images/alert_properties.png)
3. **Alert Prioritisation**
    - The process of deciding which alert to take is called Alert Prioritisation.
    - It is crucial to ensure timely detection of a threat, especially with many alerts in the queue.
    - Helps SOC analysts efficiently triage alerts using smart sorting logic.
    - Ensures focus on unseen, high-impact, and time-sensitive alerts.
    - Sorting logic is typically configured in SIEM or EDR platforms.
    - Alert Prioritisation strategy includes:
        1. **Filter the Alerts:**
            * Exclude alerts that:
                * Have already been reviewed
                * Are currently being investigated by teammates
            * Focus only on new, unassessed alerts
            * Avoid duplication and wasted effort
        2. **Sort by Severity:**
            * Prioritize alerts based on urgency level:
                * Start with Critical
                * Then High, Medium, and finally Low
            * Address the most dangerous threats first
            * Severity levels are designed by detection engineers to reflect potential impact
        3. **Sort by Time:**
            * Triage alerts in chronological order:
                * Start with the oldest alerts
                * End with the newest ones
            * Older breaches may already be actively exploited
            * Early response can limit damage from long-standing threats
4. **Investigation Phase (SOC Alert Triage)**
    - This is the most complex and critical step in alert triage.
    - Requires technical knowledge, experience, and analytical thinking.
    - Goal: Determine whether the alert indicates a legitimate threat or benign activity.
    - **Support Tools:**
        * Some SOC teams provide Workbooks (also called Playbooks or Runbooks)
        * These are the step-by-step instructions tailored to specific alert types
        * Help L1 analysts investigate consistently and efficiently
    - **General Investigation Steps (if no workbook is available):**
        1. **Identify the target:**
            * Determine who or what is under threat:
                * Affected user
                * Hostname
                * Cloud asset
                * Network segment
                * Website
        2. **Understand the alert action:**
            * Analyze what happened:
                * Suspicious login
                * Malware execution
                * Phishing attempt
                * Data exfiltration
        3. **Review surrounding events:**
            * Look at events before and after the alert:
                * Check for related suspicious behavior
                * Identify patterns or escalation
        4. **Use threat intelligence:**
            * Consult external sources to validate the threat:
                * Threat intel platforms
                * IOC databases
                * Vendor advisories
        5. **Decision Point:**
            * Decide whether the alert is:
                * **True Positive:** Confirmed malicious activity
                * **False Positive:** Benign or misclassified event
        6. **Documentation:**
            * Write a detailed comment explaining:
                * Your analysis process
                * The severity rating
                * Any contextual insights (e.g., user behavior, system exposure)
        7. **Wrap-Up:**
            * Return to the alert dashboard
            * Move the alert to “Closed” status

## Learning and Reflections
- Learned Role triage alert responsibilties.
- Learned different alert properties.
- Learne alert prioritisation.
- Learned Investigation phase.