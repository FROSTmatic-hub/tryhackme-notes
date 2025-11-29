# SOC Metrics and Objectives (TryHackMe - SOC Level 1)
**Platform:** TryHackMe (SOC Level 1 path)  
**VM / Lab:** Browser modules  
**Time spent:** 8 min

## Objective
Explore key metrics driving SOC effectiveness and discover ways to improve them.

## Core Concepts Covered
1. **SOC Core Metrics**
    - These metrics help measure the efficiency, accuracy, and reliability of a Security Operations Center (SOC) team:
    1. **Alerts Count (AC):**
        * **Formula:** *AC = Total Count of Alerts Received*  
        * Measures the overall workload of SOC analysts.
        * High alert count may indicate:
            * Alert fatigue
            * Risk of missing real threats hidden among false positives.
        * Low alert count may suggest:
            * Underreporting
            * Ineffective detection rules
    2. **False Positive Rate (FPR):**
        * **Formula:** *FPR = False Positives / Total Alerts*
        * Measures the noise level in alert data.
        * High FPR (eg, above 80%) is a serious issue.
        * Known as False Positive Remediation when excessive.
        * Indicates poor detection logic or overly sensitive rules.
    3. **Alert Escalation Rate (AER):**
        * **Formula:** *AER = Escalated Alerts / Total ALerts*
        * Reflects the experience and judgment of L1 analysts.
        * L2 analysts rely on L1s to filter noise and escalate only actionable threats.
        * Over-escalation without proper triage shows lack of confidence or skill.
        * Target rate:
            * Ideally below 50%
            * Preferably below 20% for mature teams
    4. **Threat Detection Rate (TDR):**
        * **Formula:** *TDR = Detected Threats / Total Threats*
        * Measures the reliability of the SOC team.
        * Indicates how many real attacks were detected and prevented.
        * Example Scenario:
            * Total attacks in 2025: 6
            * 4 detected and prevented
            * 1 missed due to broken detection rules
            * 1 misclassified as false positive
            * *TDR = 4 / 6 = 67%*
        * Ideal Target:
            * 100% detection rate is expected
            * Even one missed attack can lead to devastating consequences
2. **Triage Metrics & SLA Reference**
    - These metrics help SOC teams measure responsiveness, efficiency, and availability during incident detection and response.
    - [Triage Flow (Visual Timeline) is shown here](images/triage_metrics.jpg)
    - These benchmarks are often aligned with MITRE standards and internal SLAs.
    - [SLA Reference Table is shown here.](images/sla_table.jpg)
    - **Key Insights:**
        * MTTD reflects the speed of detection tools (SIEM, EDR, etc.)
        * MTTA measures how quickly analysts acknowledge and begin triage
        * MTTR is the most critical, it shows how fast the SOC can neutralize threats
        * Internal Processes include:
            * Alert review
            * Escalation
            * Communication
            * Remediation steps
3. **Improving SOC Metrics**
    - **Why Metrics Matter for L1 Analysts:**
        * **Efficiency & Security:** Metrics are designed to make the SOC team more effective, reducing the success rate of cyberattacks.
        * **Performance Evaluation:** Your personal metrics (eg, response time, false positive rate) are used to assess your performance.
        * **Career Growth:** Strong metrics can lead to promotions, such as moving from L1 to L2 analyst, and may influence salary increases.
    - [Reference Table on how to Improve Specific Metrics is shown here.](images/improve_metrics.jpg)


## Learnimg and Reflections
- Learned SOC metrics, AC, FPR, AER, and TDR.
- Learned triage metrics and SLA reference.
- Learned strategies to improve SOC metrics.
