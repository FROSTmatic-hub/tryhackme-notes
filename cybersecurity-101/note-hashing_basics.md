# Hashing Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 25 min

## Objective
Learn about hashing functions and their uses in password verification and file integrity checking

## Core Concepts Covered
1. Hash Functions
    - **What is a Hash Function**
        * A hash function takes input data of any size and produces a fixed-size output (called a hash or digest).
        * It is not encryption, no key is involved, and the process is one-way.
    - **Key Characteristics of Hashing**
        * *Fixed Output Size*: Regardless of input size, output length is constant (eg, 256 bits for SHA-256)
        * *No Reversibility*: Cannot derive original input from hash
        * *Collision Resistance*: Ideally, no two different inputs produce the same hash
    - **Why Hashing Is Important**
        1. **Password Security**
            * Servers store hashes of passwords, not the passwords themselves.
            * During login, your input is hashed and compared to the stored hash.
        2. **Data Integrity**
            * Hashes verify that files haven’t been tampered with (eg, software downloads).
        3. **Digital Signatures**
            * Hashes are signed to prove authenticity and integrity.
        4. **Blockchain & Cryptography**
            * Hashing is foundational to blockchains, digital certificates, and secure messaging.
2. Hash Collisions
    - **What is Hash Collisions**
        * When two different inputs produce the same hash output.
        * *Due to the pigeonhole principle*:
            * Infinite inputs → finite outputs → collisions are inevitable
    - **Why Collisions matter**
        * Can be exploited to forge digital signatures, certificates, or tamper with data.
        * Weak hash functions are vulnerable to collision attacks.
3. Insecure Password Storage
    - Passwords are the first line of defense in authentication.
    - Storing them improperly can lead to massive data breaches.
    - Secure systems never store plaintext passwords.
    - **Common Insecure Practices**
        1. **Storing Passwords in Plaintext**
            * No protection at all, anyone with access can read them.
            * Example: RockYou breach where millions of passwords leaked in plaintext.
            * File: `rockyou.txt` found in Kali Linux (`/usr/share/wordlists`)
        2. **Using Insecure Encryption**
            * Encryption is reversible, if the key is exposed, all passwords are compromised.
            * Example: Adobe breach used weak encryption, exposing user credentials.
        3. **Using Weak Hashing Algorithms**
            * Hashing is one-way, but weak algorithms can be cracked.
            * Example: LinkedIn breach (2012) used SHA-1 without salting, millions of passwords were cracked and leaked.
4. Secure Password Storage
    - Instead of storing passwords directly, systems store their hash values.
    - If a database is breached, attackers must crack each hash individually.
    - **What is Rainbow tables**
        * A rainbow table is a precomputed list of hashes and their matching plaintext passwords.
        * Attackers use it to quickly reverse hashes by lookup instead of brute-force.
        * [Example of Rainbow table is given here.](images/rainbow_tables.jpg)
    - **What is Salting**
        * Salting is a random string added to the password before hashing.
        * Ensures that even identical passwords produce different hashes.
        * Salts are stored alongside the hash in the database.
        * Example:
            * Password: `AL4Kc*2e9k`
            * Salt: `v4Um^ep`
            * Combined: `AL4Kc*2e9kv4Um^ep`
    - **Best Practices for Secure Password Storage**
        * Use a secure hashing algorithm like `bcrypt`, `scrypt`, `Argon2`, `PBKDF2`.
        * Generate a unique salt for each user.
        * Concatenate password + salt, then hash.
        * Store both the hash and the salt in the database.
        * Avoid encryption for password storage.
5. Linux Password Storage
    - Linux passwords are stored in `/etc/shadow`
    - Stores encrypted passwords for user accounts.
    - Only a root user can read it.
    - Format: `username:$id$salt$hash:...`
        * `$id$` = hashing algorithm identifier
        * `salt` = random value to protect against rainbow tables
        * `hash` = result of hashing password + salt
    - [Some common hashing algorithms in linux are listed here.](images/linus_alogrithms.jpg)
    - Example Entry from `/etc/shadow`:
        * `root:$y$j9T$wHc4K6wSuoCwt/etc/4hodA9sFh4r.TuWjPzmaFahGqA4L0nA4d.19956:99999:7:::`
        * `$y$` → yescrypt algorithm
        * `j9T` → algorithm parameters
        * `wHc4K6...` → salt and hash value
        * Remaining fields: password aging and expiration setting
6. Windows Password Storage
    - Stores in SAM (Security Accounts Manager).
    - Stores password hashes for local user accounts.
    - Hashes are vulnerable to offline attacks if SAM file is extracted.
    - Common attack tools: Hashcat, John the Ripper.
    - Windows uses **NTLM hashes** (not salted).
    - NTLM hashes are vulnerable to:
        * Rainbow Tables
        * Brute-force attacks
        * Pass-the-hash attacks
7. Password Cracking with Hashcat
    - Hashcat is a powerful password recovery tool.
    - Supports multiple hash types (MD5, SHA-1, bcrypt, etc.).
    - Can leverage GPU acceleration for high-speed cracking.
    - **GPU acceleration**
        * Modern GPUs are optimized for parallel processing, making them ideal for hash cracking.
        * GPUs outperform CPUs in brute-force and dictionary attacks.
        * Tools like Hashcat can use OpenCL or CUDA to tap into GPU power.
    - **Hashcat Commands**
        * **Basic syntax**
            * `hashcat -m [hash_type] -a [attack_mode] [hash_file] [wordlist]`
        * Example (md5 cracking):
            * `hashcat -m 0 -a 0 hash.txt /usr/share/wordlists/rockyou.txt`
            * `-m 0` → MD5 hash type
            * `-a 0` → Straight attack (dictionary-based)
            * `rockyou.txt` → Common password wordlist
8. Integrity Checking with Hashes
    -  Integrity check ensures that a file or message has not been altered.
    - Compares the computed hash of a file with a known good hash.
    - Commonly used in verifying ISO downloads, software packages, and backups.
    - **HMAC (Keyed-Hash Message Authentication Code)**
        * HMAC verifies both authenticity and integrity of a message.
        * Combines a secret key with a hash function.
        * Used in secure APIs, TLS, JWTs, and message authentication.
    - **How HMAC works**
        1. Pad the secret key to the block size of the hash function.
        2. XOR the padded key with ipad (inner pad).
        3. Hash the result with the message.
        4. XOR the padded key with opad (outer pad).
        5. Hash the result with the output from step 3.
        6. Final output = HMAC value

## Learning and Reflections
- Learned what are hash functions.
- Learned about hash collisions.
- Learned about insecure pass-storage techniques.
- Learned about secured pass-storage techniques.
- Learned about linux default pass-storage.
- Learned about windows pass-storage.
- Learned how to use hashcat for password cracking.
- Learned about integrity checks using hashes.























































