# Cryptography Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Learn the basics of cryptography and symmetric encryption.

## Core Concepts Covered
1. What Is Cryptography?
    - Cryptography is the science of securing information by transforming it into a format that is unreadable to unauthorized users.
    - It ensures:
        * **Confidentiality**: Only intended recipients can read the data.
        * **Integrity**: Data hasn’t been altered during transmission.
        * **Authentication**: Verifies the identity of the sender or receiver.
        * **Non-repudiation**: Prevents denial of actions like sending a message.
    - **Core Functions of Cryptography**
        * **Secures communication**: Used in encrypted messaging, VPNs, and secure browsing (HTTPS).
        * **Protects data**: Ensures that personal, financial, and medical information remains private.
        * **Supports compliance**: Helps organizations meet legal and regulatory standards.
2. Core Terminology in Cryptography
    - **Plaintext**: Original readable data (eg, messages, files, images). Can be text, multimedia, or binary.
    - **Ciphertext**: Encrypted, unreadable version of plaintext. Ideally reveals nothing about the original message except its size.
    - **Cipher**: Algorithm used to convert plaintext into ciphertext and vice versa. Developed by cryptographers/mathematicians.
    - **Key**: A string of bits used by the cipher to perform encryption/decryption. Can be symmetric (same key) or asymmetric (key pair).
    - **Encryption**: The process of converting plaintext into ciphertext using a cipher and a key. Cipher is public; key is secret.
    - **Decryption**: The reverse process, converting ciphertext back into plaintext using the same cipher and key. Without the key, decryption should be infeasible.
3. Encryption & Decryption in Cryptography
    - **Encryption Process**
        * `plaintext → [Encrypt + Key] → Ciphertext`
        * Sender takes readable data (plaintext)
        * Applies an encryption algorithm (cipher) using a key
        * Produces ciphertext, which is secure and unreadable without the key
    - **Decryption Process**
        * `Ciphertext → [Decrypt + Key] → Plaintext`
        * Recipient receives ciphertext
        * Uses the correct key and decryption algorithm
        * Recovers the original plaintext
        * **The key is the critical component without it, the cipher is useless for decryption**.
4. Caesar Cipher
    - One of the earliest known ciphers, used by Julius Caesar in the 1st century BCE.
    - Cryptography itself dates back to ancient Egypt around 1900 BCE.
    - **How Caesar Cipher works**
        * **Type**: Substitution cipher
        * **Mechanism**: Each letter in the plaintext is shifted by a fixed number of positions in the alphabet.
        * **Key**: The number of positions to shift (eg, key = 3 means shift each letter 3 places to the right).
        * *Example*:
            * Plaintext: THINKYELLOW
            * Key: 3
            * Ciphertext: WKLQN\BHOORZ
            * T → W, H → K, I → L, etc.
    - **Decryption Process**
        * To decrypt a Caesar Cipher:
            * Shift each letter in the ciphertext back by the key value.
            * *Example*:
                * Ciphertext: MCRKPHRIN
                * Key: 3
                * Plaintext: JZOHMEOLF
    - **Because Caesar Cipher has only 25 possible keys (excluding key = 0), it’s vulnerable to brute-force attacks**.
5. Types of Encryptions
    - Encryption is broadly categorized into two types:
        1. **Symmetric Encryption (Private Key Cryptography)**
            * Uses the same key for both encryption and decryption.
            * The key must be kept secret and securely shared between sender and receiver.
            * Example: You encrypt a document and email it to a colleague but you cannot email the password. You must share it via a secure channel (eg, in person).
            * **Common Symmetric Encryption Algorithms**:
                * *DES*: adopted as a standard in 1977 and uses a 56-bit key.
                * *3DES*: is DES applied three times, consequently, the key size is 168 bits, though the effective security is 112 bits.
                * *AES*: was adopted as a standard in 2001. Its key size can be 128, 192, or 256 bits
        2. **Asymmetric Encryption (Public Key Cryptography)**
            * Uses a key pair:
                * Public key: Used to encrypt data, can be shared openly.
                * Private key: Used to decrypt data, must be kept secret.
            * **Common Asymmetric Encryption Algorithms**:
                * *RSA*: uses 2048-bit, 3072-bit, and 4096-bit keys, 2048-bit is the recommended minimum key size
                * *Diffie-Hellman*: also has a recommended minimum key size of 2048 bits but uses 3072-bit and 4096-bit keys for enhanced security.
                * *ECC*: can achieve equivalent security with shorter keys. For example, with a 256-bit key, ECC provides a level of security comparable to a 3072-bit RSA key.
5. Basic Math in Cryptography
    - Modern cryptography relies heavily on mathematical operations.
    -  Two foundational ones are:
        1. **XOR Operation (Exclusive OR)**
            * XOR is lightweight, fast, and forms the basis of many stream ciphers and hashing functions.
            * A binary logic operation that compares two bits:
                * Returns 1 if the bits are different
                * Returns 0 if the bits are the same
            * [XOR Truth Table is shown here.](images/XOR_truth_table.jpg)
        2. **Modulo Operation (%)**
            * Returns the remainder when one number is divided by another:
            * *Examples*:
                * 25%5 = 0 because 25 divided by 5 is 5, with a remainder of 0, i.e., 25 = 5 × 5 + 0
                * 23%6 = 5 because 23 divided by 6 is 3, with a remainder of 5, i.e., 23 = 3 × 6 + 5
            * **An important thing to remember about modulo is that it’s not reversible. If we are given the equation x%5 = 4, infinite values of x would satisfy this equation.**

## Learning and Reflections
- Learned about cryptography and its core terminology.
- Learned both encryption and decryption process.
- Learned about Caesar Cipher.
- Learned about Symmetric and Asymmetric encryption process.
- Learned the use of basic maths (XOR,Modulo) used in cryptography.




























    







