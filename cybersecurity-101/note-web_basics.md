# Web Application Basics (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 15 min

## Objective
Learn the basics of web applications: HTTP, URLs, request methods, response codes, and headers.

## Core Concepts Covered
1. Web Application Architecture 
    - **Planet Analogy**
        * Think of a web application as a planet.
        * Astronauts (users) explore the surface via a web browser.
        * The surface is **Front End** (visible, interactive part).
        * The core and atmosphere is **Back End** (invisible but essential).
    - **Front End (Surface of the Planet)**
        * Runs in the browser.
        * Handles user experience and interface behavior.
        * A web application would have a user interact with it and use a number of technologies such as:
            * HTML: Structure of the page
            * CSS: Styling and layout
            * Javascript: Interactivity and logic
    - **Back End (Core of the Planet)**
        * Runs behind the scenes.
        * Powers the logic, data, and security of the application.
        * Back-end components includes:
            * Database: Stores and retrieves data
            * Infrastructure: Servers, storage, networking
            * Web Server/ API: Processes requests, serves content
            * WAF (Web App Firewall): Filters malicious traffic
2.  URL Anatomy
    - A Uniform Resource Locator (URL) is a web address that lets you access all kinds of online content, whether it’s a webpage, a video, a photo, or other media.
    - It guides your browser to the right place on the Internet.
    - **Anatomy of URL**
        * Think of a URL as being made up of several parts, each playing a different role in helping you find the right resource.
        * [Example of URL anatomy](images/url_anatomy.jpg)
        * Key components of a URL:
            * Scheme: Protocol used (eg, HTTP, HTTPS)
            * User: Optional login credential
            * Password: Optional password for authentication
            * Host/Domain: Website address
            * Port: Communication channel (eg, 80 for HTTP, 443 for HTTPS)
            * Path: Specific resource or page
            * Query String: Parameters sent to the server
            * Fragment: Section within the page (eg, anchor link)
    - **Security Implications of URL Components**
        * **Host/Domain**
            * Must be unique and registered.
            * Watch out for **typosquatting** (eg, `g00gle.com` vs `google.com`) used in phishing.
        * **Port**
            * Directs traffic to the correct service.
            * Ports range from `1-65535`.
        * **Path**
            * Navigates to specific files or endpoints.
            * Can reveal directory structure or sensitive endpoints.
        * **Query String**
            * Starts with `?` and passes data (eg, search terms, form inputs).
            * Vulnerable to injection attacks (eg, SQLi, XSS) if not sanitized.
        * **Fragment**
            * Starts with `#` and targets a section of the page.
            * Can be used in client-side injection or tracking.
3. HTTP Messages
    - HTTP messages are the packets exchanged between a client (user) and a web server. 
    - They are the backbone of how web applications communicate.
    - **Types of HTTP Messages**
        * **HTTP Request**: 
            * Sent by the client to initiate an action (eg, login, fetch data).
            * [Example of HTTP Request](images/http_req.jpg)
        * **HTTP Response**: 
            * Sent by the server in reply to the request (e.g., success message, webpage content).
            * [Example of HTTP Response](images/htpp_response.jpg)
    - **Structure of an HTTP Message**
        * Start Line: Indicates if it's a request or response. Includes method (eg, `GET`, `POST`) or status code (eg, `200 OK`).
        * Headers: Key-value pairs with metadata (eg, `Content-Type`, `Host`, `Cookie`).
        * Empty Line: Separates headers from the body.
        * Body: Contains actual data (eg, form input, JSON response).
4. HTTP Request: Request Line and Methods
    - An HTTP request is what a user sends to a web server to interact with a web application and make something happen.
    - **HTTP Request Line Structure**
        * Method (`GET`, `POST`, `PUT`, etc): Action to perform on the resource
        * Path (`/user/login.html`): Location of the resource
        * version (`HTTP/1.1`): Protocol version used
    - **Common HTTP Methods**
        * `GET`: Retrieve data
        * `POST`: Submit or update data
        * `PUT`: Replace/update resource
        * `DELETE`: Remove resource
        * `PATCH`: Modify part of a resource
        * `HEAD`: Fetch headers only
        * `OPTIONS`: List allowed methods
        * `TRACE`: Echo request for debugging
        * `CONNECT`: Establish secure tunnel (eg, HTTPS)
    - **HTTP Versions**
        * `HTTP/0.9` (1991): Only supported `GET`
        * `HTTP/1.0` (1996): Added headers, basic caching
        * `HTTP/1.1` (1997): Persistent connections, chunked encoding
        * `HTTP/2` (2015): Multiplexing, header compression, prioritization
        * `HTTP/3` (2022): Built on QUIC, faster and more secure
