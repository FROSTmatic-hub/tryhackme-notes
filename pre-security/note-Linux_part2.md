# Linux Fundamentals Part 2 (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Continuing learning Linux journey with part Two, learning how to log in to a Linux machine using SSH, how to advance your commands, file system interaction.

## Core Concepts Covered
1. Accessing Your Linux Machine Using SSH
    - Explains SSH (Secure Shell) as an encrypted protocol for remote access.
    - Demonstrates deploying a Linux machine and TryHackMe attack box
    - Shows how to use `ssh tryhackme@<IP>` to log in with credentials.
2. Introduction to Flags and Switches
    - Introduces command-line flags such as `ls -a`, `ls -l` to modify behavior.
    - Explains `--help` and `man` pages for command documentation.
3. More of Filesystem Interaction 
    - Explained on creating files using `touch filename` and folders `mkdir foldername`.
    - Explained removing files with `rm` and directories with `rm -r`.
    - Showed copying files with `cp` and moving/renaming with `mv`.
    - Introduced `file filename` to identify file types without extensions.
4. Permissions 101
    - **Breaks down Linux file permissions**: `rwx` for user, group, others.
    - Uses `ls -l` to view permission columns.
    - Introduces `su` and `su -l` for switching users with environment variables.
5. Common Directories
    - `/etc`: System configuration files like `passwd`, `shadow`, `sudoers`.
    - `/var`: Variable data like logs and databases.
    - `/root`: Home directory of the root user
    - `/tmp`: Temporary storage, cleared on reboot.

## Learning and Reflections
- Learned how to remotely access machines using SSH.
- Learned about flags and switches.
- Learned about different users, groups and permissions.