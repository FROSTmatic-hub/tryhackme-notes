# Metasploit: Introduction (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objectve
An introduction to the main components of the Metasploit Framework

## Core Concepts Covered
1. Metasploit Framework Core Components
    - Launch Metasploit Framework using `msfconsole` command.
    - Main interface to interact with modules, payloads, exploits, and scanners.
    - **Module Categories**
        1. **Auxiliary**
            * Includes scanners, fuzzers, crawlers, and brute-force tools
        2. **Exploits**
            * Use to exploit OS: windows, linux, andriod, osx, multi
        3. **Evasion**
            * Modules to bypass security tools like AppLocker and Windows Defender
        4. **Encoders & Evasion**
            * Encoders obfuscate payloads to evade signature-based antivirus detection
            * Evasion modules offer targeted bypass techniques but vary in effectiveness
        5. **NOPs (No Operation Instructions)**
            * Used as padding to align payloads or create buffer zones
            * Example: `0x90` in x86 architecture
            * Metasploit supports NOPs for multiple platforms: x84, x64, armle, php
        6. **Payload and Its Types**
            * Payloads are codes that will run on the target system.
            * *Its types includes:*
                * Adapters: wrap payloads for specific environments (eg, Powershell)
                * Singles: Self-contained payloads (eg, launch `calc.exe`)
                * Stagers: Set up initial connection and download the stage
                * Stages: Larger payloads delivered after stager connects
2. Using Exploits
    - *For this example we'll seeing how to select the **EternalBlue (MS17-010)** in Metasploit.
        * Exploit path: `use exploit/windows/smb/ms17_010_eternalblue`
        * Use the `show options` to display required settings for exploit and payload
            * Example fields include:
                * `RHOSTS`: Target IP
                * `RPORT`: Target port like 445 for SMB
                * `LHOST`: Attacker's IP
                * `LPORT`: Attackers listening port for incoming connections
    - **Exploit rankings in Metasploit**
        * Excellent: Never crashes, works reliably (eg, SQLi, RFI)
        * Great: Auto-detects targets or is target-independent
        * Good: Works on common targets (eg, Win XP, Server 2003)
        * Normal: Depends on specific patch/version
        * Average: Often unreliable
        * Low: Rarely works
        * Manual: Unstable or DoS, needs manual tuning
3. Searching Syntax 
    - Use can use the `search` command to search for a particular module in Metasploit.
    - Example:
        * `search ms17-010`
    - This will return matching modules based on the search:
        * `exploit/windows/smb/ms17_010_eternalblue`
        * `exploit/windows/smb/ms17_010_psexec`
        * `auxiliary/scanner/smb/smb_ms17_010`
    - We can select the module either by typing its number value or the full path of the module

## Learning and Reflections
- Learned about metasploit core components.
- Learned how to use different modules.
- Learned how to search different syntax.




