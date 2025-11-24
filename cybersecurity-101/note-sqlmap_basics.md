# SQLMap: The Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 12 min

## Objective
Learn about SQL injection and exploit this vulnerability through the SQLMap tool.

## Core Concepts Covered
1. SQL Injection
    - SQL Injection is a vulnerability where user input is not properly sanitized, allowing attackers to manipulate SQL queries.
    - Commonly exploited in login forms, search bars, and URL parameters.
    - **How It works**
        * Normal login query:
            * `SELECT * FROM users WHERE username = 'John' AND password = 'Un@etectable44';`
            * Authenticates only if both username and password match.
        * Malicious input:
            * Username: `John`
            * Password: `abc' OR '1'='1'; --`
            * Resulting query:
                * `SELECT * FROM users WHERE username = 'John' AND password = 'abc' OR '1'='1'; --'`
                * `'1'='1'` always evaluates to true.
                * `--` comments out the rest of the query.
                * Bypasses authentication and logs attacker in.
    - **Variants of SQL Injection Payload**
        * `' OR '1'='1' --`
        * `' OR '1'='1' /*`
        * `' OR '1'='1' #`
        * These variations use different comment styles to terminate the query safely and ensure the injected logic is executed.
2. Automated SQL Injection Tool
    - **SQL Injection (SQLi)**: Technique to exploit vulnerabilities in an app’s database queries.
    - Manual SQLi can be time-consuming, **SQLMap** automates detection and exploitation.
    - Tool works via the command line on Linux OS.
    - **Basic SQLMap Commands**
        * `sqlmap --help`: Shows all available options and flags.
        * `sqlmap --wizard`: Interactive mode that guides beginners step-by-step.
    - **Key SQLMap Flags**
        * `-u`: Specifies the target URL.
        * `--dbs`: Lists all available databases.
        * `-D database_name`: Specifies which database to target.
        * `--tables`: Lists all tables in the selected database.
        * `-T table_name`: Selects a specific table.
        * `--dump`: Extracts (dumps) the data from the chosen table.
    - **Testing a Vulnerable URL**
        * Example vulnerable URL:
            * `http://sqlmaptesting.thm/search?cat=1`
            * Parameter `cat=1` can be vulnerable to SQLi.
        * Command to test:
            * `sqlmap -u http://sqlmaptesting.thm/search?cat=1`
            * [Example of command here](images/sqli_test.jpg)
        * SQLMap process:
            * Tests connection and page stability.
            * Detects protection mechanisms (WAF/IDS).
            * Checks if the parameter is dynamic.
            * Determines if the target is injectable (eg, MySQL-based blind injection).
    - **Types of SQL Injection Detected**
        * **Boolean-based blind SQLi**: Uses true/false logic (eg, `1=1`) to infer data.
        * **Error-based SQLi**: Exploits database error messages to extract info.
        * **Union-based SQLi**: Combines multiple queries to fetch data.
    - **Extracting Database Information**
        1. List all databases:
            * Use command: `sqlmap -u http://sqlmaptesting.thm/search?cat=1 --dbs`
            * [Example of command here](images/sqli_dbs.jpg)
        2. List tables in a databases:
            * Use command: `sqlmap -u http://sqlmaptesting.thm/search?cat=1 -D users --tables`
            * [Example of command here](images/sqli_tables.jpg)
        3. Dump data from a table:
            * Use command: `sqlmap -u http://sqlmaptesting.thm/search?cat=1 -D users -T thomas --dump`
            * [Example command here](images/sqli_dump.jpg)
    - **Testing POST Requests**
        * For login or registration forms (where data isn’t in the URL):
            * Intercept the POST request using Burp Suite or similar.
            * Save it as a text file (eg, `intercepted_request.`txt).
            * Run: `sqlmap -r intercepted_request.txt`
            * This tests the body of POST requests for SQL injection.

## Learning and Reflections
- Learned about SQL injection and how it works.
- Learned about automating SQL injection with tools.




