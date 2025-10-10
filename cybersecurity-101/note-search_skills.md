# Search Skills (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn to efficiently search the Internet and use specialized search engines and technical docs.

## Core Concepts Covered
1. Search Engines Overview
    - Search engines help locate information across the web.
    - Using search operators improves precision and relevance of results.
    - Useful Google Search Operator:
        1.  `"exact phrase"`
            - Finds pages with the exact phrase.
            - Example: `"passive reconnaissance"`.
        2. `site:`
            - Limits results to a specific domain
            - Example: `site:TryHackMe.com successstories`.
        3. - `-` (minus sign)
            - Excludes specific terms from results.
            -  Example: `pyramids -tour -tourism`.
        4. `filetype:`
            - Searches for specific file formats.
            - Example: `filetype:pdf cyber security`.
2. What is [Shodan](https://www.shodan.io/)?
    - A search engine for Internet-connected devices.
    - Used to find servers, networking gear, ICS systems, and IoT devices.
    - Helps identify exposed systems and outdated software versions.
    - Example Search: [Apache 2.4.1](images/shodan_apache_search.jpg)
        - **Total Results**: 13,493 servers running Apache 2.4.1.
        - **Top Countries** like:
            - **Japan**: 3,350
            - **Singapore**: 3,107
            - etc
3. What is [Censys](https://search.censys.io/)?
    - A search engine for Internet-connected hosts, websites, certificates, and other assets.
    - Similar to Shodan but with a stronger focus on enumeration, auditing, and asset discovery.
    - Useful for:
        - Identifying open ports and services.
        - Tracking software versions across the web.
    - Example Search: [apache_2.4.1](images/censys_apache_search.png)
        - Returns hosts running Apache 2.4.1.
        - Results include:
            - IP addresses
            - Location (city & country)
            - Organization
            - Services running, HTTP on port 80, HTTPS on port 443, etc.
4. What is [VirusTotal](https://www.virustotal.com/gui/home/upload)?
    - An online tool that scans files and URLs using multiple antivirus engines.
    - Useful for verifying suspicious files and links before execution or sharing.
5. What is [Have I Been Pwned (HIBP)](https://haveibeenpwned.com/)?
    - A free service that checks if your email address has been exposed in data breaches.
    - Helps users stay informed about compromised credentials and take action.
6. What is CVE?
    - CVE stands for **Common Vulnerabilites and Exposures**.
    - Provides standardized IDs for publicly known security flaws.
    - Helps track and share vulnerability data across platforms and vendors.
7. What is [Exploit Database](https://www.exploit-db.com/)?
    - A repository of publicly known exploits for software vulnerabilities.
    - Used by ethical hackers, researchers, and penetration testers.
    - Helps validate vulnerabilities and simulate real-world attacks in lab environments.


## Learning and Reflections
- Learned different search engines and search engine operations.
- Learned about Shodan.
- Learned about Censys.
- Learned about VirusTotal.
- Learned about HIBP.
- Learned about CVEs and Exploit Database.












        




            



