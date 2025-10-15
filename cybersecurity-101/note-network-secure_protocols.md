# Networking Secure Protocols (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Learn how TLS, SSH, and VPN can secure your network traffic

## Core Concepts Covered
1. TLS (Transport Layer Security)
    - **What is TLS**
        * TLS is a cryptographic protocol that secures communication over a network.
        * TLS is what makes other protocols like HTTP, FTP, SMTP, IMAP, POP3 secure.
        * It ensures **privacy**, **integrity**, **authentication**
    - **TLS vs SSL**
        * TLS evolved from SSL (Secure Sockets Layer).
        * SSL is outdated and insecure. TLS is the modern, secure version.
        * Most browsers and servers now use **TLS 1.2 or TLS 1.3**.
    - **How TLS Works (TLS Handshake)**
        1. **Client Hello**
            * *Your browser says: “Hi, I want to talk securely. Here are the encryption methods I support.”*
        2. **Server Hello plus Certificate**
            * *Server replies: “Cool. Let’s use this method. Here’s my certificate to prove I’m legit.”*
        3. **Certificate Validation**
            * Your browser checks the certificate against trusted **Certificate Authorities (CAs)**.
        4. **Key Exchange**
            * Both sides agree on a **shared secret key** using asymmetric encryption (eg, RSA or Diffie-Hellman).
        5. **Secure Session Starts**
            * Now both sides use the shared key to encrypt and decrypt data.
    - **Certificates & CAs**
        * A certificate proves the identity of a website.
        * It’s signed by a Certificate Authority (CA), a trusted third party.
        * Your system has a list of trusted CAs (like “A-Trust” or “Camerfirma”) in its [Certificate Manager](images/certicate_manager.png).
    - **Self-Signed Certificates**
        * Created by the server itself.
        * Not trusted by browsers unless manually approved.
        * Good for internal testing, but not secure for public use.
    - [*The insecure versions use the default TCP port numbers shown in the table.*](images/insecure_port_numbers.jpg)
    - [*The secure versions (over TLS) use the following TCP port numbers by default.*](images/secure_port_numbers.jpg)
2. SSH (Secure Shell)
    - SSH is a protocol used to securely connect to remote machines.
    - It replaces TELNET, which sends data (including passwords) in plain text, making it vulnerable to eavesdropping.
    - **Why SSH Is Better Than TELNET**
        * Encryption: Stronger encryption (AES, RSA, etc).
        * Authentication: Authenticates password, public key, 2FA.
        * Security: Secure against MITM and sniffing.
        * Data Integrity: Performs cryptographic checks.
        * Tunneling: Can tunnel other protocols.
        * GUI support: X11 forwarding for GUI apps.
    - **How SSH works**
        1. Client initiates connection using:
            * `ssh username@hostname`
            * `ssh hostname`
        2. Server responds with its public key.
        3. Client verifies the server’s identity using known hosts or certificate.
        4. Secure channel is established using asymmetric encryption.
        5. Session begins, you can run commands, transfer files, or even forward GUI apps.
    - **OpenSSH**
        * OpenSSH is the most widely used implementation of SSH.
        * It includes:
            * `ssh`: Connect to remote machines
            * `scp`:  Secure file copy
            * `sftp`: Secure FTP-like file transfer
            * `ssh-keygen`: Generate key pairs
            * `sshd`: SSH server daemon
3. VPN (Virtual Private Network)
    - A VPN creates a secure, encrypted tunnel between your device and a remote network. 
    - **Why Use a VPN?**
        * Security: Encrypts your data so attackers can't read or tamper with it.
        * Privacy: Hides your IP address and location.
        * Remote Access: Lets employees securely access company resources from anywhere.
        * Bypass Restrictions: Access content or services blocked by geography or firewalls.
    - **How VPN Works**
        1. VPN Client Initiates Connection
            * You run a VPN client (eg, OpenVPN) with a config file.
            * It connects to a VPN server (eg, company HQ).
        2. Tunnel Is Established
            * A secure tunnel is created using encryption protocols (eg, TLS, IPSec).
            * All traffic from your device is routed through this tunnel.
        3. Traffic is Encrypted
            * Your data is encrypted before leaving your device.
            * It travels through the internet securely.
        4. VPN Server Decrypts and Forwards
            * The server decrypts the data and forwards it to the destination.
    - **VPN Protocols**
        * OpenVPN: Open-source, uses TLS for encryption
        * IPsec: Often used in enterprise VPNs
        * WireGuard: Often used in enterprise VPNs
        * L2TP: Often paired with IPSec for security

## Learning and Reflections
- Learned about TLS, TLS Handshake, Certificates and CAs.
- Learned about SSH, OpenSSH and how it works.
- Learned about VPN, VPN protocols and how it works.


















