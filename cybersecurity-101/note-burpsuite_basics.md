# Burp Suite: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 30 min

## Objective
An introduction to using Burp Suite for web application pentesting.

## Core Conepts Covered
1. What is Burp Suite?
    - A Java-based framework used for web application penetration testing.
    - Acts as a proxy between the browser and web server to intercept and manipulate HTTP/S traffic.
    - Widely used in security assessments and bug bounty programs.
    - **Editions of Burp Suite**
        * **Burp Suite Community Edition**
            * Free for non-commercial use.
            * Ideal for learning and basic testing.
            * Limited features compared to the professional version.
        * **Burp Suite Professional**
            * Paid version with advanced features like:
                * Automated vulnerability scanner
                * Intruder: For custom payload injection and brute-force testing
                * Repeater: For manual request modification and replay
                * Sequencer: For analyzing randomness in tokens
                * Decoder: For encoding/decoding data
                * Comparer: For comparing responses
                * -Burp Collaborator: For detecting out-of-band interactions (eg, DNS, HTTP)
        - **How it works**
            * Burp Suite sits between the browser and the web server.
            * It intercepts requests and responses, allowing testers to:
                * Modify headers, parameters, and payloads
                * Analyze vulnerabilities like XSS, SQLi, CSRF, etc.
2. Burp Suite Community Edition Key Features
    - **Proxy**
        * Core feature for intercepting and modifying HTTP/S traffic between browser and server.
        * Essential for analyzing and manipulating requests/responses.
    - **Repeater**
        * Allows manual resending of HTTP requests.
        * Useful for testing input variations and observing server behavior.
    - **Decoder**
        * Converts encoded data (eg, Base64, URL encoding) into readable formats.
        * Supports both encoding and decoding operations.
    - **Comparer**
        * Compares two sets of data (eg, responses) to identify differences.
        * Helpful for spotting subtle changes in server behavior.
3.  Limitations of Community Edition
    - **No support for extensions:**
        * Cannot use Burp Suite Extender module.
        * No access to third-party tools like Logger++ or BApp Store.
    - **No automation or scanning tools:**
        * Lacks features like Intruder, Scanner, and Collaborator available in Professional edition.
4. Extension Ecosystem (Professional Only)
    - Extensions can be written in Java, Python, or Ruby.
    - Burp Suite Extender enables:
        * Loading custom tools
        * Integrating with external modules
        * Expanding Burp’s functionality
5. Burp Suite Dashboard
    - **Launching Burp Suite**
        * Use Start Burp to begin.
        * Choose default configuration unless specific settings are needed.
        * Dashboard is the central hub for monitoring tasks and tool activity.
    - **Dashboard Panels (Color-Coded)**
        * **Top Left – Tool Tab**
            * Access core tools: `Target`, `Proxy`, `Intruder`, `Repeater`, `Sequencer`, `Decoder`, `Comparer`, `Extender`, `Options`.
        * **Top Right – Issue Activity (Pro version only)**
            * -Displays detected vulnerabilities with:
                * Severity
                * Type
                * Host
                * Path
                * Timestamp
        * **Bottom Left – Event Log**
            * Logs Burp actions like:
                * Proxy activity
                * Scans
                * Errors
                * Starup events
        * **Bottom Right – Advisory**
            * Shows detailed info about selected issues:
                * Description
                * Severity
                * Refernces
                * Exportable for reporting
        * [Example picture of burp suite dashboard](images/burp_dashboard.png)
6. Burp Suite Navigation 
    - **Main Menu Bar**
        * Located at the top of the interface.
        * Lets you switch between core modules:
            * `Dashboard`, `Target`, `Proxy`, `Intruder`, `Repeater`, `Sequencer`, `Decoder`, `Comparer`, `Extender`, `Options`.
    - **Sub-Tabs**
        * Each module may contain multiple sub-tabs
        * Sub-tabs appear below the main menu bar
        * Example: `Proxy` module includes sub-tabs like `Intercept`, `HTTP history`, etc.
    - **Docking Tabs**
        * Tabs can be rearranged or opened in separate windows.
        * Use the Window dropdown to manage layout and visibility.
    - [Example picture of burp menu bar](images/burp_modules.png)
7. Burp Suite Settings 
    - **Global Settings (User settings):**  
        * Apply across all Burp Suite sessions.
        * Define default behavior for the entire application.
    - **Project Settings:**
        * Specific to the current session/project.
        * Not saved in Burp Suite Community Edition, lost after exit.
    - **Key Configuration Areas**
        * **Proxy Listeners**
            * Define how Burp intercepts traffic
            * Example config:
                * Interface: `127.0.0.1:8080`
                * Running: Yes
                * Certificate: Per-host
                * Invisible mode: No
        * **Request Interception Rules**
            * Set conditions for intercepting requests
            * Example rule:
                * Match type: URL
                * Match condition: Contains
                * Match value: `google.com`
                * Action: Intercept
8. Burp Proxy Core Function
    - **What It Does**
        * Acts as a man-in-the-middle proxy between browser and target server.
        * Intercepts, modifies, and forwards HTTP/S requests and responses.
        * Supports WebSocket traffic and logs all interactions.
    - **Key Features**
        * **Intercepting Requests:**
            * Pause and inspect requests before they reach the server.
            * Choose to forward, drop, or edit them.
        * **Modifying Requests:**
            * Change headers, parameters, or payloads before sending.
        * **Continuing Traffic:**
            * Forward requests manually or allow automatic flow.
        * **Capture and Logging:**
            * Stores all traffic in `HTTP history` and `WebSockets history` tabs.
        * **WebSocket Support:**
            * Captures and analyzes real-time bidirectional communication.
        * [Example picture of burp proxy](images/burp_proxy.png)
9. Burp Suite Target Tab
    - **Site Map**
        * Displays a tree view of the web application's structure.
        * Helps visualize which pages have been visited or tested.
        * Supports:
            * Manual browsing
            * Automated crawling
            * API testing
        * In Burp Pro, enables active scanning and deeper analysis.
    - **Issue Definitions**
        * Lists all known vulnerabilities Burp can detect.
        * Includes:
            * Descriptions
            * Severity levels
            * References (eg, OWASP, CVE)
        * Useful for manual testing and understanding scanner findings.
    - **Scope Settings**
        * Defines which URLs/domains are in scope or out of scope.
        * Helps focus testing and avoid unintended targets.
        * Tools like Proxy, Scanner, and Spider respect scope boundaries.
10. Scoping and Targeting in Burp Proxy
    - **Why Scoping Matters**
        * Helps control what gets proxied and logged.
        * Prevents clutter from irrelevant traffic.
        * Focuses testing on specific web apps or domains.
    - **How to Add to Scope**
        * Right-click a target in the Site Map → select Add to Scope.
        * Burp will prompt: “Do you want to view only in-scope items?”
        * Enables cleaner views and focused logging.
## Learning and Reflections
- Learned about burp suite and its editions.
- Learned about the key features of community edition.
- Learned about the limitation of community edition.
- Learned about extension ecosystem in the pro version.
- Learned about the dashboard and its menus.
- Learned how to navigate to different tabs and sub-tabs.
- Learned about burp suite settings menu.
- Learned about burp suite proxy important functions.
- Learned about the targetting tab.
- Learned how to define scope and set targets in burp suite.






















































