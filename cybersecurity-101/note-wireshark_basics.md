# Wireshark: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 45 min

## Objective
Learn the basics of Wireshark and how to analyse protocols and PCAPs

## Core Concepts Covered
1. Wireshark: Network Protocol Analyzer
    - Wireshark is a powerful tool used to capture and analyze network traffic.
    - It helps you understand how protocols behave and diagnose network issues.
    - **Key Features of Wireshark**:
        * Troubleshooting: Detect network problems like dropped packets or misconfigured devices.
        * Performance Analysis: Identify bottlenecks or latency issues.
        * Security Investigation: Spot suspicious traffic, abnormal port usage, or potential intrusions.
        * Protocol Learning: See how protocols like TCP, HTTP, DNS,etc, operate in real time.
    - **GUI and Data Section**
        * Wireshark GUI opens with a single all-in-one page, which helps users investigate the traffic in multiple ways.
        * Five sections of the GUI stand out:
            1. Toolbar: Quick access to filters, export, merge, and capture control.
            2. Display Filter: Lets you filter packets by protocol, IP, port, etc.
            3. Recent Files: Reopen previously analyzed capture files.
            4. Capture Filer & Interface: Select network interfaces (eth0, wlan0) and apply filter.
            5. Status Bar: Shows capture status, profile info, and packet count.
            * [This picture shows Wireshark's main window.](images/wireshark_window.png)
2. Loading & Navigating PCAP Files
    - Wireshark lets you open PCAP files (packet capture files) to inspect network traffic in detail.
    - The interface is divided into three main panes:
        1. **Packet List Pane (Top)**
            * Displays a summary of each packet:
                * Packet Number
                * Time Stamp
                * Source and Destination IPs
                * Protocols (TCP,HTTP,etc)
                * Length and Info
            * You can click a packet to inspect its details.
        2. **Packet Details Pane (Middle)**
            * Shows a layer-by-layer breakdown of the selected packet:
                * Ethernet
                * IP
                * TCP/UDP
                * Application layer (HTTP,TLS)
            - Provides a expandable tree structure for each protocol layer.
        3. **Packet Bytes Pane (Bottom)**
            * Displays the raw data of the selected packet:
                * Hexadecimal on the left
                * ASCII translation on the right
            * Highlights the byte section corresponding to the selected field in the details pane.
        - [This picture shows loading a file in detail](images/file_wireshark.png)
3. Packet Colouring in Wireshark
    - Wireshark uses colour rules to help you quickly identify different types of traffic and anomalies in your packet captures.
    - It’s a visual aid that makes protocol analysis faster and more intuitive.
    - **Why Colour Packets?**
        * Helps spot patterns or unusual traffic at a glance.
        * Makes it easier to distinguish protocols (TCP, HTTP, DNS,etc)
        * Highlights errors, retransmissions, or suspicious activity.
    - **Types of Colouring**
        * Permanent: Based on predefined rules stored in Wireshark’s config. Always active unless disabled.
        * Temporary: Created manually during analysis, not saved after closing Wireshark.
    - **How to use It**
        * Go to **View → Colorize Packet List** to toggle colouring on/off.
        * Use **View → Coloring Rules** to edit or create custom rules.
        * You can also right-click a packet and apply Conversation Filters for temporary highlighting.
    - [The default permanent colouring is shown in this picture.](images/wireshark_colouring.png)
4. Traffic Sniffing with Wireshark
    - Wireshark allows you to capture live network traffic from your device’s interfaces.
    - This is called **packet sniffing**.
    - It’s essential for troubleshooting, protocol analysis, and security investigations.
    - **How to capture packets**
        * Click the **blue shark button** to begin capturing packets.
        * Use the **red square button** to stop.
        * The **green button restarts** the capture.
    - [Example of Packet sniffing.](images/packet_sniff.png)
5. Merging PCAP Files in Wireshark
    - Wireshark lets you merge PCAP files into one unified file for easier inspection.
    - **How to merge PCAPs**
        1. Open your first PCAP file in Wireshark.
        2. Go to File → Merge.
        3. Select the second PCAP file you want to combine.
        4. Wireshark will show the number of packets in the second file.
        5. Click Open to merge the files.
        6. Save the newly merged file using File → Save As before analyzing.
    - [Example of merging PCAP files.](images/merge_pcap.png)
6. Packet Dissection in Wireshark
    - Wireshark breaks down each captured packet into layered protocol details, aligned with the OSI model.
    - This helps you understand how data travels from physical transmission to application level communication.
    - **OSI Layer Breakdown in Wireshark**
        1. **Physical Layer**:
            * Shows physical transmission details (frame size, capture timestamp,etc).
            * Called as *Frame* in wireshark.
        2. **Data link Layer**:
            * Displays MAC addresses (source/destination).
            * Called as *Ethernet II* in wireshark.
        3. **Network Layer**:
            * Shows IP addresses and routing info.
            * Called as *IPv4 / IPv6* in wireshark.
        4. **Transport Layer**:
            * Displays ports, flags (SYN, ACK), and segment info.
            * Called as *TCP/UDP* in wireshark.
        5. **Application Layer** (Layer 5-7):
            * Shows actual protocol content (GET requests, headers, payloads).
            * Called as *HTTP, FTP, DNS, etc* in wireshark
        - [Example of detail pane in wireshark.](images/detail_pane.png)
7. Packet Numbers in Wireshark
    - Every packet captured in Wireshark is assigned a unique number.
    - This helps you track events, reference specific packets, and navigate large captures efficiently.
    - [The number appears in the first column labeled “No.” in the packet list pane](images/packet_numbers.png)
    - **Navigating with “Go to Packet"**
        * [Wireshark offers a handy feature to jump directly to any packet:](images/goto_packet.png)
            1. Go to Menu → Go → Go to Packet
            2. Enter the packet number you want to inspect.
            3. Wireshark highlights that packet in the list pane.
8. Find Packets in Wireshark
    - Wireshark lets you search for specific packets based on their content, not just packet numbers.
    - **How to use It**
        1. Go to Edit → Find Packet.
        2. Choose your search type:
            * *Display Filter*: Use Wireshark’s filtering syntax (http.request)
            * *Hex*: Search raw byte values
            * *String*: Search plain text (“payload”)
            * Regex: Use regular expressions for advanced matching
        3. Choose your search field:
            * *Packet List* (top pane)
            * *Packet Details* (middle pane)
            * *Packet Bytes* (bottom pane)
        - [Example of using Find Packets in wireshark.](images/find_packet.png)
9. Adding Comments to Packets in Wireshark
    - Wireshark lets you annotate individual packets with custom comments.
    - This is especially useful during deep analysis, collaborative investigations, or when documenting suspicious traffic.
    - **How to add Packet Comments**
        1. Right-click on the packet you want to annotate.
        2. Select “Packet Comment” from the context menu.
        3. In the Packet Comments window:
            * Add your notes in the text box
            * You can include technical details, observations, or tags.
        4. Click OK to save the comment.
        - [Example of commenting a packet in wireshark.](images/packet_comment.png)
10. Exporting Packets in Wireshark
    - Wireshark lets you export specific packets from a capture file for focused analysis, sharing, or archiving.
    - This is especially useful when working with large PCAPs or isolating key events.
    - **How to export packets**
        1. Go to File → Export Specified Packets
        2. In the dialog box:
            * Choose your destination folder
            * Name your file
            * Select export format
            * Optionally choose compression
        3. Under Packet Range, select what to export:
            * All packets
            * Captured or Displayed
            * Selected packets only
            * Marked packets only
            * First to last marked
            * Custom range (packet 100 to 200)
        4. Click Save to export the filtered capture
        - [Example of exporting a packet in wireshark.](images/export_packet.png)
11. Exporting Objects from Network Traffic
    - Wireshark can extract actual files or data objects transferred over certain protocols like HTTP, SMB, TFTP, and more.
    - This is especially useful in malware analysis, digital forensics, or web traffic inspection.
    - **How to export Objects**
        1. Go to File → Export Objects.
        2. Choose the protocol:
            * HTTP: Web files (HTML, images, scripts)
            * SMB: Windows file share
            * TFTP: Lightweight file transfer
            * IMF/DICOM: Specialized formats (email, medical imaging)
        3. In the object list window:
            * You’ll see columns for Packet, Hostname, Content Type, Size, and Filename.
            * Select the object you want.
        4. Click Save to export the file to your system
        - [Example of exporting objects in wireshark.](images/export_objects.png)
12. Expert Info in Wireshark
    - Wireshark’s Expert Info feature helps analysts quickly spot anomalies, warnings, and protocol issues during packet analysis.
    - It categorizes events based on severity and type, making it easier to prioritize what needs attention.
    - **How to access it**
        * Click the status bar at the bottom left of Wireshark.
        * Or go to Analyze → Expert Information.
        * This opens a window showing:
            * Severity
            * Group
            * Protocol
            * Summary of the issue
    - **Severity Levels**
        - Expert info can provide a group of categories in three different severities.
        - [Details are shown in this picture.](images/severity_levels.jpg)
13. Packet Filtering in Wireshark
    - Wireshark offers two powerful filtering mechanisms to help analysts focus on relevant traffic.
    - Helps in reducing noise during network analysis.
    - **Types of filters**
        1. **Capture Filter**:
            * Filters packets before they’re captured
            * Used during live capture
            * Syntax is low-level and based on `tcpdump` (eg, `port 80`, `host 192.168.1.1`)
            * Used to limit what gets recorded, saving space and focusing on specific traffic
        2. **Display Filter**:
            * Filters packets after they’re captured
            * Used while analyzing PCAP
            * Syntax is Wireshark-specific (eg, `http.request`, `ip.addr == 10.0.0.1`)
            * Used to view and analyze specific packets from a full capture.
14. Apply as Filter (Quick Packet Filtering in Wireshark)
    - This feature lets you instantly create display filters by right-clicking on any field in a packet.
    - It’s the fastest way to isolate traffic based on specific values.
    - **How to use It**
        1. Right-click on a field in the packet list or details pane (eg, IP address, port, protocol).
        2. Select Apply as Filter, then choose:
            * Selected: Show only packets matching this value
            * Not Selected: Show packets that don’t match
            * And Selected / Or Selected:  Combine with existing filter
        3. Wireshark will:
            * Generate the appropriate display filter expression
            * Apply it to the packet list
            * Update the status bar to show how many packets match
        4. Example:
            * Right-click on `ip.addr == 192.168.0.1`
            * Choose Apply as Filter → Selected
            * Wireshark filters and shows only packets involving that IP
            * [Example picture of Apply as filter in wireshark.](images/applyas_filter.png)
15. Conversation Filters in Wireshark
    - Wireshark’s Conversation Filter lets you isolate all packets exchanged between two endpoints based on IP addresses, ports, or protocols.
    - It’s perfect for tracking a full session, like a TCP handshake or an HTTP exchange.
    - **How to apply**
        1. Right-click on a packet field (eg, IP address, TCP port)
        2. Select Apply as Filter → Conversation Filter.
        3. Wireshark will:
            * Generate a filter like `tcp.stream eq 0` or `ip.addr == 192.168.0.1 && ip.addr == 192.168.0.2`
            * Display only packets from that conversatioN
            * Update the status bar to show how many packets match
        4. [Example of conversation filter](images/conversation_filter.png)
16. Follow Stream in Wireshark
    - Wireshark normally shows traffic in packet-sized chunks, but the Follow Stream feature lets you reconstruct full conversations like HTTP requests/responses or TCP sessions into readable, application-level data.
    - **How to use It**
        1. Right-click on a packet from the stream you want to inspect.
        2. Select Follow → TCP Stream, UDP Stream, or HTTP Stream.
        3. A new window opens showing:
            * The entire conversation between client and server
            * Readable content like HTTP headers, HTML, or plain text
            * Options to save the stream, change encoding, or filter by direction
        4. [Example of Follow stream in wireshark.](images/follow_stream.png)

## Learning and Reflections
- Learned about wireshark, its GUI and key features.
- Learned how to load and navigate PCAP files.
- Learned different packet colouring in wireshark.
- Learned how to sniff traffic in real time.
- Learned how to merge two or more PCAP files.
- Learned about different layers of packet dissection.
- Learned how to Go-to any packet number or Find a Packet based on protocols.
- Learned how to add comments to packets.
- Learned how to export packet files.
- Learned how to export objects from network traffic.
- Learned about the Expert Info feature in wireshark.
- Learned how to filter packets and types of fitlers.
- Learned quick filter packet method called Apply As Filter.
- Learned how to follow different protocol streams in wireshark. 





























































































