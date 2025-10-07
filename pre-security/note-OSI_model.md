# OSI Model (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 30 min

## Objective
Learn about the fundamental networking framework that determines the various stages in which data is handled across a network.

## Core Concepts Covered
1. OSI Model Overview
    - The OSI (Open Systems Interconnection) Model is a conceptual framework used to understand how devices communicate over a network. It breaks down the process into seven distinct layers.
2. Layer 1 (Physical Layer)
    - It's the lowest layer in the OSI model.
    - Handles the actual hardware used in networking eg, ethernet cables, connectors, and signal transmission.
    - Transfers data using electrical signals in binary form **(1s and 0s)**.
3. Layer 2 (Data Link Layer)
    - Responsible for physical addressing using MAC addresses.
    - Adds the MAC address of the receiving device to packets from the Network layer.
    - Ensures data is formatted correctly for transmission across the physical medium.
4. Layer 3 (Network Layer)
    - Handles routing and reassembly of data chunks into larger packets.
    - Determines the optimal path for data using routing protocols like:
        - **OSPF (Open Shortest Path First)**
        - **RIP (Routing Information Protocol)**
    - Uses IP addresses for device identification.
5. Layer 4 (Transport Layer)
    - Ensures reliable delivery of data between devices.
    - Uses protocols like:
        - **TCP (Transmission Control Protocol)**: reliable and connection oriented.
        - **UDP (User Datagram Protocol)**: faster, but less reliable.
    - Controls flow and congestion, making sure data isn’t sent too fast or too slow
6. Layer 5 (Session Layer)
    - Manages the creation, maintenance, and termination of sessions between devices.
    - A session is an active connection that allows data exchange between two endpoints.
    - Adds checkpoints so if a connection drops, data transfer can resume from the last known point, saving bandwidth.
    - Monitors whether a connection is still active or has gone idle/lost.
7. Layer 6 (Presentation Layer)
    - Acts as the translator between the application and the network
    - Responsible for data formatting, encryption/decryption, and compression.
    - Ensures that data sent from one system can be understood by another, even if they use different formats.
8. Layer 7 (Application Layer)
    - The topmost layer, closest to the end user.
    - Defines how users interact with networked data through software.
    - Supports protocols like:
        - **HTTP/HTTPS** (web browsing)
        - **SMTP** (email)
        - **DNS** (domain name resolution)
        - **FTP** (file transfers)
    - Provides Graphical User Interfaces (GUIs) in apps like browsers, email clients, etc.

## Leearning and Reflections
- Learned about the OSI model and its 7 layers.


