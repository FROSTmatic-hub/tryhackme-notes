# SQL Fundamentals (TryHackMe - Cyber Security 101)
**Platform:** TryHackMe (Cyber Security 101 path)  
**VM / Lab:** Browser modules  
**Time spent:** 10 min

## Objective
Learn how to perform basic SQL queries to retrieve and manage data in a database.

## Core Concepts Covered
1. Databases 101
    - **What is a Database?**
        * A structured system for storing, managing, and retrieving data.
        * Used in apps like online stores, social media, ride-sharing platforms, etc.
        * Enables efficient data handling and scalability.
    - **Types of Databases**
        1. **Relational Databases**
            * Store data in tables with rows and columns.
            * Use SQL for querying.
            * Example: MySQL, PostgreSQL.
        2. **Non-relational Databases**
            * Store data in flexible formats:
                * Key-value
                * Document (eg, JSON)
                * Graph
                * Wide-column
            * Example: MongoDB, Redis.
        3. **Table-based Databases**
            * Simplified relational structure.
            * Often used for lightweight or embedded systems.
    - **Tables, Rows, and Columns**
        * Tables organize data into structured formats.
        * Rows represent individual records.
        * Columns represent fields or attributes.
        * [Example of table, rows, columns](images/table_rows_col.jpg)
    - **Primary Key vs Foreign Key**
        1. **Primary Key**
            * Uniquely identifies each record in a table.
            * Must be unique and not null.
            * Example: `id` in Authors table.
        2. **Foreign Key**
            * Creates a relationship between tables.
            * Refers to a primary key in another table.
            * Example: `Author_id` in Books table links to `id` in Authors table.
            * [Example of primary and foreign key](images/primary_fore_keys.jpg)
2. SQL (Structured Query Language)
    - **What is SQL?**
        * SQL is a programming language used to manage and query data in relational databases.
        * It allows users to:
            * Store
            * Retrieve
            * Update
            * Delete and manage data
        * SQL operates through a Database Management System (DBMS).
        * Common DBMS examples:
            * MYSQL
            * Oracle Database
            * MariaDB
    - **Benefits of SQL and Relational Databases**
        * SQL syntax is close to plain English.
        * Beginner-friendly for querying and managing data.
        * Enforces strict rules and data integrity.
        * Ensures high accuracy and consistency.
        * Supports complex queries, joins, filtering, and data manipulation.
        * Scales well with structured data.
3. Basic SQL Commands
    - **Creating databases**
        * Use the command: `CREATE DATABASE <database_name>;`
        * Example: `CREATE DATABASE my_first_db;`
    - **Showing created database**
        * Use the command: `SHOW DATABASES`
        * Includes system databases like `information_schema`
    - **Selecting a databases**
        * Use the command: `USE`
        * Selects a specific database to work with
        * Example: `USE my_first_db;`
    - **Table Management**
        * **Creating a table**
            * [Use this command to create a table](outputs/create_table.sql)
            * Defines a new table with specified columns and data types
        * **List created tables**
            * Use the command: `SHOW TABLES`
            * Lists all tables in the selected database
        * **Describing a table**
            * Use the command: `DESCRIBE` or `DESC`
            * Displays column details of a table
        * **Modifying a table**
            * Use the command: `ALTER TABLE`
            * Modifies an existing table
            * Can add, remove, or change columns
            * Example: `ALTER TABLE book_inventory ADD price DECIMAL(4,2);`
        * **Deleting a table**
            * Use the command: `DROP TABLE table_name;`
            * To delete an exisitng table
4. CRUD Operations
    - CRUD stands for:
        * **Create**: Add new records
        * **Read**: Retrieve existing records
        * **Update**: Modify existing records
        * **Delete**: Remove records
    - **SQL Commands for CRUD**
        * **Create**
            * Use the command: `INSERT`
            * Adds a new row to a table
            * [Example of INSERT command](outputs/insert_cmd.sql)
            * **Read**
                * Use the command: `SELECT`
                * Retrieves data from a table.
                * Example (all columns): `SELECT * FROM books;`
                * Example (specific columns): `SELECT name, description FROM books;`
            * **Update**
                * Use the command: `UPDATE`
                * Modifies data in existing rows
                * [Example of UPDATE command](outputs/update_cmd.sql)
            * **Delete**
                * Use the command: `DELETE`
                * Removes rows from a table
                * Example: `DELETE FROM books WHERE id = 1;`
