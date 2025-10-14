# Windows Command Line (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learning the essential Windows Command Line commands.

## Core Concepts Covered
1. Basic System Information
    - The **Windows Path** defines where the system looks for executable commands.
    - You can view it by using command [`set`](images/set_cmd.jpg).
    - Look for the line starting with `Path=` to see directories like:
        * `C:\Windows\system32`
        * `C:\Windows\System32\WindowsPowerShell\v1.0\`
        * etc
2. Checking OS Version
    - The command to check Windows Operating System version is [`ver`](images/ver_cmd.jpg).
    - Example output:
        * Microsoft Windows [Version 10.0.17763.1]
3. Detailed System Info
    - Use [`systeminfo`](images/systeminfo_cmd.png) to get comprehensive detail of the Windows OS.
    - Sample output includes:
        * Host Name: `EUREKA`
        * OS Name: `Microsoft Windows 11 Home Single Language`
        * OS Version: `10.0.26100 N/A Build 26100`
        * OS Configuration: `Standalone Workstation`
        * OS Build Type: `Multiprocessor Free`
        * Registered Owner: `NA`
4. Networking Fundamentals via Command Line
    - **Basic IP Configuration**
       * Use the cmd [`ipconfig`](images/ipconfig_cmd.png) to view current network settings
       * Shows IPv4/IPv6 address, subnet mask, and default gateway,
       * Use the cmd `ipconfig /all` for more detailed information
5. Network Troubleshooting Commands
    - Use the command `ping` to test connectivity of a remote host.
    - Command example: [`ping google.com`](images/ping_cmd.jpg)
        * Sends ICMP packets and measures response time.
        * Output includes Packets sents/received, packet-loss, time taken.
    - `tracert` command traces the route packets take to reach a destination
    - Command example: [`tracert google.com`](images/tracert_cmd.jpg)
        * Lists each hop with IP and latency
        * Useful for diagonsing routing issues
    - `nslookup` command queries DNS records for a domain.
    - Command example: [`nslookup google.com`](images/nslookup_cmd.png)
        * Returns IP addresses associated with the domain
6. Active Connection and Ports
    - The command [`netstat`](images/netstat_cmd.png) displays current network configurations and listening ports.
7. File & Directory Management
    - Use the command `cd` to change your current working directory.
    - Example:
        * `cd documents`
        * `cd ..` (go back)
        * `cd \` (go to root)
    - Use the command [`dir`](images/dir_cmd.jpg) to list contents of the current directory
    - [`dir /a`](images/dir-a_cmd.jpg): Shows hidden/system files.
    - `dir /s`: Recursively lists all files in subdirectories
8. Creating & Deleting Directories
    - Use the command `mkdir foldername` to create a new folder/directory.
    - Use the command `rmdir foldername` to delete an empty directory.
9. Task and Process Management
    - Use the command [`tasklist`](images/tasklist_cmd.jpg) to display all active processes in your system.
    - It shows:
        * Image name
        * PID (Proceess ID)
        * Session name & number
        * Memory Usage
    - Use `/FI` to filter by image name.
    - Command example: [`tasklist /FI "imagename eq process.exe" `](images/filer_tasklist.jpg)
    - Use `taskill` with PID to stop/kill a running process.
    - Example Command: [`taskill /PID 18360`](images/taskkill_cmd.jpg)

## Learning and Objective
- Learned Basic system OS commands.
- Learned commands for network and troubleshooting.
- Learned commands for managing file systems.
- Learned commands to view and stop running processes.
    









