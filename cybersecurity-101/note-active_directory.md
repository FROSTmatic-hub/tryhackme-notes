# Active Directory Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 30 min

## Objective 
This module will introduce the basic concepts and functionality provided by Active Directory.

## Core Concepts Covered
1. Windows Domains & Active Directory (AD)
    - A Windows domain is a centralized network structure used to manage users, computers, and resources across an organization.
    - Instead of configuring each machine individually, administrators use a **Domain Controller (DC)** to manage everything from one place.
    - **The Active Directory (AD)** service runs on the DC and acts as the central repository for:
        * User accounts
        * Machine accounts
        * Security policy
        * Group memberships
    - Advantages of using a Windows Domain:
        * All users and computers are managed from AD.
        * Reduces manual configuration and improves scalability.
        * Ensures consistent access control and compliance.
2. [Active Directory Domain Services (AD DS)](images/Users_AD.png)
    - **Core Objects in AD includes**:
        - **Users**:
            * Represent individuals who need access to resources.
            * Can be grouped and assigned permissions.
        - **Machines**:
            * Each computer in the domain is treated as an object.
            * A machine named `CORE1` will have an account `CORE1$`.
        - **Groups**:
            * Collections of users or machines.
            * Used to simplify permission management.
3. [Organizational Units (OUs)](images/Organization_units.png)
    - OUs are containers used to organize AD objects (users, computers, groups).
    - A company might have OUs for Management, Marketing, R&D, and Sales, etc.
    - Different Group Policies can be applied to each OU for tailored configurations.
4. Default Containers in AD
    - **Builtin**: Default groups (e.g, Administrators, Users).
    - **Computers**: New machines added to the domain go here by default.
    - **Domain Controllers**: Contains all DCs in the network.
    - **Users**: Default users and groups for domain-wide access.
    - **Managed Service Accounts**: Used by services running in the domain.
5. Delegation in Active Directory (AD)
    - Delegation is the process of granting specific administrative privileges to non-domain-admin users over certain parts of the **Active Directory** structure typically **Organizational Units**.
    - It allows granular control without giving full domain-wide access.
    - Commonly used to empower IT support staff or department leads to manage their own teams.
    - **How to Delegate Control**
        1. Open Active Directory Users and Computers.
        2. [Right-click the target OU.](images/delegate_right_click.png)
        3. [Select “Delegate Control”.](images/delegate_right_click.png)
        4. [A wizard will pop up.](images/delegate_wizard.png)
        5. Use the wizard to:
            * Choose the user or group.
            * Select specific tasks (reset passwords, create/delete user accounts).
            * Apply and finish.
6. Managing Computers in Active Director (AD)
    - When a computer joins a domain, it is automatically placed in the **Computers** container.
    - This includes:
        * Workstations
        * Laptops
        * Servers
    - Domain Controllers (DCs) are placed in a separate container called **Domain Controllers**.
    - **Organizing Computers into OUs**:
        * The Computers container is not an Organizational Unit (OU), so you cannot apply Group Policies directly to it.
        * To manage devices effectively, especially in large environments, it's best to create custom OUs for different device types.
    - [**Recommended OU Structure**](images/OU_structure.jpg)
        * Organizing devices into OUs allows for targeted policy application and easier administration.
        * These OUs are created directly under the domain `itconnect.local` for clarity and control.
        * You can apply Group Policies to each OU to enforce settings.
7. Group Policy Objects (GPOs) in Active Directory
    - GPOs are collections of settings that control the behavior of users and computers in a Windows domain.
    - They allow administrators to enforce policies across the network without configuring each machine manually.
    - GPOs can apply to:
        * Domains
        * Organizational Units
        * Groups
        * Individual users or computers
    - The tool used for Group Policy is [Group Policy Management](images/group_policy_management.png)
    - GPOs are created under the Group Policy Objects container.
    - They are then linked to specific OUs or domains.
    - Example:
        * `Default Domain Policy`: Linked to the entire domain.
        * `Default Domain Controllers Policy`: Linked to the Domain Controllers OU.
        * `Sales GPO`: Linked to the Sales OU.
8. [GPO Scope and Settings](images/scope_GPO.png)
    - Each GPO has two main configuration areas:
        1. **Computer Configuration**: Applies settings to machines (security policies, software installation)
        2. **User Configuration**: Applies settings to user accounts (desktop restrictions, login scripts)
    - The **Settings tab** in GPMC shows all active policies within a GPO.
    - **Security Filtering** can be used to limit GPO application to specific users or groups.
