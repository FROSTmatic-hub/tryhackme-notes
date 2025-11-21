# CyberChef: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
An introduction to CyberChef, the Swiss Army knife for cyber security professionals.

## Core Concepts Covered
1. CyberChef The Swiss Army Knife
    - **What Is CyberChef?**
        * CyberChef is a web-based application designed for performing a wide range of data transformation and analysis tasks directly in your browser.
        * It's often called the "Swiss Army knife for data" because of its versatility.
        * Created by GCHQ (UK’s intelligence agency).
        * No installation required, runs entirely in the browser.
        * Ideal for security analysts, forensic investigators, developers, and CTF players.
        * Supports both basic tasks (eg, Base64 decoding, XOR encoding) and advanced cryptographic operations (eg, AES encryption, RSA decryption).
        * Enables fast, flexible, and repeatable data processing without needing command-line tools.
    - **Accessing the tool**
        * CyberChef can be accessed both online and offline
        * To use CyberChef online mode:
            * All you need is a web browser and internet connection.
            * Click on this link to access it: https://gchq.github.io/CyberChef/
        * To use offline or local copy:
            * Click on this link to download the lastest files: https://github.com/gchq/CyberChef/releases
2. Navigating the CyberChef Interface
    - CyberChef is designed to be intuitive and modular, allowing users to perform complex data operations through a drag-and-drop interface.
    -  The layout is divided into four key zones:
        1. **Operation Area (Left Panel)**
            * Purpose: Displays a list of all available operations/tools you can use.
            * Examples of operations:
                * Encoding/decoding (Base64, URL, Hex)
                * Encryption/decryption (AES, RSA)
                * Data parsing (JSON, XML)
                * Hashing (MD5, SHA1, SHA256)
                * Compression, substitution, regex, and more
            * Features:
                * Search bar to quickly find operation
                * Categories for easy browsing (eg, Crypto, Data Format, Extractors)
                * Drag-and-drop functionality to add operations to the Recipe Area
            * Some most used operations:
                * From Morse Code:
                    * Translates Morse Code into (upper case) alphanumeric characters.
                    * - `.... .-. . .- - ...` becomes `THREATS` when used with default parameters.
                * URL Encode:
                    * Encodes problematic characters into percent-encoding, a format supported by URIs/URLs.
                    * `https://tryhackme.com/r/room/cyberchefbasics` becomes `https%3A%2F%2Ftryhackme%2Ecom%2Fr%2Froom%2Fcyberchefbasics` when used with the parameter “Encode all special chars”.
                * To Base64:
                    * This operation encodes raw data into an ASCII Base64 string.
                    * `This is fun!` becomes `VGhpcyBpcyBmdW4h`
                * To Hex:
                    * Converts the input string to hexadecimal bytes separated by the specified delimiter.
                    * `This Hex conversion is awesome!` becomes `54 68 69 73 20 48 65 78 20 63 6f 6e 76 65 72 73 69 6f 6e 20 69 73 20 61 77 65 73 6f 6d 65 21`
                * To Decimal:
                    * Converts the input data to an ordinal integer array.
                    * `This Decimal conversion is awesome!` becomes `84 104 105 115 32 68 101 99 105 109 97 108 32 99 111 110 118 101 114 115 105 111 110 32 105 115 32 97 119 101 115 111 109 101 33`
                * ROT13:
                    * A simple Caesar substitution cipher which rotates alphabet characters by the specified amount (default 13).
                    * `Digital Forensics and Incident Response` becomes `Qvtvgny Sberafvpf naq Vapvqrag Erfcbafr`
        2.  **Recipe Area (Middle Panel)**
            * Purpose: Displays the sequence of operations (called a "recipe") applied to the input data.
            * Features:
                * Each operation is a block that can be reordered, edited, or removed.
                * You can enable/disable operations temporarily.
                * Recipes can be saved, exported, or shared for reuse
            * Workflow:
                * Drag operations from the Operation Area
                * Configure parameters (e.g., key for AES, delimiter for split)
                * The recipe runs automatically as you build it
        3.  **Input Area (Top Right Panel)**
            * Purpose: Where you paste or type the raw data you want to process.
            * Supports:
                * Text, binary, hex, base64, encoded strings, logs, etc.
            * Features:
                * Toggle between text and hex views
                * Upload files directly for processing
                * Real-time preview of how input is being transformed
        4. **Output Area (Bottom Right Panel)**
            * Purpose: Displays the result after the recipe is applied to the input.
            * Features:
                * Real-time updates as you modify the recipe
                * Toggle between text, hex, and preview modes
                * Option to download or copy the output
            * Use Cases:
                * View decoded messages
                * Extract hidden data
                * Analyze transformed logs or payloads
        5. [Example of CyberChef Interface](images/cyberchef_interface.png)
3. CyberChef Decoding Workflow
    - **Step-by-Step Process for Decoding Unknown String**
        1. **Set a Clear Objective**
            * Define what you want to achieve (eg, decode a string, find a hidden message).
            * Ask yourself: *“What do I want to accomplish?”*
            * Example goals: extract readable text, identify encoding type, reveal obfuscated data.
        2. **Paste or Upload the Data**
            * Insert the suspicious or gibberish string into CyberChef’s Input Area.
            * You can paste text or upload a file.
        3. **Select and Apply Operations**
            * Choose relevant operations from the Operation Area.
            * Common decoding tools include:
                * `From Base64`
                * `From Hex`
                * `ROT13`. `ROT47`
                * `Base85`, `URL Decode`
            * Try different combinations to test hypotheses.
            * Build a recipe by stacking operations in sequence.
        4. **Check the Output**
            * Review the Output Area to see if the result matches your objective.
            * If successful: you're done!
            * If not: go back to Step 1 or Step 3 and refine your approach
    - **Iterative Analysis**
        * CyberChef encourages trial and error.
        * You may need to loop through steps multiple times to decode complex or layered data.

## Learning and Reflections
- Learned about CyberChef and how to access it.
- Learned about the Cyberchef interface and different panels.
- Learned about the recipe area of CyberChef
- Learned how to decode workflows.











































