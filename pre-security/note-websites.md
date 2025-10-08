# How Websites Work (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 25 min

## Objective
To exploit a website, you first need to know how they are created.

## Core Concepts Covered
1. How Websites Work
    - The web operates on a client-server model.
    - Your browser (client) sends a request to a web server, which responds with data.
    - Websites consist of two main parts:
        - **Front End (Client side)**: What users see and interact with.
        - **Back End (Server side)**: Handles logic, databases, and processings.
2. HTML
    - HTML (HyperText Markup Language) is the backbone of web pages.
    - It defines the structure and content using tags like `<html>`, `<head>`, `<body>`, `<h1>`, `<p>`, etc.
    - HTML builds the structure of a webpage.
3. JavaScript
    - JavaScript (JS) adds interactivity and dynamic behavior to websites.
    - JS can manipulate HTML elements, respond to user actions, and update content in real time.
    - JavaScript transforms static pages into interactive experiences.
4. Sensitive Data Exposure
    - Websites can unintentionally expose sensitive data through poor coding practices.
    - Examples include:
        - Hardcoded credentials in HTML or JS.
        - Exposed API keys or tokens.
        - Misconfigured access controls.
    - Protect sensitive data by following secure coding practices.
5. HTML Injection
    - HTML Injection occurs when user input is not properly sanitized, allowing attackers to inject malicious HTML code.
    - This can lead to Defacement, Phishing, Data theft.
    - Always sanitize user input to prevent injection attacks.

## Learning and Reflections
- Learned how websites communicate using front and back end.
- Learned HTML is the backbone of websites.
- Learned how JS is used to add functionality to HTML.
- Learned about HTML injections.
