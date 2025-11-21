# Gobuster: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
This module focuses on an introduction to Gobuster, an offensive security tool used for enumeration.

## Core Concept Covered
1. Gobuster – Web & DNS Enumeration Tool
    - **What is Gobuster?**
        * A fast, command-line tool written in Golang.
        * Used for brute-forcing:
            * Web directories and files (`dir`)
            * DNS subdomains (`dns`)
            * Virtual hosts (`vhost`)
            * AWS S3 buckets (`s3`)
            * Google Cloud Storage (`gcs`)
            * Custom fuzzing (`fuzz`)
        * Commonly used in penetration testing, bug bounty hunting, and security assessments.
        * Use `gobuster --help` to list the gobust help menu.
    - **Key Concepts**
        * Enumeration: Listing all possible resources (eg, hidden directories).
        * Brute Force: Trying every wordlist entry until a valid match is found.
    - **Example Usage**
        * `gobuster dir -u http://www.example.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
        * Scans for directories on `http://www.example.com`
        * Uses a medium-sized wordlist from DirBuster
        * Can be customized with extensions, threads, and output options
2. Using `dir` Mode
    - Gobuster’s dir mode is used to brute-force directories and files on web servers using wordlists.
    - It helps uncover hidden paths and resources during penetration testing.
    - **Key Flags and Parameters**
        * `-u`: Target URL (eg, `http://www.example.com`)
        * `-w`: Path to wordlist (e.g, `/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`)
        * `-x`: File extension to search for (eg, `.php`, `.html`)
    - **Example Commands**
        * Basic Scan:
            * `gobuster dir -u http://www.example.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
        * Scan a subdirectory:
            * `gobuster dir -u http://www.example.com/images/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
        * Use HTTPS:
            * `gobuster dir -u https://www.example.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
        * Custom Port:
            * `gobuster dir -u http://www.example.com:8080 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
        * Target IP:
            * `gobuster dir -u http://192.168.0.1 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
        * Include file extension:
            * `gobuster dir -u http://www.example.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x .php`
3. Using `dns` Mode
    - Gobuster’s `dns` mode is used to brute-force subdomains of a target domain using a wordlist.
    - It helps uncover hidden or vulnerable subdomains during reconnaissance.
    - **Key Flags**
        * `-d`/`--domain`: Target domain to enumerate (eg, `example.com`)
        * `-w`/`--wordlist`: Path to wordlist containing subdomain names
        * `--show-ips`: Display IP addresses of resolved subdomains
        * `--show-cname`: Display CNAME records (can’t be used with `--show-ips`)
        * `--resolver`: Use custom DNS servers for resolution
    - **Example Command**
        * `gobuster dns -d example.com -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt`
        * Enumerates subdomains like `test.example.com`, `admin.example.com`, etc.
        * Uses each wordlist entry to construct DNS queries.
        * Helps identify entry points for further testing (eg, mobile APIs, staging servers).
4. Using `vhost` Mode
    - Gobuster’s `vhost` mode is used to brute-force virtual hostnames, different websites hosted on the same IP/server.
    - Unlike subdomains (DNS-based), virtual hosts are IP-based and resolved via HTTP headers.
    - **Key Flags**
        * `-u`/`--url`: Target base URL (eg, `http://10.208.1.68`)
        * `-w`/`--wordlist`: Path to wordlist for hostname guesses
        * `-d`/`--domain`: Domain to append to wordlist entries (eg, `example.htb`)
        * `-a`/`--append-domain`: Automatically append domain to wordlist entries
        * `-m`/`--method`: HTTP method to use (eg, GET, POST)
        * `-l`/`--exclude-length`: Filter responses by body length
        * `-f`/`--follow-redirect`: Follow HTTP redirects
        * `-r`/`--random-agent`: Use random User-Agent headers
        * `k`/`--no-tls-validation`: Skip TLS certificate checks
        * `-o`/`--output`: Save results to file
    - **Example Command**
        * `gobuster vhost -u http://10.208.1.68 -w /usr/share/wordlists/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -t 50 -r -k -o gobuster-vhosts.txt -d example.htb`
        * Targets IP `10.208.1.68`
        * Uses a large subdomain wordlist
        * Discovers virtual hosts like:
            * `blog.example.htb`
            * `shop.example.htb`
            * `admin.example.htb`

## Learning and Reflections
- Learned about gobuster and its key concepts.
- Learned about the `dir` mode in gobuster.
- Learned about the `dns` mode in gobuster.
- Learned about the `vhost` mode in gobuster.





















