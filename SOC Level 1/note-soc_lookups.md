# SOC Workbooks and Lookups (TryHackMe - SOC Level 1)
**Platform:** TryHackMe (SOC Level 1 path)  
**VM / Lab:** Browser modules  
**Time spent:** 12 min

## Objective
Discover useful corporate resources to help you structure and simplify L1 alert triage.

## Core Concepts Covered
1. **Identity Inventory**
    - Identity Inventory is a catalog of:
        * User accounts (employees)
        * Machine accounts (services)
        * Includes:
            * Privileges
            * Contact info
            * Roles
    - [Example of Identity Inventory is shown here.](images/Identitiy_inventory'.jpg)
    - Helps analysts understand who’s involved.
    - Determine if activity is expected or suspicious.
2. **Asset Inventory**
    - Asset Inventory is a list of computing resources in the organization:
        * Servers
        * Workstations
        * Hardware
    - [Example of Assest Inventory is shown here.](images/asset_identity.jpg)
    - Helps analysts Identify where activity occurred.
    - Understand asset sensitivity and exposure.
3. **Network Diagrams**
    - **Why Network Diagrams Matter:**
        * Help SOC analysts visualize network structure and trace suspicious activity
        * Especially useful in large organizations with complex subnet layouts
        * Aid in understanding IP relationships, firewall behavior, and attack progression
4. **SOC Workbooks Theory**
    - **Purpose of SOC Workbooks:**
        * Help analysts make accurate verdicts on alerts by following structured steps.
        * Ensure consistency and completeness in investigations, especially for complex alerts.
        * Prevent missed evidence or incomplete analysis due to human error.
    - **What Is a SOC Workbook?**
        * Also known as a playbook, runbook, or workflow.
        * A step-by-step guide written by senior analysts for investigating specific alert types.
        * Designed to support L1 analysts, who are not expected to triage every scenario perfectly.
        * L1s are expected to follow workbooks strictly, deviation may lead to mistakes or reprimands.
    - **Workbook Example: Unusual Login Location:**
        * **Three Stages of Investigation:**
            1. **Enrichment Stage:**
                * Receive alert
                * Use Threat Intelligence tools to:
                    * Lookup login IP in ban/monitor lists
                    * Lookup IP in geolocation databases
                * Goal: Gather contextual data about the IP and user
            2. **Investigation Stage (Using Splunk):**
                * Search for login activity from the IP
                * Is it unusual?
                * If YES → Search for login activity from the user
                * Is it unusual?
                * If YES → Search for login activity from the location
                * Is it unusual?
                * If YES → Search for login activity from the device
                    * If YES → True Positive
                    * If NO → False Positive
            3. **Escalation Stage:**
                * Write a detailed alert report
                * Escalate to L2 team or communicate with the user if needed
    - **Stages Explained:**
        1. **Enrichment:** Use threat intel and identity data to understand the affected user/IP
        2. **Investigation:** Use SIEM logs and geolocation to verify if login is expected
        3. **Escalation:** Escalate to L2 or contact user if login is suspicious or confirmed attack
        