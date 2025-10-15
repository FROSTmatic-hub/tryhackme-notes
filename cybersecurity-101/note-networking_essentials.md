# Networking Essentials (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn networking protocols from automatic configuration to routing packets to the destination

## Core Concepts Covered
1. DHCP (Dynamic Host Configuration Protocol)
    - **What It Does**
        *  DHCP is used to automatically assign:
            * IP Address
            * Subnet Mask
            * Gateway (router)
            * DNS Server
        * It saves time and avoids manual errors like IP conflicts.
    - **The DORA Process**
        * [DHCP follows four steps: Discover, Offer, Request, and Acknowledge.](images/DORA_process.jpg)
            1. **D**iscover: Client sends a broadcast to find DHCP servers (`DHCPDISCOVER`).
            2. **O**ffer: Server replies with an available IP (`DHCPOFFER`).
            3. **R**equest: Client accepts the offer (`DHCPREQUEST`).
            4. **A**cknowledge: Server confirms assignment (`DHCPACK`).
2. ARP (Address Resolution Protocol)
    - **What is ARP**
        * ARP is used to map an IP address (Layer 3) to a MAC address (Layer 2).
        * When a device wants to send data to another device on the same network, it needs the recipient’s MAC address, even if it only knows the IP.
        * ARP is **not encapsulated in IP or UDP**, it’s directly inside an Ethernet frame.
    - **ARP Process**
        1. ARP Request:
            * Sent as a broadcast.
            * Example: *"Who has IP `192.168.0.1`? Tell `192.168.0.68`"*.
            * Goes to all devices using MAC address `ff:ff:ff:ff:ff:ff`.
        2. ARP Reply:
            * The device with IP `192.168.0.1` replies.
            * Example: *"I am at MAC `00:0c:29:3e:1c:6b`”*.
3. ICMP (Internet Control Message Protocol)
    - ICMP is used for **network diagnostics and error reporting**.
    - The `ping` command sends:
        * *Echo Request*: to test if a device is reachable.
        * *Echo Reply*: confirms the device responded.
    - **ICMP Packet Details**
        * *Type 8*: Echo request
        * *Type 0: Echo reply
4. Tracerroute
    - Uses the **TTL (Time-to-Live)** field in IP packets.
    - Each router decrements TTL by 1.
    - If TTL reaches 0, router sends **ICMP Type 11 (Time Exceeded)**.
    - This reveals the path packets take to reach a destination.
5. Routing Protocols
    - Routing protocols help routers decide the best path for data to travel across networks. 
    - Here are some key Routing protocols:
        1. **OSPF (Open Shortest Path First)**
            * Uses link-state info to calculate the shortest path.
            * Ideal for large enterprise networks.
        2. **EIGRP (Enhanced Interior Gateway Routing Protocol)**
            * Cisco proprietary.
            * Uses bandwidth and delay to choose efficient routes.
            * Combines speed and reliability.
        3. **BGP (Border Gateway Protocol)**
            * Used across the Internet between ISPs.
            * Handles routing between autonomous systems.
            * Critical for global internet traffic.
        4. **RIP (Routing Information Protocol)**
            * Simple and easy to configure.
            * Chooses routes based on hop count.
            * Best for small networks, not scalable.
6. NAT (Network Address Translation)
    - **What Is NAT?**
        * NAT is a method used by routers to allow multiple devices on a **private network** to access the internet using **one public IP address**.
    - **Why Do We Need NAT?**
        * IPv4 addresses are limited (around 4.3 billion possible.)
        * NAT allows thousands of devices to share one public IP.
        * It also adds a layer of security by hiding internal IPs from the outside world.
    - **How NAT works**
        * Example: A laptop (IP: `192.168.1.4`) wants to visit a website.
            1. Laptop sends request to `example.com` on port `80`.
                * Source IP: `192.168.1.4`
                * Source Port: `15243` (random high port)
                * Destination IP: `93.184.216.34` (example.com)
                * Destination Port: `80`
            2. Router receives the request and rewrites:
                * Source IP to router’s public IP: `212.3.4.5`
                * Source Port to keeps `15243` or changes it
                * It stores a mapping: `192.168.1.4:15243 → 212.3.4.5:15243`
            3. Router sends the request to the website using its public IP.
            4. Website replies to:
                * Destination IP: `212.3.4.5`
                * Destination Port: `15243`
            5. Router checks its NAT table:
                * Sees that `15243` maps to `192.168.1.4`
                * Rewrites the destination IP and port
                * Sends the reply to the laptop

## Learning and Reflections
- Learned about DHCP and the DORA process.
- Learned about ARP and ARP process.
- Learned about ICMP, ping, traceroute.
- Learned different routing protocols.
- Learned about NAT and how it works.
































