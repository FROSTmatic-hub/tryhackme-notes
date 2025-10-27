# Metasploit: Meterpreter (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Take a deep dive into Meterpreter, and see how in-memory payloads can be used for post-exploitation

## Core Concepts Covered
1.  Meterpreter
    - **What is Meterpreter**
        * A Metasploit payload used for post-exploitation.
        * Runs entirely in memory, no files written to disk.
        * Uses encrypted communication (TLS) to evade detection.
        * Supports multiple platforms: Windows, Linux, Android, etc.
    - **How It works**
        * Injected into a process on the target system.
        * Avoids disk I/O to bypass antivirus.
        * Can still be detected by network-based IDS/IPS.
2. Process Inspection & Privilege Awareness
    - **Listing Processes**
        * Once u have a meterpreter session opened.
        * We can use the command `ps`.
        * Displays running processes with paths, PIDs, and user context.
        * [Example of ps command](images/ps_cmd.jpg)
    - **Checking Specific Process**
        * Use the command: `tasklist /fi "pid eq 1304"`
        * Shows process name (`svchost.exe`) and memory usage.
        * DLLs loaded by the process: `ntdll.dll`, `kernel32.dll`, `USER32.dll`, `ADVAPI32.dll`, etc.
        * These DLLs are common in Windows processes and may be used by injected Meterpreter payloads.
        * [Example of checking specific process](images/process_list.jpg)
    - **DLL Enumeration**
        * Use `tasklist` or `Process Explorer` to inspect loaded DLLs.
        * Meterpreter may load suspicious DLLs or inject into trusted ones.
    - **Detection Notes**
        * Most AVs can detect standard Meterpreter payloads.
        * Encrypted TLS channels help avoid basic signature detection.
        * Advanced EDRs may flag:
            * Unusual memory allocation
            * DLL injection
            * Suspicious parent-child process relationships
3. Meterpreter Command
    - **Accessing Help**
        * Use the `help` command in an meterpreter session.
        * Lists all available commands grouped by category.
        * Categories vary by platform (Windows, Linux, etc.).
        * [Example of help command](images/help_cmd.jpg).
    - **Core Session Management Commands**
        * `background`: Sends session to background
        * `bglist`: Lists backgrounded sessions
        * `bgkill`: Terminates a backgrounded session
        * `bgrun`: Runs a command in background
        * `sessions`: Lists all active sessions
        * `session -i <id>`: Interacts with a session
        * `session -k <id>`: Kills a session
        * `session -u <id>`: Upgrades shell to Meterpreter
        * `session -v`: Verbose session info
    - **Networking Commands**
        * `arp`: View ARP cache
        * `ifconfig`: View network interfaces
        * `netstat`: View active connections
        * `ftp`: Port forwarding
        * `route`: View/modify routing table
    - **Sytem Commands**
        * `clear`: Clear event logs
        * `exec`: Run command
        * `hostname`: Show system hostname
        * `ps`: List processes
        * `kill`: Terminate process
        * `reboot`: Reboot system
        * `shutdown`: Shut down system
        * `sysinfo`: System info (OS, architecture, etc.)
    - **Surveillance & Privilege Escalation Commands**
        * `bulletTime`: Show idle time of remote user
        * `keyscan_start`: Begin keylogging
        * `keyscan_dump`: Dump captured keystrokes
        * `keyscan_stop`: Stop keylogging
        * `screenshare`: Live desktop view
        * `screenshot`: Capture screenshot
        * `record_mic`: Record microphone audio
        * `webcam_list`: List available webcams
        * `webcam_snap`: Take webcam snapshot
        * `getsystem`: Attempt SYSTEM privilege escalation
        * `enum_sam`: Dump SAM database (user hashes)

## Learning and Reflection
- Learned about meterpreter 
- Learned how to use different meterpreter commands for post-exploitation.



















