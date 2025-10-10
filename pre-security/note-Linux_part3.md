# Linux Fundamentals Part 3 (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 18 min

## Objective
Power-up your Linux skills and get hands-on with some common utilities that you are likely to use day-to-day!

## Core Concepts Covered
1. Terminal Text Editors
    - Introduces `nano` and `vim` for editing files.
    - Demonstrates creating and saving files with `nano <filename>`.
2. General/Useful Utilities
    - Covers `wget` for downloading files via HTTP.
    - Explains `scp` for secure file transfer between machines.
    - Shows how to serve files using `python3 -m http.server`.
3. Processes 101
    - Uses `ps` and `ps aux` to view running processes.
    - Introduces top for real-time monitoring.
    - Explains `kill`, `SIGTERM`, `SIGKILL`, and `SIGSTOP`.
    - Demonstrates foregrounding (`fg`) and backgrounding (`&`, `CTRL+Z`) processes.
4. Automation
    - Introduces `cron` and `crontab -e` for scheduling tasks.
    - Explains `cron` syntax and wildcards (`*`).
    - Example: Backing up files every 12 hours.
5. Package Management
    - Explains `apt`, `repositories`, and `sources.list`.
    - Demonstrates adding GPG keys and third-party repos.
    - Shows how to install and remove packages like Sublime Text.
6. Logs
    - Reviews `/var/log` directory and key logs like `access.log`, `error.log`.
    - Uses `less` to inspect `logs` and extract IP addresses and file access info.

## Learning and Reflections
- Learned about different text editors in linux.
- Learned how to view and kill proccess.
- Learned how to automate tasks using `cron`.
- Learned how to install packages using `apt`.
- Learned how to view log files for errors and access.




