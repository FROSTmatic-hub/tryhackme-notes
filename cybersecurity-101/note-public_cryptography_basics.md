# Public Key Cryptography Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Discover how public key ciphers such as RSA work and explore their role in applications such as SSH

## Core Concepts Covered
1. Common Use of Asymmetric Encryption
    - Asymmetric encryption is slower than symmetric encryption.
    - It's mainly used to securely exchange keys for symmetric encryption.
    - Example: TLS handshake in HTTPS.
    - **LockBox Analogy for Encryption**
        * You place the symmetric key (instructions) in a locked box (encrypted with public key).
        * Only the recipient with the private key can unlock it.
        * After key exchange, communication continues using symmetric encryption for speed.
2. RSA Asymmetric Encryption
    - RSA (Rivest-Shamir-Adleman) is a widely used asymmetric encryption algorithm in cryptography.
    - It relies on two keys: a **public key** for encryption and a **private key** for decryption.
    - This dual-key system ensures secure communication, as only the intended recipient (who holds the private key) can decrypt the message.
    - **How RSA works**
        1. **Key Generation**
            * Two large prime numbers, p and q, are chosen.
            * Compute n=p×q (used as the modulus).
            * Compute ¢(n) = (p -1)(q -1) (Euler's totient function).
            * Choose a public exponent e such that 1 < e < (n) and gcd(e, ¢(n)) = 1.
            * Compute the private key d such that d x e = 1 (mod (n)).
            * The **public key is (e, n)**, and the **private key is (d, n)**.
        2. **Encryption**
            * A plaintext message M is converted into a numerical form.
            * The ciphertext C is computed as: C = M^e mod n.
        3. **Decryption**
            * The recipient uses their private key to decrypt the ciphertext: M = c^d mod n.
3. Diffie–Hellman Key Exchange
    - It is a  cryptographic protocol used to securely generate a shared secret key over an insecure channel (like the internet).
    - It is the foundation of modern public-key cryptography.
    - **Basic Idea**
        * Two people (Alice & Bob) want to create the same secret key,
        but they don’t want anyone who’s eavesdropping to know it.
        * They agree on two *public values*:
            * **p**: a large prime number.
            * **q**: a generator (primitive root modulo p)
        * Then they each pick private keys and compute public values using modular exponentiation.
    - **How it works**
        1. **Public Agreement**
            * Both alice and bob agree on *p* and *q*.
            * These are not secret
        2. **Alice chooses private key *a***
            * *a* is a random integer kept secret.
        3. **Bob chooses private key *b**
            * *b* is a random integer kept secret.
        4. **Alice computes A = gª mod p**
            * Sends *A* to Bob
        5. **Bob computes B = gb mod p**
            * Sends *B* to Alice
        6. **Alice computes shared key K =Bª mod p**
            * Uses Bob's public value
        7. **Bob computes shared key K = A^b mod p**
            * Uses Alice's public value
        8. **Both get the same key**
            * *K = g^ab mod p*
            * Shared secret established
4. SSH Authentication & Key Management
    - **Server Authentication**
        * When connecting via SSH, the client verifies the server’s identity using its **public key fingerprint**.
        * Terminal shows a prompt like: *"The authenticity of host can't be established…”*
        * You can choose to trust and store the server’s key locally (`~/.ssh/known_hosts`).
    - **Client Authentication**
        * Clients authenticate using **SSH key pairs**:
            * *Private key*: Stored securely on your machine (`~/.ssh/id_ed25519`)
            * *Public key*: Shared with the server (`~/.ssh/authorized_keys`)
    - **Generating SSH Keys**
        * Command: `ssh-keygen -t <key_type>`
        * Different key types includes:
            * **RSA**: Widely used, longer keys (2048–4096 bits)
            * **DSA**: Depricated
            * **ECDSA**: Based on elliptic curves
            * **Ed25519**: Modern, fast, secure (256-bit)
    - **Private Key Security**
        * **Never share your private key doing so compromises your identity.**
        * Use strong passphrases to protect keys from brute-force attacks (eg, John the Ripper).
    - **Deploying Public Keys**
        * Use `ssh-copy-id` to copy your public key to a remote server.
        * Public key gets stored in: `~/.ssh/authorized_keys`
5. Digital Signatures
    - Used to verify authenticity and integrity of digital messages or documents.
    - Created using the sender’s **private key**; verified using their **public key**.
    - It ensures:
        * The message was created by the claimed sender.
        * The message hasn’t been tampered with.
    - **Encryption Flow**
        * Sender encrypts a hash of the message with his private key.
        * Receiver decrypts it using Bob’s public key to verify the hash.
    - **Digital Certificate**
        * A file that binds a public key to an entity (eg, a website)
        * Issued by a **Certificate Authority (CA)**
        * It contains:
            * Public Key
            * Entity identity (domain name, organization)
            * CA Signature
    - **Certificate Chain of Trust**
        * **Root CA → Intermediate CA → Website Certificate**
        * Browsers trust root CAs and validate the chain to ensure authenticity.
6. PGP & GPG
    - **PGP (Pretty Good Privacy)** and **GPG (GNU Privacy Guard)** are tools for:
        * Encrypting messages and files
        * Digitally signing content
        * Verifying identity in secure communication
    - GPG is a free, open-source implementation of PGP.
    - **Generating GPG keys**
        * Command: `gpg --full-gen-key`
        * Key options include:
            * **RSA and RSA**: Default, used for signing and encryption
            * **DSA and Elgamal**: Legacy
            * **ECC and ECC**: Modern elliptic curve keys
            * **Existing key from card**: For smartcard-based keys
        * The user choose:
            * **Key Type** (eg, RSA)
            * **Key Size** (eg, 3072 or 4096 bits)
            * **Key Expiration** (eg, 0 for no expiry, or set duration)
    - **User Identity Setup**
        * You assign:
            * Real name
            * Email address
            * Optional comment
        * GPG creates a User ID and key pair:
            * `pub` = public key
            * `sub` = subkey (often used for encryption)
            * [Example command is shown here.](outputs/gpg_key_gen.txt)
    - **Decrypting with GPG**
        * Command:
            * `gpg --import backup.key` (Import your private key)
            * `gpg --decrypt confidential.gpg` (Decrypt the file)
            * GPG uses your private key to decrypt messages encrypted with your public key.
            * You can also sign messages to prove authorship and integrity.

## Learning and Reflections
- Learned about the Asymmetric encryption and its uses.
- Learned about different types of encryptions, RSA, Diffie-Hellman.
- Learned how SSH authentication is used.
- Learned about digital signatures, CAs and certifcates.
- Learned about PGP and GPG encryption and decryption methods.











 
        
























