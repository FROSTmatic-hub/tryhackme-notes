# Tcpdump: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Learn how to use Tcpdump to save, filter, and display packets.

## Core Concepts Covered
1. Basic Packet Capture in tcpdump
    - Tcpdump is a tool for capturing network packets.
    - Some essential commands for capturing packets:
        * `tcpdump -i INTERFACE`: Captures packets on a specified network interface (eg, -i eth0 for Ethernet or -i any for all interfaces).
        * `tcpdump -w FILE`: Saves captured packets to a file, usually with a `.pcap` extension, for later analysis.
        * `tcpdump -r FILE`: Reads and displays packets from a saved file.
        * `tcpdump -c COUNT`: Limits capture to a specific number of packets.
        * `tcpdump -n / -nn`: Avoids resolving IP addresses and ports to domain names and protocol names, making output quicker and easier to interpret.
    - [Example command is shown here.](images/tcpdump_cmd.jpg)
2. Filtering Experssion in tcpdump
    - Filter Expression is used to filter packets based on criteria such as hosts, ports, or protocols:
        * *Host Filtering*: 
            * `tcpdump host HOSTNAME` captures packets involving a specific host.
            * Use `src host HOST` or `dst host HOST` to filter packets only from a source or to a destination.
            * [Example saved in outputs](outputs/tcpdump_host_filtering.txt)
        * *Port Filtering*: 
            * `tcpdump port PORT_NUMBER` captures packets on a specific port. 
            * Use `src port` or `dst port` for finer filtering.
            * [Example saved in outputs](outputs/tcpdump_port_filtering.txt)
        * *Protocol Filtering*: 
            * `tcpdump PROTOCOL` filters packets by protocol, like tcp, udp, icmp, etc.
            * [Example saved in outputs](outputs/tcpdump_protocol_filtering.txt)
    - **Logical Operators in Tcpdump:**
        * `and` (`tcpdump host 1.1.1.1 and tcp`): Captures packets matching both conditions.
        * `or` (`tcpdump udp or icmp`): Captures packets meeting either condition.
        * `not` (`tcpdump not tcp`): Captures all packets except those matching the condition.
        * Examples for Logical Operators:
            * `tcpdump -i any tcp port 22` listens on all interfaces and captures tcp packets to or from `port 22` (SSH traffic).
            * `tcpdump -i wlo1 udp port 123` listens on the WiFi network card and filters udp traffic to `port 123`, the Network Time Protocol (NTP).
            * `tcpdump -i eth0 host example.com` and `tcp port 443 -w https.pcap` will listen on `eth0`, the wired Ethernet interface and filter traffic exchanged with `example.com` that uses tcp and `port 443. `
3. Advanced Filtering in tcpdump
    - Advanced filtering uses conditions for more specific needs:
        * *Packet Length*: Use `greater LENGTH` or `less LENGTH` to capture packets above or below a specified length.
        * *Binary Operations*: Filters can be defined using binary operators on protocol headers:
            * `tcp[tcpflags] == tcp-syn`: Captures packets with only the SYN flag set.
            * `tcp[tcpflags] & tcp-ack != 0`: Captures packets with at least the ACK flag set.
            * [Example saved in outputs](outputs/tcpdump_tcpflag_RST.txt)
4. Displaying Packets
    - Customizing how Tcpdump displays captured packets can make analysis more straightforward:
        * `tcpdump -q`: Quick output with brief information.
        * `tcpdump -e`: Displays MAC addresses.
        * `tcpdump -A`: Shows packet contents in ASCII format.
        * `tcpdump -xx`: Displays packet data in hexadecimal format.
        * `tcpdump -X`: Shows both hexadecimal and ASCII formats.
        * [Example saved in outputs](outputs/tcpdump_x_packet.txt)