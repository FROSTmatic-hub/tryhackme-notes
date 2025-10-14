# Windows PowerShell (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 25 min

## Objective
Learning the essential Windows Powershell commands.

## Core Concepts Covered
1. What Is PowerShell?
    - PowerShell is a cross-platform task automation framework developed by Microsoft.
    - It combines:
        * A **command-line shell**
        * A **scripting language**
        * A **configuration management framework**
    - Built on the **.NET framework**, it allows deep interaction with system components and complex data types.
    - Initially Windows-only but now supports macOS and Linux, making it a versatile tool for IT professionals and cybersecurity workflows.
    - Designed to support **automation**, **remote management**, and **object-oriented scripting**.
    - PowerShell treats everything as an object, not just plain text.
    - Objects have **Properties** and **Methods**.
    - This object-oriented model allows more precise control over data and cleaner scripting logic.
2. PowerShell Syntax
    - PowerShell commands are called **cmdlets** (command-lets)
    - They follow a Verb-Noun naming pattern:
        * **Verb**: Some action (`Get`, `Set`, `Remove`,etc.)
        * **Noun**: Target object (`Content`, `Location`, `Service`,etc.)
    - Examples:
        * `Get-Content`: Retrieves file content. (similar to `dir`)
        * [`Set-Location`](images/set_location_cmd.jpg): Changes the current directory. (similar to `cd`)
3. Discovering Cmdlets
    - The [`Get-Command`](images/get_command.jpg) lists all available commands (cmdlets, functions, aliases, scripts.)
        - We can also filter by type:
            * [`Get-Command -CommandType "commandtype"`](images/filter_cmdlets.jpg)
    - The `Get-Help` provides a documentation/help for any cmdlet.
        - Example:
            * [`Get-Help Set-Location`](images/get-help_cmd.jpg)
    - The [`Get-Alias`](images/get-alias_cmd.jpg)cmdlet is a shortcut for longer cmdlets.
        - Example:
            * `%`: `ForEach-Object`
            * `cd`: `Set-Location`
    - The `Find-Module` searches for modules in the PowerShell gallery.
    - The `Install-Module` installs a module from the PowerShell Gallery.
4. File System Navigation & File Management
    - The command `Get-Childitem` lists files and folders in the current directory or specified path.
        - Example:
            * [`Get-ChildItem`](images/get-childitem_cmd.jpg): List files/folders in the current directory.
            * `Get-Childitem -Path "C:\Users\`
    - The command [`Set-Location`](images/set-location_cmd.jpg) changes the current working directory.
    - The command `New-Item` creates a new file or directory.
        - Example:
            * [`New-Item -Path "C:\Users\aweso\Desktop\" -Name "Hello.txt" -ItemType "File"`](images/new-item_cmd.jpg)
    - The command `Copy-Item` copies a file/folder to a new location.
        - Example:
            * [`Copy-Item -Path "C:\Users\aweso\Desktop\Hello.txt" -Destination "C:\Users\aweso\Documents\"`](images/Copy-item_cmd.jpg)
    - The command `Remove-Item` deletes the file or folder
    - The command `Get-Content` displays the content of a file.
        - Example:
            * [`Get-Content -Path "C:\Users\aweso\Documents\Hello.txt"`](images/get-content_cmd.jpg)
5. Piping in PowerShell
    - The pipe symbol `|` passes objects, not just text, from one cmdlet to another.
    - This makes PowerShell more powerful than traditional shells like CMD or Bash.
        - Example:
            * `Get-ChildItem | Sort-Object Length`
            * Lists files and sorts them by size `Length` property
    - **Filtering with** `Where-Object`:
        - Filters objects based on conditions
        - Uses comparison operators:
            * `-eq`: equal to
            * `-ne`: not equal to
            * `-gt`: greater than
            * `-lt`: less than
            * `-like`: wildcare match
        - Example 1: **Filter by extension**
            * `Get-ChildItem | Where-Object { $_.Extension -eq ".txt" }`
        - Example 2: **Filter by name pattern**
            * `Get-ChildItem | Where-Object -Property Name -Like "*ship*"`
    - **Refining Output with** `Select-Object`:
       - Extracts specific properties from objects.
       - Useful for simplifying output or preparing data for export.
       - Example:
            * `Get-ChildItem | Select-Object Name, Length`
    - **Searching File Contents with** `Select-String`:
        - Searches for text patterns inside files.
        - Supports regular expressions for advanced matching.
        - Example:
            * [`Select-String -Path "C:\Users\aweso\Documents\Hello.txt" -Pattern "first"`](images/select-string_cmd.jpg)
6. System & Network Information
    - The command `Get-ComputerInfo` retrieves a comprehensive system details,
    - The command [`Get-LocalUser`](images/get-localuser_cmd.jpg) lists all the user accounts on the system.
    - The command `Get-NetIPConfiguration` displays active network interface details.
    - The command `Get-NetIPAddress` provides a detailed IP address information.
7. System Monitoring & Incident Response
    - The command [`Get-Process`](images/get-process_cmd.jpg) lists all the currently running processes.
    - It shows:
        * Memory usage (`PM(K)`, `WS(K)`)
        * CPU time (`CPU(s)`)
        * Process ID (`ID`)
        * Process name
    - The command [`Get-Service`](images/get-service_cmd.jpg) lists all the services on the system,
    - It shows:
        * Status (Running, Stopped)
        * Service name
        * Display name
    - The command [`Get-TCPConnection`](images/get-tcp_cmd.jpg) displays active TCP connections.
    - Useful for:
        * Detecting suspicious ports
        * Identifying backdoors
        * Mapping remote endpoints
    - It's output includes:
        * Local/Remote IP and Port
        * Connection state
        * Owning process ID
    - The command `Get-FileHash` generates a cryptographic hash of a file
    - Useful for:
        * Verifying file integrity
        * Detecting tampering or malware
    - Example:
        * [`Get-FileHash -Path "C:\Users\aweso\Documents\Hello.txt"`](images/get-hash_cmd.jpg)

## Learning and Reflections
- Learned about powershell and its basic syntax.
- Learned about different cmdlets.
- Learned about piping in powershell
- Learned how to maintain system integrity with powershell.


    















