# HTTP in Detail (TryHackMe - Pre Security)
**Platform:** TryHackMe (Pre Security path)  
**VM / Lab:** Browser modules  
**Time spent:** 30 min

## Objective
Learn about how you request content from a web server using the HTTP protocol

## Core Concepts Covered
1. What Is HTTP(S)?
    - **HTTP (HyperText Transfer Protocol)**: A protocol used to request and transmit web content like HTML, images, and videos.
    - **HTTPS (Secure HTTP)**: Adds encryption via SSL/TLS for secure communication.
2. Requests and Responses
    - The URL(Uniform Resource Locator) is a predominantly an instruction on how to access a resource on the internet.
    - It has 7 features:
        1. **Scheme**: Protocol (HTTP, HTTPS, FTP).
        2. **User**: Optional login credentials.
        3. **Host**: Domain name or IP.
        4. **Port**: Default is 80 (HTTP) or 443 (HTTPS).
        5. **Path**: Location of the resource
        6. **Query String**: Extra parameters (e.g, ?id=1).
        7. **Fragment**: Directs to a specific part of the page.
3. HTTP Methods
    - **GET**: Retrieve data.
    - **POST**: Submit data.
    - **PUT**: Update/replace data.
    - **DELETE**: Remove data.
4. HTTP Status Codes
    - **1xx**: Informational (e.g, 100 Continue)
    - **2xx**: Success (e.g, 200 OK)
    - **3xx**: Redirection (e.g, 301 Moved Permanently)
    - **4xx**: Client errors (e.g, 404 Not Found)
    - **5xx**: Server errors (e.g, 500 Internal Server Error)
5. Headers
    - Headers are additional bits of data you can send to the web server when making requests.
    - **Common Request Headers**:
        - These are headers that are sent from the client (usually your browser) to the server.
        - e.g, `User-Agent`, `Accept`, `Authorization`, etc.
    - **Common Response Headers**:
        - These are the headers that are returned to the client from the server after a request.
        - e.g, `Content-Type`, `Set-Cookie`, `Cache-Control`, etc.
6. Cookies
    - Cookies is used to store session data, user preferences, authentication tokens.
    - Set via the `Set-Cookie` header.
    - Stored on client side used for future requests.

## Learning and Reflections
- Learned about HTTP and HTPP(S).
- Learned different HTTP methods and Status codes.
- Learned how cookies are used to store data between the client and the server.
