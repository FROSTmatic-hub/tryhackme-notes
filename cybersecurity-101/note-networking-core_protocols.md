# Networking Core Protocols (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learning about the TCP/IP protocols

## Core Concepts Covered
1. DNS (Domain Name System)
    - DNS translates domain names (like `example.com`) into IP addresses so devices can find each other on the internet.
    - **Common DNS Record Types**:
        1. *A*: Maps domain to IPv4 address (`example.com to 172.2.2.2`)
        2. *AAAA*: Maps domain to IPv6 address (`example.com to 2001:db8::1`)
        3. *CNAME*: Maps one domain to another (`example.com to exaomple.org`)
        4. *MX*: Specifies mail server for email delivery (`test@example.com to mail server`)
2. WHOIS (Domain Registration Info)
    - WHOIS is a protocol used to look up domain registration details.
    - When someone registers a domain, a WHOIS record is created containing:
        * Registrant’s name
        * Email address
        * Phone number
        * Registration date and more
    - **How to use WHOIS**
        * WHOIS data can be viewed using:
            * Online WHOIS lookup tools.
            * Command-line tools (`whois` on Linux).
3. HTTP (HyperText Transfer Protocol)
    - HTTP (Hypertext Transfer Protocol) is used by browsers to communicate with web servers.
    - HTTP(S) is the secure version encrypted using SSL/TLS.
    - Both rely on TCP for reliable transmission.
    - HTTP is on **Port 80**
    - HTTP(S) is on **Port 443**
    - **HTTP Methods**:
        * `GET`: Retrieve data (eg, HTML, images)
        * `POST`: Submit data (eg, forms, login info)
        * `PUT`: Create or update a resource
        * `DELETE`: Remove a resource from the server
4. FTP (File Transfer Protocol)
    - FTP is a protocol designed to transfer files between a client and a server over a network.
    - It’s especially efficient when conditions are stable and bandwidth is good.
    - **How FTP works**
        * FTP uses two TCP connections:
            * *Control Connection* (Port 21) for commands and responses.
            * *Data Connection* for actual file transfer.
    - **Common FTP Commands**
        * `USER`: Enter username
        * `PASS`: Enter password
        * `RETR`: Retrieve (download) a file from the server
        * `STOR`: Store (upload) a file to the server.
        * `QUIT`: Exit the session
5. SMTP (Simple Mail Transfer Protocol)
    - SMTP is the protocol used to send emails from a client (*like Outlook or Gmail*) to a mail server, and between mail servers across the internet.
    - SMTP servers listen on TCP **port 25** by default.
    - **How SMTP works**
        * *Think of it like mailing a package*:
            * You hand it to your local post office (your mail client).
            * They forward it to the recipient’s post office (mail server).
            * The recipient picks it up from there.
    - **Common SMTP Commands**
        * `HELO`/`EHLO`: Starts the SMTP session
        * `MAIL FROM`: Specifies the sender’s email address
        * `RCPT TO`: Specifies the recipient’s email address
        * `DATA`: Begins the actual message content
        * `.`: Ends the message body
6. POP3 (Post Office Protocol version 3)
    - POP3 is the protocol used by email clients to retrieve messages from a mail server and download them locally.
    - **How it works**
        * You send emails using SMTP.
        * You receive emails using POP3.
    - **Common POP3 Commands**
        * `USER <username>`: Identifies the user
        * `PASS <password>`: Authenticates the user
        * `STAT`: Shows number of messages and total size
        * `LIST`: Lists all messages and their sizes
        * `RETR <message_number>`: Retrieves a specific message
        * `DELE <message_number>`: Marks a message for deletion
        * `QUIT`: Ends session
7. IMAP (Internet Message Access Protocol)
    - IMAP allows email clients to access and manage messages directly on the mail server, making it perfect for users who check email from multiple devices.
    - IMAP servers listen on TCP port 143 by default.
    - You can test IMAP using Telnet: `telnet imap.example.com 143`
    - **How IMAP differs from POP3**
        * POP3 downloads emails and often deletes them from the server.
        * IMAP keeps emails on the server and syncs changes across devices (read, move, delete).
    - **Common IMAP Commands**
        * `LOGIN username <password>`: Authenticates the user
        * `SELECT <folder>`: Opens a mailbox folder (eg, Inbox)
        * `FETCH <message_number> <data>`: Retrieves message content (eg,`FETCH 3 BODY`)
        * `MOVE <message_number> <folder>`: Moves message to another folder
        * `LOGOUT`: Ends the session

## Learning and Reflections
- Learned about DNS and its record types.
- Learned about WHOIS domain info command.
- Learned about HTTP, HTTPS and its commands.
- Learned about FTP and its commands.
- Learned about SMTP and its commands.
- Learned about POP3 and its commands.
- Learned about IMAP and its commands.









