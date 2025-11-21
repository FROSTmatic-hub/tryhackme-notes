# Firewall Fundamentals (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 5 min

## Objective
Learn about firewalls and get hands-on with Windows and Linux built-in firewalls.

## Core Concepts Covered
1. What Is a Firewall?
    - A firewall is a security device or software that monitors and controls incoming and outgoing network traffic based on predefined security rules.
    -  Its primary role is to block unauthorized access while allowing legitimate communication between networks.
    - Firewalls can be hardware-based, software-based, or a combination of both.
    - They operate at different layers of the OSI model, depending on their type and sophistication.
    - **Types of Firewalls**
        1. **Stateless Firewall**
            * OSI Layers: Operates at Layer 3 (Network) and Layer 4 (Transport)
            * Function: Filters packets individually based on static rules.
            * Pros: Fast and resource-efficient.
            * Cons: Less secure and is unable to track connection state.
            * Example: Allows traffic from a known IP but can’t detect if it’s part of a malicious session.
        2. **Stateful Inspection Firewall**
            * OSI Layers: Also Layer 3 and Layer 4.
            * Function: Tracks active connections and filters packets based on connection state.
            * Pros: More secure than stateless firewalls.
            * Cons: Requires more memory and processing.
            * Example: Only allows packets that are part of an established session.
        3. **Proxy Firewall**
            * OSI Layers: Operates from Layer 3 to Layer 7.
            * Function: Acts as an intermediary between internal devices and external servers.
            * Pros: Filters traffic at the application level.
            * Cons: Can introduce latency.
            * Example: Evaluates HTTP requests and forwards them using its own IP address.
        4. **Next-Generation Firewall (NGFW)**
            * OSI Layers: Layer 3 to Layer 7.
            * Function: Combines traditional firewall features with advanced capabilities like:
                * Intrusion Prevention Systems (IPS)
                * Application control
                * Deep packet inspection
            * Pros: Highly secure and intelligent.
            * Example: Uses SSL/TLS decryption to inspect encrypted traffic and block threats
2. Rules in Firewalls
    - **What Are Firewall Rules?**
        * Firewall rules define how traffic is filtered, allowed, blocked, or redirected across a network.
        * They can be customized to meet specific security needs (eg, allow SSH only from trusted IPs).
    - **Key Components of a Firewall Rule**
        * **Source Address:** IP address initiating the traffic
        * **Destination Address:** IP address receiving the traffic
        * **Port:** Network port used (eg, 80 for HTTP, 22 for SSH)
        * **Protocol:** Communication protocol (eg, TCP, UDP)
        * **Direction:** Whether the rule applies to incoming or outgoing traffic
        * **Action:** What to do with the traffic: Allow, Deny, or Forward
    - **Types of Firewall Actions**
        * **ALLOW**
            * Permits traffic that matches the rule.
            * [Example: Allow all outbound HTTP traffic from internal network](outputs/firewall_allow.txt)
        * **DENY**
            * Blocks traffic that matches the rule.
            * [Example: Deny all inbound SSH traffic to internal network](outputs/firewall_deny.txt)
        * **FORWARD**
            * Redirects traffic to a specific internal destination.
            * [Example: Forward inbound HTTP traffic to internal web server](outputs/firewall_forward.txt)
3. Linux Firewall Framework 
    - Linux also offers the functionality of a built-in firewall.
    - **Netfilter**
        * Netfilter is the core framework in Linux for firewall functionalities.
        * It supports:
            * Packet filtering
            * Network Address Translation (NAT)
            * Connection tracking
        * Tools built on Netfilter:
            * `iptables`: Traditional and widely used.
            * `nftables`: Modern replacement with simplified syntax
    - **UFW (Uncomplicated Firewall)**
        * A user-friendly interface for managing firewall rules.
        * Commonly used on Debian-based systems like Ubuntu.
        * Simplifies rule creation compared to `iptables`.
    - **UFW Command Summary**
        * Check firewall status: `sudo ufw status` 
        * Enable firewall : `sudo ufw enable` 
        * Set default policy : `sudo ufw default allow outgoing` or `deny incoming`
    - **Rule Management**
        * **Allow outgoing traffic:**
            * `sudo ufw default allow outgoing`
            * Permits all outbound connections
        * **Deny incoming SSH**
            * `sudo ufw deny 22/tcp`
            * Blocks inbound SSH (port 22)
        * List rules (numbered):
            * `sudo ufw status numbered`
            * Shows active rules with index
        * Delete a rule:
            * `sudo ufw delete [rule number]`
            * Removes a specific rule
            * Example: `suod ufw delete 2` 

## Learning and Reflections
- Learned about firewall and its types.
- Learned about the different rules in firewalls.
- Learned about the linux firewall framework.

































