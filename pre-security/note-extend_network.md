# Extending Your Network (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Learn about some of the technologies used to extend networks out onto the Internet and the motivations for this.

## Core Concepts Covered
1. Port Forwarding
    - Port forwarding is a networking technique that allows external devices to access services hosted on a private network
    - Port forwarding maps a public IP and port to a private IP and port.
    - This lets external users reach internal services like web servers, game servers, or remote desktops.
2. Firewall Fundamentals
    - A firewall acts as border security for a network. It decides which traffic is allowed to enter or exit based on rules set by an administrator.
    - Firewalls inspect packets and make decisions based on:
        - **Source**: Where the traffic is coming from.
        - **Destination**: Where the traffic is going.
        - **Protocol**: Whether it's using TCP, UDP, or others.
    - There are two types of firewalls:
        - **Stateful**: Tracks the entire context of a connection. Makes decisions based on the behavior of the full session.
        - **Stateless**: Uses static rules to inspect individual packets. Faster and better for handling high-volume traffic, but less detailed.
3. VPN (Virtual Private Network)
    - A VPN creates a secure, encrypted tunnel between your device and a remote server, allowing you to access the internet privately and securely.
    - VPN technologies and protocols include:
        - **PPP (Point-to-Point Protocol)**: Legacy protocol used to establish direct connections between two nodes. Often used in dial-up and early VPNs.
        - **PPTP (Point-to-Point Tunneling Protocol)**: Encapsulates PPP frames in GRE packets. Easy to set up and fast.
        - **IPsec (Internet Protocol Security)**: Encrypts and authenticates IP packets using ESP and AH protocols. Often paired with IKEv1/v2 for key exchange.
 
## Learning and Reflections
- Learned about port forwarding and how its used privately and publicly
- Learned about Firewalls and VPNs