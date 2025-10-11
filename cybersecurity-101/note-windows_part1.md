# Windows Fundamentals 1 (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 30 min

## Objective
In part 1 of the Windows Fundamentals module, we'll learning about the NTFS file system, UAC, etc.

## Core Concepts Covered
1. Windows File System (NTFS Overview)
    - NTFS replaced older file systems like FAT16, FAT32, and HPFS.
    - FAT is still used in USB drives and memory cards.
    - NTFS can auto repair files/folders using data stored on the logs.
    - Advantages of NTFS includes:
        * Supports files larger than 4GB.
        * Allows setting specific permissions on files/folders.
        * Supports file and folder compression.
        * Includes Encryption File System (EFS) for data protection.
2. NTFS Permissions for Files and Folders
    - Permission types includes:
        * Full Control
        * Modify
        * Read & Execute
        * List folder contents
        * Read
        * Write
    - The [image](images/ntfs_permissions.png) lists the meaning of each permission on how it applies to a file and a folder.
3. Alternate Data Stream (ADS) in NTFS
    - ADS allows files to contain multiple data streams (main stream is `$DATA`).
    - Windows Explorer does not show ADS by default, requires powershell or third party applications.
4. Windows Folder & Environment Variables
    - `C:\Windows` is the default location of the Windows OS (but it can reside on other drives or folders too).
    - **System Environment** Variables help locate system directories regardless of their actual path.
    - `%windir%` is the environment variable that points to the Windows directory.
    - Environment variables store OS-related info like:
        * OS path
        * Number of processors
        * Location of temporary folders
5. [System32](images/system_32.jpg) Folder
    - Contains critical system files required for Windows to function.
    - Deleting any files here can break the OS.
    - Many tools in Windows Fundamentals are located in System32.
    - It is the core part of the OS, not meant to be played around.
6. User Account types in Windows
    - Two main types of local user accounts are:
        * Administrator: Can delete/add users, modify groups and settings, install/uninstall programs.
        * Standard User: Can modify only their own files/folders, cannnot make system level changes without permission.
7. User Account Control (UAC)
    - Most users are logged in as local administrators, which allows system-level changes.
    - Running with elevated privileges increases risk, attackers can exploit admin access.
    - UAC was introduced in Windows Vista to reduce this risk.
    - UAC ensures:
        * Even admin accounts don’t run with elevated privileges by default.
        * When a task requires higher privileges, the system prompts the user for confirmation.
    - When installing softwares, UAC displays a [shield](images/UAC_shield.png) icon and prompts for [admin credentials](images/UAC_admin_creds.png).
8. Task Manager
    - [Task Manager](images/task_manager.png) shows real-time data about:
        * Running applications
        * Background processes
        * CPU and RAM usage
    - It's useful for diagnosing, ending and monitoring system tasks and processes.

## Learning and Reflections
- Learned about NTFS and its permissions.
- Learned about system32, environmental variables.
- Learned how UAC is used to avoid privileged access.
- Learned about task manager and its usage.















