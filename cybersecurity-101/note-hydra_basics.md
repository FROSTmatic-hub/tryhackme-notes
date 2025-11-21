# Hydra (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Learn about and use Hydra, a fast network logon cracker, to bruteforce and obtain a website's credentials.

## Core Concepts Covered
1. Hydra (Brute-Force Password Cracking Tool)
    - **What is Hydra?**
        * A fast and flexible online brute-force tool for cracking login credentials.
        * Supports a wide range of protocols, including:
            * SSH, FTP, HTTP(S), Telnet, RDP, SMB, SMTP, LDAP, MySQL, PostgreSQL, VNC, and many more.
        * Can target web forms, network services, and remote systems.
        * Does not support protocols with one-time passwords or challenge-response authentication.
2. Brute-Forcing POST Web Forms
    - Hydra can be used to brute-force login credentials on web forms that use the POST method.
    - Command Syntax:
        * `hydra -l <username> -P <wordlist.txt> http-post-form "<path>:<login_credentials>:<invalid_response>"`
        * `http-post-form`: Specifies the attack type (POST web form)
        * `<path>`: URL path to the login page (eg, `/login.php`)
        * `<login_credentials>`: Form fields with placeholders: `username=^USER^&password=^PASS^`
        * `<invalid_response>`: Text returned by the server when login fails (eg, `"Invalid username or password"`)
    - Example command:
        * `hydra -l admin -P wordlist.txt 10.0.0.1 http-post-form "/login.php:username=^USER^&password=^PASS^:Invalid username or password"`
        * Tries logging in as `admin` using passwords from `wordlist.txt`
        * Targets `10.0.0.1` and the `/login.php` page
        * Detects failed attempts by matching the response string
3. SSH Brute-Force Attack
    - Hydra can be used to brute-force SSH login credentials by trying multiple passwords against a specified username and IP address
    - Command Syntax:
        * `hydra -l <username> -P <path-to-password-list> <target-ip> -t <threads> ssh`
        * `-l`: Specifies the SSH username
        * `-P`: Path to the password list file
        * `-t`: Number of threads to run in parallel
        * `ssh`: Protocol to target (SSH in this case)
    - Example command:
        * `hydra -l root -P passwords.txt 10.10.20.21 -t 4 ssh`
        * Tries logging in as `root`
        * Uses `passwords.txt` for brute-force attempts
        * Runs 4 threads simultaneously for faster execution

## Learning and Reflections
- Learned about hydra and its different cracking protocols.
- Learned how to brute force POST web forms.
- Learned about SSH attacks using hydra.













