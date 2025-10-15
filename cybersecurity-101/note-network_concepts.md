# Networking Concepts (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn about the important networking concepts

## Core Concepts Covered
1. OSI Model
    - The OSI (Open Systems Interconnection) model is a conceptual framework developed by ISO(International Organization for Standardization).
    - **The 7 Layers of OSI model**:
        * Application Layer
        * Presentation Layer
        * Session Layer
        * Transport Layer
        * Network Layer
        * Data Link Layer
        * Physical Layer
    - **Layer 1: Physical Layer**:
        * Physical layer is oncerned with hardware transmission of raw binary data.
        * Examples:
            * Ethernet cables
            * Optical Fiber
            * etc
    - **Layer 2: Data link Layer**:
        * The Data Link Layer is responsible for node-to-node communication within the same network segment.
        * It operates directly above the Physical Layer, which handles the raw transmission of bits.
        * Devices in the same segment communicate using *MAC addresses*.
        * A MAC address is a unique identifier assigned to a network interface.
        * It consists of *6 bytes* (48 bits), usually shown in hexadecimal format separated by colons.
        * Example: **a4:c3:f0:85:ac:2d**
        * Protocols used in Layer 2:
            * **Ethernet (802.3)**: Wired LAN communication
            * **Wi-fi (802.11)**: Wireless LAN communication
    - **Layer 3: Network Layer**:
        * The Network Layer is responsible for inter-network communication.
        * It sends data between devices on different networks, not just within the same local segment.
        * It handles:
            * *Logical Addressing* 
            * *Routing*
            * *Packet Forwarding*
        * Protocols used in Layer 3:
            * **IP (Internet Protocol)**: Assigns logical addresses and routes packets across networks.
            * **ICMP (Internet Control Message Protocol)**: Sends error messages and diagnostics (ping).
            * **IPsec**: Secures IP communications via encryption and authentication.
            * **SSL/TLS VPN**: Encrypts traffic for secure remote acces.
    - **Layer 4: Transport Layer**:
        * Transport Layer manages end-to-end communication between application.
        * It also handles flow control, segmentation, and error correction.
        * Protocols used are: **TCP**, **UDP**.
    - **Layer 5: Session Layer**:
        * Establishes, maintains, and terminates sessions between devices.
        * Ensures proper data exchange order and recovery.
        * Protocols: **NFS**, **RPC**.
    - **Layer 6: Presentation Layer**:
        * Translates and formats data for the application layer.
        * Handles encoding (ASCII, Unicode) and file types (JPG, PNG).
    - **Layer 7: Application Layer**:
        * Interfaces directly with user applications.
        * Provides services like file transfer, email, and web browsing.
        * Protocols: **HTTP**, **FTP**, **DNS**, **SMTP**, **POP3**.
2. TCP/IP Model
    - Developed by the U.S. Department of Defense in the 1970s to ensure resilient communication.
    - It's the foundation of modern internet protocols and complements the OSI model.
    - **TCP/IP Layers**:
        * Application Layer: Combines OSI Layers 5 (Session), 6 (Presentation), and 7 (Application).
        * Transport Layer: Same as OSI Layer 4.
        * Internet Layer: Equivalent to OSI Layer 3 (Network).
        * Link Layer: Covers OSI Layer 2 (Data Link).
        * Physical Layer: Same as the OSI layer 1.
3. IP Addressing & Subnetting Essentials
    - **IPv4 Basics**:
        * [An IPv4 address has 4 octets](images/ipv4_basics.png) (192.168.1.1), each ranging from 0 to 255.
        * Every device on a network needs a *unique IP* to communicate.
        * Special/Reserved IP Addresses:
            * **Network address**: First in the range (192.168.1.0)
            * **Broadcast address**: Last in the range (192.168.1.255)
    - **Subnet Masks**:
        * A subnet mask defines which part of the IP is *network* and *host*.
        * Example: `255.255.255.248` = /29  (29 bits network, 3 bits for hosts).
    - **Private and Public IPs**:
        * Private IPs are used inside local networks and not routable on the internet.
        * Defined by *RFC 191*:
            * `10.0.0.0 – 10.255.255.255`
            * `172.16.0.0 – 172.31.255.255`
            * `192.168.0.0 – 192.168.255.255`
        * Public IPs are globally unique and reachable across the internet.
        * Private IPs require **NAT (Network Address Translation)** to access the web.
4. UDP & Port Numbers
    - **UDP (User Datagram Protocol)**:
        * A *connectionless* protocol at Layer 4 (Transport Layer).
        * No handshake or delivery confirmation.
        * Fast but unreliable, do not guarantee packets arrive or arrive in order.
        * Often used for *streaming, DNS, and gaming*.
    - **Ports**:
        * Used to identify specific *processes/services* on a device.
        * Each port is **16 bits**, giving a range from **1 to 65535**.
        * Calculated as: **2^{16} - 1 = 65535**
        * Examples:
            * Port 53: DNS
            * Port 80: HTTP
            * Port 443: HTTPS
5. TCP & Three-way Handshake
    - **TCP (Transmission Control Protocol)**:
        * TCP is a connection-oriented protocol at Layer 4 (Transport Layer).
        * It ensures *reliable data delivery* using sequence and acknowledgment numbers.
        * Before sending data, TCP establishes a connection using the [*three-way handshake*](images/three-way_handshake.jpg):
            1. **SYN**: Client initiates connection.
            2. **SYN-ACK**: Server acknowledges and responds.
            3. **ACK**: Client confirms and connection is established.
6. Encapsulation in Networking
    - Encapsulation is the process of wrapping data with protocol-specific headers (and sometimes trailers) as it moves down the OSI or TCP/IP stack.
    - [**Step-by-Step Breakdown**](images/encapsulation.jpg)
        1. Application Layer:
            * User data is generated and passed to the transport layer.
        2. Transport Layer:
            * Adds a **TCP or UDP header** (becomes a *segment* or *datagram*.)
        3. Network Layer:
            * Adds an **IP header** (becomes a *packet*.)
        4. Data link Layer:
            * Adds a **frame header and trailer** (Ethernet/Wi-Fi) (becomes a *frame*.)
7. TELNET Protocol
    - TELNET is a protocol used for remote terminal access.
    - It lets users connect to and control a remote system via text commands.
    - TELNET is insecure because it transmits data (including credentials) in plain text.
    - **It’s not recommended for use on open or public networks**.

## Learning and Reflections
- Learned about the OSI and TCP/IP model and its layers.
- Learned about TCP, UDP and Ports.
- Learned about encapsulation.
- Learned about the TELNET Protocol.












































