# Windows Fundamentals 2 (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
In part 2 of the Windows Fundamentals module, we'll learn about System Configuration,      Resource Monitoring, etc.

## Core Concepts Covered
1. System Configuration
    - Used for advanced troubleshooting and diagnosing startup issues.
    - Requires **local administrator** rights to launch.
    - Can be accessed vai the Start menu or `msconfig`.
    - Tabs in System Configuration:
        1. [General Tab](images/general_tab.png):
            - Chooses startup mode:
                * Normal startup: Loads all drivers and services.
                * Diagnostic startup: Loads basic devices and services only.
                * Selective startup: Customize what loads (system services, startup items, boot config)
        2. [Boot Tab](images/boot_tab.png):
            - Configures boot options like Safe boot, no GUI boot, Boot log, Timeout settings.
        3. [Service Tab](images/service_tab.png):
            - Lists all system services with like Name, manufacturer, status and disable date.
            - Option to hide Microsoft services to avoid disabling critical components.
        4. [Tools Tab](images/tool_tab.png):
            - Launch built-in Windows tools (e.g, Command Prompt, Event Viewer, etc).
            - Shows tool name, description, Executable path (eg, `C:\Windows\System32\cmd.exe`).
2. [Resource Monitor](images/resource_monitor.png)
    - A powerful diagnostic tool for advanced troubleshooting.
    - Displays per-process and aggregate usage for:
        * CPU
        * Memory
        * Disk
        * Network
    - Key features include:
        * Shows which processes are using file handles and modules.
        * Allows filtering by process, application, or service.
        * Can start, stop, pause, or resume services.
3. Command Prompt in Windows
    - Command Prompt (`cmd`) lets users interact directly with the OS via text commands.
    - Still useful for system info, troubleshooting, and automation.
    - Common Commands:
        * `hostname`: Displays the computer's name.
        * `whoami`: Shows the current logged-in user.
        * `ipconfig`: Displays network configuration.
    - Most command supports `/?` to show syntax and help menu.
4. [Windows Registry](images/registry_editor.png) 
    - Access via `regeit` or start menu.
    - The Windows Registry is a hierarchical database used to store:
        * OS Configuration settings
        * User preferences
        * Application data
        * Hardware configurations
    - Editing the registry is advanced and risky—incorrect changes can disrupt system functionality.
    - Main root keys:
        * `HKEY_CLASSES_ROOT`: File type associations
        * `HKEY_CURRENT_USER`: Settings for the current user
        * `HKEY_LOCAL_MACHINE`: System-wide settings
        * `HKEY_USERS`: All user profiles
        * `HKEY_CURRENT_CONFIG`: Hardware profile info

## Learning and Reflections
- Learned about System configuration.
- Learned about Resource Monitor
- Learned about command prompt and different commands.
- Learned about windows registry and its main roots.




    

    