5. HTTP Request: Headers and Body
    - Request Headers allow extra information to be conveyed to the web server about the request.
    - **Some common headers are as follows**:
        * Host (`tryhackme.com`): Specifies the target web server
        * User-Agent (`Mozilla/5.0`): Identifies the client/browser making the request
        * Referer (`https://www,google.com`): Shows the source URL of the request
        * Cookie (`Cookie: user_type=student; room=introtowebapplication; room_status=in_progress`): Stores session or user-specific data
        * Content-Type: Indicates the format of the request body
    - **Formats and Examples**
        * **URL Encoded** (`application/x-www-form-urlencoded`)
            * Used for simple form submissions.
            * [Example](images/url_encoded.jpg)
        * **Form Data** (`multipart/form-data`)
            * Used for file uploads and complex forms
            * [Example](images/form_data.jpg)
        * **JSON** (`(application/json)`)
            * Lightweight, widely used in APIs
            * [Example](images/json.jpg)
        * **XML** (`application/xml`)
            * Verbose, but structured and readable
            * [Example](images/xml.jpg)
6. HTTP Request: Status Line and Satus Codes
    - Every HTTP response begins with a Status Line
    - This includes:
        * HTTP Version (`HTTP/1.1`): Protocol version used
        * Status Code (`200`, `404`, `500`): Indicates result of the request
        * Reason Phrase (`OK`, `NOT FOUND`): Human-readable explanation
    - **Status Code Categories**
        * Informational (`100-199`): Request received, waiting for next step
        * Success (`200-299`): Request completed successfully
        * Redirection (`300-399`): Resource moved or needs further action
        * Client Error (`400-499`): Problem with the request (eg, bad input)
        * Server Error (`500-599`): Server failed to process the request
7. Other Important Headers
    - Some other important headers includes:
        * Set-Cookie (`Set-Cookie: sessionId=38af1337es7a8`): Stores session data on client; `HttpOnly` restricts JS access, `Secure` enforces HTTPS
        * Cache-Control (`max-age=600` or `no-cache`): Controls caching behavior
        * Location (`/index.html`): Used in redirection responses (eg, `301`, `302`)
8. HTTP Security Headers
    - Security headers are sent by the server in HTTP responses to protect web applications from common attacks like **XSS**, **clickjacking**, and **MIME sniffing**.
    - They act as browser-level defenses.
    - **Key Security Headers**
        1. **Content-Security-Policy (CSP)**
            * Mitigates **Cross-Site Scripting** (XSS) and data injection.
            * Controls which sources are allowed to load content (scripts, styles, etc.).
            * Example: `Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.tryhackme.com; style-src 'self'`
            * `default-src`: Default source (usually 'self')
            * `script-src`: Allowed script sources
            * `style-src`: Allowed CSS sources
        2. **Strict-Transport-Security (HSTS)**
            * Forces browsers to use **HTTPS only**.
            * Prevents downgrade attacks and MITM via insecure HTTP.
            * Example: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
            * `max-age`: Duration in seconds
            * `includeSubDomains`: Applies to all subdomains
            * `preload`: Requests inclusion in browser preload lists
        3.  **X-Content-Type-Options**
            * Prevents browsers from **MIME type sniffing**.
            * Ensures content is interpreted strictly as declared.
            * Example: `X-Content-Type-Options: nosniff`
        4. **Referrer-Policy**
            * Controls how much referrer info is sent when navigating between pages.
            * Helps protect user privacy and reduce data leakage.
            * Examples:
                * `Referrer-Policy: no-referrer`
                * `Referrer-Policy: same-origin`
                * `Referrer-Policy: strict-origin`
                * `Referrer-Policy: strict-origin-when-cross-origin`
            * `no-referrer`: Sends no referrer info
            * `same-origin`: Sends referrer only within same origin
            * `strict-origin`: Sends referrer only if protocol is HTTPS
            * `strict-origin-when-cross-origin`: Sends full referrer for same-origin, origin-only for cross-originS

## Learning and Reflections
- Learned web application architecture, front-end and back-end.
- Learned about URL anatomy.
- Learned about HTTP messages.
- Learned about HTTP headers and body, status line and codes, security headers.






