5. SQL Clauses
    - **SELECT Clause**
        * Retrieves data from one or more columns in a table
        * Example: `SELECT name, description FROM books;`
    - **DISTINCT Clause**
        * Removes duplicate values from the result set
        * Useful when you want unique entries
        * Example: `SELECT DISTINCT name FROM books;`
    - **GROUP BY Clause**
        * Groups rows that have the same values in specified columns
        * Often used with aggregate functions like `COUNT()`, `SUM()`, etc
        * Example: `SELECT name, COUNT(*) FROM books GROUP BY name;`
    - **ORDER BY Clause**
        * Sorts query results in ascending (ASC) or descending (DESC) order
        * Can be applied to any column
        * Example (ascending): `SELECT name, published_date FROM books ORDER BY published_date ASC;`
        * Example (descending): `SELECT * FROM books ORDER BY published_date DESC;`
    - **HAVING Clause**
        * Filters grouped results (used with `GROUP BY`)
        * Works like `WHERE`, but for aggregate/grouped data
        * Example: `SELECT name, COUNT(*) FROM books GROUP BY name HAVING name LIKE '%hack%';`
6. SQL Logical Operator
    - **LIKE**
        * Searches for a pattern in a column
        * Example: `WHERE description LIKE "%guide%"`
        * Returns rows where the description contains "guide"
    - **AND**
        * Combines multiple conditions, all must be true
        * Example: `WHERE category = "Offensive Security" AND name = "Bug Bounty Bootcamp"`
    - **OR**
        * Combines conditions, at least one must be true
        * Example: `WHERE name LIKE "%Android%" OR name LIKE "%iOS%"`
    - **NOT**
        * Reverses the condition; excludes matches
        * Example: `WHERE NOT description LIKE "%guide%"`
7. SQL Comparison Operators
    - **BETWEEN**
        * Checks if a value falls within a range
        * Example: `WHERE id BETWEEN 2 AND 4`
    - **Equal To (=)**
        * Matches exact value
        * Example: `WHERE name = "Designing Secure Software"`
    - **Not Equal To (!=)**
        * Filters out specific values
        * Example: `WHERE category != "Offensive Security"`
    - **Less Than (<)**
        * Filters values less than a given threshold
        * Example: `WHERE published_date < "2020-01-01"`
    - **Greater Than (>)**
        * Filters values greater than a given threshold
        * Example: `WHERE published_date > "2021-11-02"`
8. SQL String Functions
    - **CONCAT()**
        * Combines multiple strings into one
        * Example: `SELECT CONCAT(name, ' is a type of ', category, ' book.') AS book_info FROM books;`
    - **GROUP_CONCAT()**
        * Joins values from multiple rows into a single string
        * Example: `SELECT category, GROUP_CONCAT(name SEPARATOR ', ') AS books FROM books GROUP BY category;`
    - **SUBSTRING()**
        * Extracts part of a string starting from a specific position
        * Example: `SELECT SUBSTRING(published_date, 1, 4) AS published_year FROM books;`
    - **LENGTH()**
        * Returns the number of characters in a string
        * Example: `SELECT LENGTH(name) AS name_length FROM books;`
9. SQL Aggregate Functions
    - **COUNT()**
        * Returns the number of rows
        * Example: `SELECT COUNT(*) AS total_books FROM books;`
    - **SUM()**
        * Adds up numeric values in a column
        * Example: `SELECT SUM(price) AS total_price FROM books;`
    - **MAX()**
        * Finds the highest value in a column
        * Example: `SELECT MAX(published_date) AS latest_book FROM books;`
    - **MIN()**
        * Finds the lowest value in a column
        * Example: `SELECT MIN(published_date) AS earliest_book FROM books;`

## Learning and Reflections
- Learned about databases, types of databases, primary and foreign key.
- Learned about SQL and its benefits.
- Learned basic SQL commands.
- Learned about the CRUD operations.
- Learned about SQL clauses.
- Learned about SQL logical and comparision operators.
- Learned about SQL string and aggregate functions.








































