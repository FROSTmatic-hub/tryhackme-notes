# Digital Forensics Fundamentals (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Learn about digital forensics and related processes and experiment with a practical example.

## Core Concepts Covered
1. Digital forensics
    - **What Is Digital Forensics?**
        * Digital forensics is the process of identifying, preserving, analyzing, and presenting digital evidence from electronic devices.
        * It plays a critical role in cybersecurity, criminal investigations, and incident response by uncovering how digital systems were used or compromised.
    - **Four Phases of Digital forensics**
        1. **Collection**
            * Secure and document all devices (PCs, phones, cameras, etc.) at the scene.
            * Ensure original data is preserved without tampering.
        2. **Examination**
            * Extract and inspect data (eg, deleted, hidden, or encrypted files).
            * Focus only on relevant evidence tied to the case.
        3. **Analysis**
            * Correlate findings to reconstruct the incident.
            * Draw conclusions that can be presented in court.
        4. **Reporting**
            * Create a detailed, understandable report of methods and findings.
            * Present evidence clearly for legal proceedings.
    - **Types of Digital Forensics**
        * **Disk Forensics:** Analyzing hard drives and storage media
        * **Network Forensics:** Investigating data flow across networks
        * **Database Forensics:** Examining database breaches or tampering
        * **Memory Forensics:** Capturing and analyzing volatile memory
        * **Malware Forensics:** Dissecting malicious software behavior
        * **Email Forensics:** Tracing email communications and phishing
        * **Cloud Forensics:** Investigating data stored in cloud platforms
2. Evidence Acquisition
    - Acquiring evidence is a critical job. The forensics team must collect all the evidence securely without tampering with the original data.
    -  **Key Principles**
        * **Secure collection:** Evidence must be gathered without altering original data
        * **Device awareness:** Methods vary by device type (PCs, phones, cameras, etc.).
        * **Documentation:** Every step must be recorded to maintain integrity.
    - **Proper Authorization**
        * Investigators must obtain legal approval (eg, search warrant) before collecting data.
        * Unauthorized evidence may be inadmissible in court.
        * Protects privacy and ensures compliance with legal boundaries.
    - **Chain of Custody**
        * A formal document that tracks:
            * Evidence description
            * Custodian name
            * Transfer date/time
            * Purpose of transfer
            * Signatures of involved parties
        * Ensures accountability, integrity, and legal admissibility of evidence.
    - **Write Blockers**
        * Prevent accidental modification of suspect drives during analysis.
        * Placed between the suspect’s hard drive and forensic workstation.
        * Allows read-only access, preserving original data for investigation.
3. Windows Forensics
    - **Common Evidence Sources**
        * Most digital crimes involve personal computers or laptops running Windows OS.
        * Forensic investigators collect bit-by-bit images of these systems.
    - **Types of Forensic Images**
        * **Disk Image**
            * Non-volatile copy of the entire storage device (HDD/SSD)
            * ncludes OS files, browsing history, logs, downloads, etc.
        * **Memory Image**
            * Volatile snapshot of RAM
            *  Captures running processes, open connections, and live session data
            * Must be acquired before shutdown
    - **Tools for Acquisition & Analysis**
        * **FTK Imager**
            * GUI-based tool for acquiring and analyzing disk images
            * Supports multiple formats
        * **Autopsy**
            * Open-source platform for disk image analysis
            * Features include keyword search, deleted file recovery, metadata inspection, and extension mismatch detection
        * **DumpIt**
            * CLI tool for capturing memory images from Windows systems
            *  Lightweight and format-flexible
        * **Volatility**
            * Advanced memory analysis tool with plugin support
            * Works across Windows, Linux, macOS, and Android
            * Ideal for dissecting memory artifacts
        * **Note: Many other tools exist depending on the case and environment.**
4. PDF Metadata using `pdfinfo`
    - **What It Does**
        * Extracts metadata from PDF files (eg, author, creation date, page size).
        * Useful for verifying document origin, authorship, and timeline.
    * **How to use**
        * Install with:
            * `sudo apt install poppler-utils`
        * Run:
            * `pdfinfo DOCUMENT.pdf`
        * Reveals:
            * Title, Author, Creator, Producer
            * CreationDate & ModDate
            * Page count, size, encryption status
5. EXIF Data using `exiftool`
    - **What It Does**
        * EXIF (Exchangeable Image File Format) stores metadata in image files.
        * Includes:
            * Camera/smartphone model
            * Timestamp
            * GPS coordinates (if available)
    - **How to use**
        * Install with:
            * `sudo apt install libimage-exiftool-perl`
        * Run:
            * exiftool IMAGE.jpg
        * Reveals:
            * GPS Latitude/Longitude
            * Device info
            * Date/time photo was taken

## Learning and Reflections
- Learned about Digital Forensics, its four phases and its types.
- Learned about Evidence Aquisition.
- Learned about windows operating systen forensics.
- Learned how to extract useful data using `pdfinfo`.
- Learned how to extract useful image data using `exiftool`.