9. Authentication in Windows Domains
    - Windows domains rely on secure authentication protocols to verify user identities and authorize access to services.
    - The two main protocols are:
        1. **Kerberos Authentication (Default Protocol)**
            - Kerberos is the default and preferred authentication method in modern Windows domains. It uses a **ticket-based system** to securely authenticate users without transmitting passwords over the network.
            - **Kerberos Workflow**:
                1. [**Initial Login**:](images/kerberos_initial_login.png)
                    * User sends their **username and timestamp**, encrypted with a key derived from their password, to the **Key Distribution Center (KDC)**.
                    * The KDC (running on the Domain Controller) verifies the credentials and returns a **Ticket Granting Ticket (TGT)** encrypted with **krbtgt hash** and a **Session Key** encrypted with the user's password hash.
                2. [**Requesting Access to the Service**:](images/kerberos_request_TGS.png)
                    * User sends the **TGT**, **Session Key**, and a new timestamp (encrypted) to the KDC, along with the **Service Principal Name (SPN)** of the desired service.
                    * KDC returns a **Ticket Granting Service (TGS)** encrypted with the Service Owner’s hash and a **Service Session Key** for secure communication with the service.
                3. [**Accessing the Service**:](images/kerberos_access_service.png)
                    * User presents the TGS and Service Session Key to the target service.
                    * The service decrypts the TGS using its own password hash and validates the session key.
                    * If its valid then access is granted.
                4. **Security Features in Kerbos Workflow**:
                    * Passwords are never transmitted.
                    * Tickets are time-bound and encrypted.
                    * Kerberos supports mutual authentication (both client and server verify each other).
        2. **NTML/NetNTLM Authentication (Legacy Protocols)**
            - NTLM is used for **backward compatiblilty**.
            - Still supported in environments where Kerberos isn’t feasible (workgroups, legacy systems).
            - NTLM is considered less secure and should be avoided when possible.
            - [**NetNTLM Workflow**:](images/NTLM_workflow.png)
                1. **Client → Server**: Sends an **Authentication Request**.
                2. **Server → Client**: Sends a **Challenge** (random number).
                3. **Client → Server**: Responds with a hash of the challenge plus the NTLM password hash.
                4. **Server → Domain Controller**: Forwards challenge and response.
                5. **Domain Controller**: Recomputes the expected response using stored NTLM hash.
                6. **Server**: Compares both responses. If they match, authentication succeeds.
10. Trees, Forests, and Trusts in Active Directory
    - A single domain might be enough for a small company.
    - As businesses expands across countries, different legal, operational, and IT needs arises.
    - Seperate domains allow:
        * Independent **Group Policies**.
        * Localized **Administrative Control**.
        * Better **Security Boundaries**.
    1. [**Trees (Hierarchical Domain Structure)**:](images/trees.png)
        - A tree is a collection of domains that share a common namespace.
        - Example:
            * Root Domain: `thm.local`
            * Subdomains: `uk.thm.local`, `us.thm.local`
        - Each domain has its own **Domain Controller (DC)**:
            * `DC-ROOT` for `thm.local`
            * `DC-UK` for `uk.thm.local`
            * `DC-US` for `us.thm.local`
            * (These are all example domains)
        - Admin Roles in Trees:
            * **Domin Admins**: Full control over their own domain.
            * **Enterprise Admins**: Full control over all domains in the tree.
    2. [**Forests (Multiple Trees in One Enterprise)**:](images/forests.png)
        - A forest is a collection of **one or more domain trees** that do not share a namespace.
        - Common in mergers or large enterprises with distinct IT infrastructures.
        - Examples:
            * Tree 1: `thm.local`, `uk.thm.local`, `us.thm.local`
            * Tree 2: `mht.local`, `eu.mht.loca`, `asia.mht.local`
    3. [**Trust Relationships**:](images/trust.png)
        - Trusts allow users in one domain to access resources in another domain.
        - Types of Trust:
            * **One-Way Trust**: Domain A trusts Domain B → Users from B can access A, but not vice versa.
            * **Two-Way Trust**: Mutual trust → Users from both domains can access each other's resources.
            * **Default Trusts**: Domains in the same tree or forest automatically form two-way trusts.
        - **Trust is not equal to automatic access**, You must explicitly authorize users to access specific resources.

## Learning and Reflections
- Learned about Windows Domains and Active Directory.
- Learned about OUs and Default containers.
- Learned two different authentication methods in Windows Domain.
- Learned about trees, forests and trust relationship.














            


















        

        


















