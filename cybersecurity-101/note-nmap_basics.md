# Nmap: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn how to use Nmap to discover live hosts, find open ports, and detect service versions

## Core Concepts Covered
1. What is Nmap?
    - Nmap (Network Mapper) is an open-source tool designed for network discovery and security auditing.
    - It operates by sending packets to target hosts and analyzing their responses to gather information about the network.
    - This includes identifying active devices, open ports, running services, and even operating systems.
    - **Key Features of nmap**
        * **Network Discovery**: It scans networks to identify active hosts and devices, helping administrators map their network infrastructure.
        * **Port Scanning**: Nmap determines which ports are open and the services running on them, which is essential for security assessments.
        * **OS and Service Detection**: By analyzing network responses, Nmap can identify the operating system and service versions running on target hosts.
        * **Vulnerability Assessment**: Using its scripting engine, Nmap can detect known vulnerabilities in systems and services.
        * **Network Monitoring**: It can continuously monitor networks to detect changes or unauthorized devices.
2. Nmap Host Discovery
    - Host discovery is the first phase of network reconnaissance, used to identify which devices are active on a target network.
    - Nmap supports multiple techniques to detect live hosts, even in restrictive environments.
    - **Host Discovery Commands**
        * `nmap -sn <IP_address>, <HOSTNAME>`
        * `sn`(ping scan): Disables port scanning, focuses only on host availability.
        * Uses ICMP Echo, ARP (on local networks), or TCP SYN/ACK depending on privileges and network type. 
        * Ideal for low-noise enumeration and pre-scan filtering
        * [Example saved to outputs](outputs/nmap_sn_scan.txt)
    - **Local vs Remote Scanning**
        1. Local Scanning:
            * Example: `nmap -sn 192.168.86.0/24`
            * Detects:
                * IP Addresses
                * MAC Addresses
                * Vender Info
                * Latency per host
            * Uses ARP requests for accuracy on Ethernet/Wi-Fi
        2. Remote Network Scan:
            * Example: `nmap -sn 192.168.0.1/24`
            * Relies on ICMP Echo or TCP ACK/SYN if ARP isn’t viable
3. Nmap Port Scanning
    - Port scanning is used to identify network services running on live hosts.
    - Each service listens on a specific TCP or UDP port.
    - By scanning these ports, analysts can determine:
        * Which services are active
        * Which ports are open, closed, or filtered
        * Potential attack surfaces or misconfigurations
    - **TCP Connect Scan** (`-sT`)
        * *Method*: Completes the full TCP three-way handshake (SYN → SYN-ACK → ACK).
        * *Behavior*:
            * If port is **open**, connection is established and then **RST** is sent to close it.
            * If port is **closed**, target replies with **RST-ACK**.
        * [Wireshark view of `-sT` scan.](images/sT_wireshark.png)
    - **SYN Scan (Stealth Scan)** (`-sS`)
        * *Method*: Sends only the initial SYN packet.
        * *Behavior*:
            * If port is **open**, target replies with **SYN-ACK → scanner sends RST**.
            * If port is **closed**, target replies with **RST**.
        * [Wireshark view of `-sS` scan](images/sS_wireshark.png)
4. UDP Port Scanning with Nmap
    - UDP is connectionless, so there’s no handshake like TCP.
    - Open ports often give no response, making them hard to detect.
    - Closed ports typically reply with ICMP Port Unreachable messages
    - Filtered ports may drop packets silently (no ICMP, no UDP response).
    - **How Nmap Handles UDP Scans**
        * *Command*: `nmap -sU [target]`
        * Nmap sends UDP probes to target ports.
        * If it receives:
            * **ICMP Type 3 Code 3**: Port is closed
            * **No response**: Port is openfiltered
            * **UDP response**: Port is open
5. OS Detection with Nmap
    - Nmap’s OS detection feature analyzes TCP/IP stack behavior, response timing, and packet signatures to estimate the target’s operating system.
    - **Command**: `nmap -O [target IP]`
    - [Example of OS scan in nmap saved in outputs](outputs/nmap_O_Scan)
6. Service and Version Detection
    - The `-sV` flag probes open ports to identify:
        * Service type (eg, SSH, HTTP)
        * Version info (eg, OpenSSH 8.4p1)
        * OS hints via service banners
    - **Command**: `nmap -sV [target IP]`
    - [Example of -sV scan in nmap](outputs/nmap_sV_scan.txt)
7. Forced Scanning with Nmap
    - Some hosts block ICMP or don’t respond during host discovery.
    - Nmap may mark them as “down” and skip port scanning.
    - We can use the `-Pn` flag to perform a forced scan.
    - **Command**: `nmap -Pn [target IP]`
    - Treats all hosts as online.
    - Skips ping checks.
    - Forces port scan even if host is silent.
8. Nmap Timing & Performance Tuning
    - Tuning timing and performance helps in:
        * Detection risk (IDS/IPS triggering)
        * Network reliability
        * Scan completeness (packet drops, timeouts)
    - **Nmap offers granular control over**:
        * Timing templates
        * Parallelism
        * Packet rate
        * Host timeouts
    - **Timing Templates** (`-T0` to `-T5`)
        1. `T0`(paranoid): Extremely slow, avoids IDS detection
        2. `T1` (sneaky): Slow, stealthy
        3. `T2` (polite): Slower to reduce bandwidth usage
        4. `T3` (normal): Default timing
        5. `T4` (aggressive): Fast, may trigger IDS
        6. `T5` (insane): Maximum speed, high risk of detection
        * Use `-T0` to `-T2` for stealth scans, and `-T4` to `-T5` for speed-critical tasks.
    - **Parallelism Control**
        * `--min-parallelism <num>`: Minimum number of probes sent simultaneously
        * `--max-parallelism <num>`: Maximum number of probes sent simultaneously
        * Helps balance scan speed/reliability.
        * Useful in high-latency or packet-loss networks
    - **Rate Control**
        * `--min-rate <num>`: Minimum packets per second
        * `--max-rate <num>`: Maximum packets per second
        * Controls packet transmission rate.
        * Applies to entire scan, not per host.
        * Ideal for bandwidth-limited environments.
    - **Example Scan Command**
        * `nmap -sS -T2 --min-rate 50 --max-parallelism 100 --host-timeout 1m -p- [target]`
9. Nmap Output Control
    - **Verbosity** (`-v`)
        * Enables real-time feedback during scans.
        * Shows scan stages, host discovery, port probing, service detection,
        * Useful for debugging, monitoring progress, and understanding scan flow.
        * Example Command: `nmap -sS 192.168.139.254 -v` | [output saved here](outputs/nmap_v_scan.txt)
        * Use `-vv` or `-vvv` for even more granular output.
    - **Debugging** (`--debug`, `--packet-trace`)
        * `--debug`: Shows internal decision-making and timing logic
        * `--packet-trace`: Displays raw packet data sent/received
        * Ideal for deep troubleshooting or protocol analysis
    - **Output Formats**
        * `oN`(normal): Human-readable terminal output
        * `oX`(XML): Machine-readable, script integration
        * `oS`(Script Kiddie): Stylized output for fun or demos
        * `oG`(Grepable): Easy parsing with grep/awk
        * `oA`(All): Saves all formats with one base name
        * Example command: `nmap -p 1-100 -sS 192.168.1.83 -oA gateway`

## Learning and Reflections
- Learned about nmap and its key features.
- Learned how to discover host using nmap.
- Learned port scanning with different kinds of scan options.
- Learned how to scan for OS versions and services. 
- Learned how to change the nmap scan speed.




            




















        


















