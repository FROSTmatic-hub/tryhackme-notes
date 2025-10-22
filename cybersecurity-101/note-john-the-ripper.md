# John the Ripper: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Learn how to use John the Ripper, a powerful and adaptable hash-cracking tool

## Core Concepts Covered
1. John the Ripper
    - John the Ripper (often just “John”) is a powerful, open-source password cracking tool used by penetration testers, forensic analysts, and security researchers.
    - **Key Features of John**
        * Cracks hashed passwords using dictionary attacks, brute-force, and hybrid methods.
        * Supports a wide range of hash formats: MD5, SHA-1, bcrypt, NTLM, and more.
        * Can auto-detect hash types or accept manual format specification.
        * Available on Linux, macOS, and Windows.
    - **Syntax and Usage**
        * **Basic Syntax**
            * `john [options] [hash_file]`
            * Runs John with default settings on the specified hash file.
        * **Automatic Cracking with Wordlist**
            * `john --wordlist=/usr/share/wordlists/rockyou.txt hash_to_crack.txt`
            * Uses the `rockyou.txt` wordlist to try cracking hashes in `hash_to_crack.txt`.
        * **Format-Specific Cracking**
            * `john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt hash_to_crack.txt`
            * `--format=` specifies the hash type (e.g., raw-md5, bcrypt, sha512crypt)
            * Use `john --list=formats` to view all supported formats.
2. Windows Authentication Hashes
    - **What Is NTHash / NTLM?**
        * NTHash (also called NTLM) is the hash format used by Windows to store user and service passwords.
        * NTLM is a legacy authentication protocol still used in:
            * Local Windows accounts
            * SAM database (Security Accounts Manager)
            * Active Directory (NTDS.dit file)
    - **How Are Hashes Extracted?**
        * Tools like **Mimikatz**, **secretsdump.py**, or **pwdump** can extract NTLM hashes from:
            * Live systems
            * Memory dumps
            * Offline registry hive
    - **Vulnerabilities**
        * NTLM hashes are not salted, making them vulnerable to:
            * Brute-force attacks
            * Dictionary attacks
            * Pass-the-hash attacks
        * Weak passwords can be cracked quickly using tools like:
            * John the Ripper
            * Hashcat
3. Cracking Hashes from `/etc/shadow` (Linux)
    - **What Is /etc/shadow?**
        * Stores hashed passwords for all user accounts.
        * Also includes metadata like last password change and expiration info.
        * **Only root can read it, requires sudo privileges to access.**
    - **Preparing Hashes for Cracking**
        * Combine `/etc/passwd` and `/etc/shadow`
        * John the Ripper needs both files to map usernames to hashes
        * Use the `unshadow` tool to merge them into a single file
    - **Unshadow syntax**
        * `unshadow passwd.txt shadow.txt > unshadow.txt`
            * `passwd.txt`: Extracted `/etc/passwd` file
            * `shadow.txt`: Extracted `/etc/shadow` file
            * `unshadow.txt`: Output file ready for cracking
4. John the Ripper (Single Crack Mode)
    - **What Is Single Crack Mode?**
        * A cracking mode that uses user-specific information to generate password guesses.
        * Ideal for targeting simple, personalized passwords.
        * Leverages data from `/etc/passwd`, `/etc/shadow`, and the **GECOS** field.
    - **Word Mangling Techniques**
        * John generates variations of usernames (markus) or known words:
            * `Markus1`, `Markus@`, `MARKUS`, `markus#`, etc.
            * These guesses are based on common patterns users apply to their passwords.
    - **Single Crack Mode Syntax**
        * **Command Format**:
            * `john --single --format=[format] [path_to_file]`
            * `--single`: Enables single crack mode
            * **--format**=: Specifies hash type (eg, raw-md5, sha512crypt)
        * **Hash file must include username:hash format**:
            * `markus:1e1e4e6f0c8d5c6a2a8c8f0a4cc0668033`
            * This allows John to associate the hash with a user and apply mangling logic.
5. John the Ripper (Custom Rules)   
    - **What Are Custom Rules?**
        * Custom rules define patterns and transformations applied to base words in a wordlist.
        * They help simulate real-world password habits, like appending numbers or symbols.
        * Useful for cracking passwords that follow predictable complexity requirements.
    - **Creating Custom Rules**
        * `c`: Capitalize first letter
        * `A`: Append character
        * `z`: Append character
        * `[0-9]`: Append digit
        * `!`: Append symbol
        * `[A-Z]`: Uppercase letters
        * `[a-z]`: Lowercase letters
        * `[!@#$%^&*(]`: Common symbols
    - **Where to Define Rules**
        * Rules are written in the `john.conf` file:
            * TryHackMe path: `/opt/john/run/john.conf`
            * Standard path: `/etc/john/john.conf`
        * You can create your own `[List.Rules:YourRuleName]` section.
    - **Using Custom Rules in Cracking**
        * Syntax:
            * `john --wordlist=[path_to_wordlist] --rules=RulePassword [path_to_hash_file]`
            * `--rules=` tells John to use your custom rule
6. Cracking Password-Protected ZIP Files with John
    - John the Ripper can crack ZIP file passwords using a helper tool called `zip2john`.
    - This tool extracts the hash from the ZIP file and converts it into a format John can process.
    - **How to use**
        1. **Extract Hash from ZIP**
            * `zip2john zipfile.zip > zip_hash.txt`
            * `zpfile.zip`: The target ZIP file
            * `zip_hash.txt`: Output file containing the extracted hash
        2. **Crack the Hash with John**
            * `john --wordlist=/usr/share/wordlists/rockyou.txt zip_hash.txt`
            * Uses the popular `rockyou.tx`t wordlist to attempt cracking the password.
7. Cracking SSH Key Passwords with John the Ripper
    - SSH private keys (eg, `id_rsa`) are used for secure remote login.
    - If an attacker obtains a private key, they still need the passphrase to use it.
    - John the Ripper can crack this passphrase using a helper tool called `ssh2john`.
    - **How to use**
        1. **Convert SSH Key to Hash Format**   
            * `ssh2john id_rsa > id_rsa.hash.txt`
            * Converts the private key into a format John can understand.
            * If using the Python version: `/usr/share/john/ssh2john.py id_rsa > id_rsa.hash.txt`
        2. **Crack the Hash with John**
            * `john --wordlist=/usr/share/wordlists/rockyou.txt id_rsa.hash.txt`
            *  Uses the `rockyou.txt` wordlist to brute-force the passphrase.

## Learning and Reflections
- Learned about John the Ripper and its syntax.
- Learned about windows authenticaion hashes (NT/NTLM).
- Learned about cracking the linux hashes.
- Learned how to use the single crack mode in john.
- Learned how to set custom rules in john.
- Learned how to crack pass-protected zip files.
- Learned how to crack ssh key hashes.















































