# Packets & Frames (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 30 min

## Objective
Understand how data is divided into smaller pieces and transmitted across a network to another device.

## Core Conepts Covered
1. What are Packets and Frames?
    - **Packets**: Units of data sent across networks. Contain source/destination IP addresses and payload.
    - **Frames**: Packets wrapped in additional data at the Data Link layer. Include MAC addresses and error-checking info.
2. Encapsulation and OSI layer
    - Data moves through OSI layers, gaining headers/trailers at each stage.
    - **Encapsulation**: Wrapping data with protocol-specific info as it descends the OSI stack.
    - **Decapsulation**: Unwrapping data as it ascends at the receiving end.
3. TCP/IP and the Three-Way Handshake
    - **Steps**: SYN → SYN/ACK → ACK.
    - Ensures reliable connection before data transfer.
    - TCP includes a checksum to verify data integrity.
4. UDP/IP
    - **UDP**: Stateless protocol, faster but less reliable.
    - Used for real-time applications like video calls.
5. Ports 101
    - Explains how ports identify services on a device.
    - Demonstrates connecting to ports using tools like `netcat`.

## Learning and Reflections
- Learned about packets and frames
- Learned how packets and frames move in an OSI model
- Learned about TCP, UDP and Ports protocols.