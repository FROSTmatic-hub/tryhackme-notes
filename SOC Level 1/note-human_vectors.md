# Humans as Attack Vectors (TryHackMe - SOC Level 1)
**Platform:** TryHackMe (SOC Level 1 path)  
**VM / Lab:** Browser modules  
**Time spent:** 12 min

## Objective
Understand why and how people are targeted in cyber attacks and how the SOC helps defend them.

## Core Concepts Covered
1. **The Human Element in Cybersecurity**
    - **Why Attackers Target Humans:**
        * Humans are often the weakest link in cybersecurity defenses.
        * Instead of bypassing firewalls or exploiting technical vulnerabilities, attackers may:
            * Use phishing emails or social engineering to trick users.
            * Target individuals with high access privileges (eg, IT admins, HR managers).
    - **Key Takeaways:**
        * Attackers look for specific access, not just random victims.
        * People with multiple accounts or high privileges are prime targets.
        * Social engineering is often faster and more effective than technical exploitation.
2. **How Attackers Target Humans**
    - **Malware Downloads:**
        * Users are tricked into downloading malware from fake websites or deceptive pop-ups
        * Often disguised as software updates or captcha verifications
        * **Common Tactics:**
            * Fake Firefox website prompts users to update their browser
            * Fake captcha verification asks users to press “Allow” to continue
            * Pressing “Allow” triggers malware execution
    - **Deepfakes:**
        * AI-generated video or audio used to impersonate trusted individuals
        * Example: A company wired $25 million after receiving a fake voice call from someone sounding like the boss
    - **Impersonation (Non-AI):**
        * Attackers pretend to be colleagues, executives, or IT staff
        * Used to trick victims into:
            * Sharing credentials
            * Installing malware
            * Granting access for “system repair”
    - **Social Engineering Variants**
        * **USB drop campaigns:** infected USBs left in public places
        * **Fake physical mailers:** deceptive letters or packages with malicious intent
        * **Insider threats:** employees or contractors who leak or misuse access
3. **Defending Humans**
    - Goal is to reduce human-targeted cyberattacks through preventive measures.
    - Ensure residual threats are handled by the SOC team.
    - **Mitigation Flow:**
        1. **Anti-Phishing Tool:**
            * Blocks phishing emails before users see them
            * First layer of defense against deceptive messages
        2. **Employee Training:**
            * Teaches staff to recognize and avoid phishing, malware, and suspicious behavior
            *Builds a culture of security awareness
        3. **SOC Team:**
            * Handles remaining threats that bypass initial defenses
            * Investigates alerts and responds to incidents

## Learning and Reflection
- Learned why attackers target humans.
- Learned how attackers target humans.
- Learned different ways to prevent such attacks.