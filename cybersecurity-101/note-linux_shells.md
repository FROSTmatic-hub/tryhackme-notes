# Linux Shells (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn about scripting and the different types of Linux shells

## Core Concepts Covered
1. Linux Shells: Types, Discovery, and Switching
    - **What is a Shell?**
        * A shell is a command-line interface that lets users interact with the operating system.
        * In Linux, shells are like the counterparts to Command Prompt or PowerShell in Windows.
        * Different shells offer different features, scripting capabilities, and user experiences.
    - **Current Shell**
        * To check what shell you're using:
        * Use the command `echo $SHELL`
    - **Available Shells**
        * To list the installed shell in your OS:
        * Use the command `cat /etc/shells`
    - **Switching Shells**
        * To change your default shell:
        * Use the command `chsh -s /bin/zsh`
        * This sets the default shell to `zsh`.
2. Types of Linux Shells
    - **Bourne Again Shell (Bash)**
        * Bourne Again Shell (Bash) is the default shell for most Linux distributions.
        * Some of the key features provided by bash are:
            * Bash is a widely used shell with scripting capabilities.
            * It offers a tab completion feature.
            * Bash keeps a history file and logs all of your commands.
    - **Friendly Interactive Shell (Fish)**
        * Friendly Interactive Shell (Fish) is also not default in most Linux distributions.
        * It focuses more on user-friendliness than other shells.
        * Some of the key features are:
            * It offers a very simple syntax, which is feasible for beginner users.
            * Unlike bash, it has auto spell correction for the commands you write.
            * Fish also provides scripting, tab completion, and command history functionality.
    - **Z Shell (zsh)**
        * Z Shell (Zsh) is not installed by default in most Linux distributions
        * It is considered a modern shell that combines the functionalities of some previous shells.
        *  Some of the key features are:
            * Zsh provides advanced tab completion and is also capable of writing scripts
            * Just like fish, it also provides auto spell correction for the commands.
            * It offers extensive customization that may make it slower than other shells.
            * It also provides tab completion, command history functionality, and several other features.
    - [Comparision between these shells are given in this image](images/shell_comparsion.jpg)
3. Shell Scripting and Components
    - **What is a Shell Script?**
        * A shell script is a file containing a sequence of shell commands.
        * Typically saved with a `.sh` extension.
        * Starts with a shebang (`#!/bin/bash`) to specify the interpreter.

## Learning and Reflections
- Learned about linux shells and its types.
- Learned about shell scripting.


