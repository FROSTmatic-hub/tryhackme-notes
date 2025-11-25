# SOC Role in Blue Team (TryHackMe - SOC Level 1)
**Platform:** TryHackMe (SOC Level 1 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Discover security roles and learn how to advance your SOC career, starting from the L1 analyst.

## Core Concepts Covered
1. **Security Hierarchy in Organizations**
    - Cyber security priorities are different for every company.
    - That's why every company has a unique security approach and security team structure.
    - Different Hierarchy are:
        1. **CEO (Chief Executive Officer):**
            * Focuses on global business operations.
            * Role: Strategic oversight, not involved in day-to-day security.
            * Delegates security responsibilities to specialized leadership
        2. **CISO (Chief Information Security Officer):**
            * Reports to CEO, CIO, VP, or other executive leadership.
            * Focuses on global security strategy and risk management.
            * Roles include:
                * Bridges business goals with security needs
                * Oversees security programs and policies
                * Coordinates with IT and other departments
        3. **Security Managers:**
            * Titles: Team Lead, SOC Manager, Application Security Manager.
            * Focuses on team performance and operational execution.
            * Roles inlcude:
                * Manage specific security teams (eg, SOC, AppSec)
                * Ensure alignment with strategic goals set by CISO
                * Handle staffing, reporting, and escalation
        4. **Technical Roles:**
            * Titles: Analyst, Engineer, Red Teamer.
            * Focuses on individual technical performance.
            * Roles include:
                * Execute hands-on security tasks (monitoring, testing, engineering)
                * Use tools and techniques for detection, prevention, and response
                * Collaborate with managers for task prioritization
        5. **Security Specialists:**
            * Titles: Security Analyst, SOC Analyst, AppSec Engineer, Penetration Tester.
            * Focuses on task execution and technical implementation.
            * Role include:
                * Perform specific security functions (eg, log analysis, vulnerability testing)
                * May work on tasks approved by upper leadership
                * Do not manage or make strategic decisions
2. **Security Departments**
    - In tiny companies, the IT department takes the role of securing the company.
    - Small to medium-sized companies may have a generic "Information Security" team that does all sorts of tasks.
    - Different Security Departments teams are:
        1. **Red Team:**
            * Role: Offensive security (ethical hacking)
            * Focus: Simulate attacks to find vulnerabilities
            * Tools: Exploitation frameworks, custom scripts, etc.
            * Goal: Improve defenses by identifying weaknesses
        2. **Blue Team:**
            * Role: Defensive security
            * Focus: Protect systems, monitor threats, respond to incidents
            * Tools: SIEM, firewalls, antivirus, threat intel, etc.
            * Goal: Maintain security posture and resilience
        3. **Purple Team:**
            * Role: Hybrid of Red and Blue teams
            * Focus: TTPs (Tactics, Techniques, Procedures)
            * Goal: Enhance collaboration and feedback between offensive and defensive efforts
            * Often used in continuous improvement and threat emulation
3. **Security Operations Center (SOC)**
    - SOC acts as the first line of defense in cybersecurity.
    - Operates 24/7 to monitor, detect, and respond to threats.
    - Central hub for log collection, alert investigation, and incident handling.
    - **SOC Roles & Levels:**
        1. **L1 Analyst:** Entry-level, triages alerts, filters false positives, escalates complex cases
        2. **L2 Analyst:** Experienced, investigates advanced threats, correlates data, performs deeper analysis
        3. **SOC Engineer:** Configures and maintains tools like SIEM, EDR, ensures data pipelines and alert logic
        4. **SOC Manager:** Oversees SOC operations, team workflow, reporting, and escalation protocols
    - **Key Responsibilities of SOC:**
        * Create and tune detection rules
        * Monitor and analyze security alerts
        * Write summary reports and incident documentation
        * Collaborate with other teams (eg, CIRT, AppSec)
4. **Cyber Incident Response Team (CIRT / CSIRT / CERT)**
    - CIRT handles critical incidents and deep forensic investigations.
    - Activated on-demand for major breaches or complex threats.
    - Supports SOC with advanced analysis.
    - **CIRT Roles:**
        1. **CIRT Manager"** Leads incident response strategy and coordination
        2. **Forensics Lead:** Analyzes compromised systems, extracts evidence, builds timelines
        3. **Threat Hunting Expert:** Proactively searches for hidden threats and IOCs
        4. **Malware Analyst:** Dissects malware to understand behavior, origin, and impact
    - **Tools Used by CIRT:**
        * EDR (Endpoint Detection and Response)
        * SIEM (Security Information and Event Management)
        * Forensic toolkits (eg, FTK, Autopsy, Volatility)
5. **Specialized Defensive Roles**
    - Found in large enterprises, tech startups, and government agencies.
    - Require deep expertise in specific domains.
    - Often support or extend Blue Team capabilities
    - **Key Roles include:**
        1. **Digital Forensics Analyst:** Investigates digital evidence, recovers deleted data, analyzes breach artifacts
        2. **Threat Intelligence Analyst:** Gathers and analyzes threat data from external/internal sources, tracks threat actors
        3. **AppSec Engineer:** Secures applications and APIs, performs code reviews, threat modeling
        4. **DevSecOps:** Integrates security into CI/CD pipelines and development workflows
        5. **Penetration Tester:** Simulates attacks to find vulnerabilities (often Red Team aligned)
        6. **AI Security Researcher:** Studies adversarial AI threats, builds defenses for ML models

## Learning and Reflections
- Learned about Security Hierarchy in Organizations.
- Learned about different security departments.
- Learned about SOC, CIRT and Specialized Defensive Roles.