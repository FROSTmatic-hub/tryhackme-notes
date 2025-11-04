# JavaScript Essentials (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 20 min

## Objective
Learn how to use JavaScript to add interactivity to a website and understand associated vulnerabilities

## Core Concepts Covered
1. What is Javascript (JS)
    - JavaScript (JS) is a popular scripting language that allows web developers to add interactive features to websites containing HTML and CSS (styling).
    - Once the HTML elements are created, you can add interactiveness like validation, onClick actions, animations, etc, through JS.
    - Learning the language is equally important as that of HTML and CSS. The JS scripts are used primarily with HTML.
    - **Essential JavaScript Concepts** 
        1. **Variables**
            * Variables are containers for storing data values.
            * JavaScript offers three ways to declare them:
                * `var`: Older, less predictable due to hoisting
                * `let`: Preferred for mutable values
                * `const`: Used for constants, cannot be reassigned
            * Use `let` for variables that change, and `const` for fixed values.
        2. **Data Types**
            * JavaScript supports several primitive and reference types:
                * `string`: Textual data ("Hello")
                * `number`: Numeric values (42, 3)
                * `boolean`: Logical values (True, False)
                * `object`: Key-value pairs {name: "Jon"}
                * `null`: Intentional absence of value
                * `undefined`: Variable declared but not assigned
        3. **Loops in JS**
            * Loops allow you to repeat code execution based on a condition.
            * Loop types include:
                * `for`: Runs a block a fixed number of times
                * `while`: Runs while a condition is true
                * `do...while`: Runs at least once, then checks condition
            * Useful for iterating over arrays, performing batch operations, or automating repetitive tasks.
2. Key JavaScript Elements
    - **Hello World**
        * JS code: `console.log("Hello, World!");`
        * `console.log` prints output to the browser console
    - **Variables and data types**
        * JS code: `let age = 25; // Number`
        * `let`, `const`, and `var` are used to declare variables.
        * Common data types: number, `string`, `boolean`, `object`, `undefined`, `null`.
    - **Control Flow**
        * [JS code here](outputs/js_control_flow.js)
        * Conditional logic using `if`, `else`, `switch`, etc.
    - **Functions**
        * [JS code here](outputs/js_function.js)
        * Functions encapsulate reusable logic.
        * Can accept parameters and return values.
    - **Loops**
        * [JS code here](outputs/js_loop.js)
        * Efficient for iterating over arrays or executing repetitive tasks
    - **Running JavaScript in the Browser**
        * Open Chrome or any browser
        * Press `Ctrl + Shift + I` or right-click → Inspect → go to Console tab.
        * [Writing code in console tab](images/chrome_console.jpg)
        * Output: `The result is: 15`
3. Integrating JavaScript into HTML
    - **Internal JavaScript**
        * JS code is written directly inside the HTML file using `<script>` tags.
        * Suitable for beginners and small scripts.
        * Can be placed in the `<head>` or `<body>` section.
        * Must be loaded before page content if it affects rendering.
        * [Internal code example here](outputs/internal_code.html)
    - **External JavaScript**
        * JS code is written in a separate `.js` file.
        * Linked to HTML using `<script src="script.js"></script>`.
        * Keeps HTML and JS separate, better for organization and scalability.
        * [External js code here](outputs/external_code.js)
        * [External html code here](outputs/external_code.html)
4. JavaScript Dialogue Functions
    1. `alert()`
        * Displays a simple message box with an OK button.
        * Used for notifications or warnings
        * Example: `alert("HELLO");`
        * Can be abused to create multiple pop-ups and disrupt user experience.
    2. `prompt()`
        * Displays a message box asking for user input.
        * Returns:
            * The entered value if OK is clicked.
            * `null` if Cancel is clicked.
        * Example: `var name = prompt("What is your name?");`
    3. `confirm()`
        * Displays a message box with OK and Cancel buttons.
        * Returns:
            * `true` if OK is clicked.
            * `false` if Cancel is clicked.
        * Example: `var result = confirm("Are you sure?");`
    4. Abusing Dialogue Boxes
        * Repeated use of `alert()` can be weaponized to annoy or disrupt users.
        * [Example code here](outputs/abuse_alert.js).
        * This creates a loop of pop-up boxes, interrupting normal browsing.
        * Such behavior is considered malicious and can be used in browser-based attacks.
5. Bypassing Control Flow Statements
    - Control flow in JavaScript uses conditional logic (`if`, `else`) to determine program behavior.
    - These conditions can be bypassed or manipulated using user input.
    - [Example code here](outputs/control_flow.js)
    - Input from `prompt()` controls the output.
    - Can be bypassed by entering unexpected values (eg, `"18 "` or `"true"`).
6. Bypassing Login Forms
    - Some login forms use client-side JavaScript for authentication.
    - This is insecure because logic can be viewed and manipulated in the browser.
    - A login form checks:
        * Username = `"admin"`
        * Password: specific hardcoded value
    - If matched, displays: `"You are successfully authenticated!"`
    - Vulnerability:
        * Since logic is in JS, attackers can:
            * View the source code
            * Modify conditions in DevTools
            * Bypass authentication without knowing the real password
7. Minified JavaScript
    - Minification is the process of removing unnecessary characters (spaces, comments, line breaks) from code.
    - Helps in reduce file size, improve page load speed
    - Minified files are harder to read and debug, but functionally identical to the original.
8. Obfuscated JavaScript
    - Obfuscation transforms readable code into a hard-to-understand format using:
        * Non-descriptive variable names
        * Encoding techniques
        * Complex logic structures
    - Purpose:
        * Protect intellectual property
        * Prevent reverse engineering
        * Sometimes used maliciously to hide behavior
        * Browsers can still execute obfuscated code normally.
9. JavaScript Security Best Practices
    - **Avoid Relying on Client-Side Validation.**
        * JS is often used for form validation, but relying on it alone is risky.
        * Attackers can disable or manipulate JS in the browser to bypass checks.
        * Always implement server-side validation as a backup.
    - **Refrain from Adding Untrusted Libraries**
        * Third-party JS libraries can be tampered with or impersonated.
        * Always verify the source and authenticity before including them.
        * Use `rel="noopener"` in `<script>` tags to reduce risk.
    - **Avoid Hardcoded Secrets**
        * Never store sensitive data (API keys, tokens, passwords) directly in JS files
        * Example of bad practice: `const privateAPIKey = "pk_TryMeNow-1337";`
        * Users can easily view source code and extract secrets.
    - **Minify and Obfuscate Your JavaScript Code**
        * Minification reduces file size and improves performance.
        * Obfuscation makes code harder to reverse-engineer or exploit.
        * Always apply these techniques before deploying to production.

## Learning and Reflections
- Learned about JS, variables, data types and loops in JS.
- Learned integrating Javascript into HTML.
- Learned different javascript dialogue functions.
- Learned about control flow statements.
- Learned about minified javascript.
- Learned how to obfuscate javscript code.
- Learned about the best javascript security practices.















































