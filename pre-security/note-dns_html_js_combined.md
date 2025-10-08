# Putting it all together (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn how all the individual components of the web work together to bring you access to your favourite web sites.

## Core Concept Covered
1. Overview of How the Web Works
    - Concepts Recapped:
        - When you visit a website, your browser uses DNS to resolve the domain name to an IP address
        - Then, using protocols like Ethernet, IP, and TCP, it fetches data from the server.
        - The data includes HTML, CSS, JavaScript, and media files.
    - This task reinforces the client-server model and the layered protocol stack that enables web communication.
2. Other Components
    - Other components introduces four critical backend technologies that enhance performance, scalability, and security:
        1. **Load Balancers**:
            - Distribute incoming traffic across multiple servers.
            - Use algorithms like:
               - **Round-robin**: Alternates requests evenly.
               - **Weighted**: Sends traffic based on server load.
            - Perform health checks to remove unresponsive servers.
        2. **CDNs (Content Delivery Networks)**:
            - Host static files (images, CSS, JS) on globally distributed servers.
            - Serve content from the nearest server to the user.
            - Reduce latency and bandwidth usage.
        3. **Databases**
            - Store and retrieve user data, content, and configurations.
            - Can range from simple text files to complex distributed systems.
        4. **WAFs (Web Application Firewalls)**:
            - Sit between the user and the web server.
            - Analyze requests for malicious activity (SQL injection, XSS).
            - Use rate limiting to prevent abuse from a single IP.
3. How Web Servers Work
    - **Web Server Software**: Hosts multiple sites using Virtual Hosts.
    - **Static vs. Dynamic Content**:
        - **Static**: Fixed files like HTML, images, etc.
        - **Dynamic**: Generated on-the-fly using backend languages.
        - The client never sees backend code, only the output.


## Learning and Reflections
- Recap of how web works and communicates.
- Learned about four components like load balancing, CDNs, Databases, WAFs.
- learned how server works.
    
