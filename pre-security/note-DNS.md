# DNS in Detail (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 45 min

## Objective
Learn how DNS works and how it helps you access internet services.

## Core Concepts Covered
1. What is DNS?
    - DNS is described as the internet’s phonebook.
    - It translates human-readable domain names (like tryhackme.com) into IP addresses (like 192.168.1.1) that computers use to locate each other
2. Domain Hierarchy
    - **Root** is represented by a dot `.`, it's the starting point.
    - **TLD (Top-Level Domain)** includes examples like `.com`, `.org`, `.edu`.
    - **SLD (Second-Level Domain)** is the name registered under a TLD, like `tryhackme` in `tryhackme.com`.
    - **Subdomain** are prefixes like `www.` or `blog.` added to the SLD.
    - **SLD** supports max of 63 characters, only letters, numbers and hyphens.
    - **Full Domain** supports max of 253 characters total.
3. DNS Record Types
    - **A Record**: Maps domain to IPv4 address.
    - **CNAME Record**: Alias for another domain
    - **MX Record**: Mail exchange info for email routing, includes priority values.
    - **TXT Record**: Stores arbitrary text which is used for domain verification, SPF records, etc.
4. Making a DNS Request
    1. Resolution Flow:
        - Browser asks Operating System for IP of domain.
        - Operating System checks local cache.
        - If IP is not found, it queries a recursive resolver.
        - Resolver asks:
            - **Root** server for TLD info.
            - **TLD** server for SLD info.
            - **Authoritative name server** for the final IP.
            - IP is returned to the browser and the website loads.
    2. Caching: Speeds up future lookups by storing previous results.

## Learning and Reflections
- Learned about DNS.
- Learned the Different DNS Hierarchy.
- Learned different types of DNS records.
- Learned how a DNS request is made.
            