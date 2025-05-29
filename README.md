# PLP Bookstore MongoDB Project

## Project Overview

This project demonstrates practical use of MongoDB through a bookstore dataset. It covers essential database operations including basic CRUD, advanced queries, aggregation pipelines, and indexing.

The dataset consists of book documents with detailed fields like title, author, genre, publication year, price, stock status, number of pages, and publisher.

The project is designed to showcase MongoDB's flexibility and power in managing real-world data.

---

## Project Structure

- insert_books.js  
  A Node.js script to populate the books collection with sample book documents. It ensures a clean state by dropping the collection before inserting new data.

- queries.js  
  Contains MongoDB shell queries for CRUD operations, advanced filtering, sorting, pagination, aggregation pipelines, and indexing.

- screenshots/  
  Folder containing screenshots of MongoDB Compass showing query executions and results, proving that the queries ran successfully.

- README.md  
  This documentation file describing the project, setup instructions, and usage.

---

## Setup Instructions

### Prerequisites

- MongoDB Server  
  Install MongoDB locally from https://www.mongodb.com/try/download/community or set up a free cluster on https://www.mongodb.com/cloud/atlas.

- Node.js (for running the insert script)  
  Download and install from https://nodejs.org/.

- MongoDB Compass  
  Optional GUI tool for easier database management and query testing. Download from https://www.mongodb.com/try/download/compass.

---

### Steps to Run

1. Start your MongoDB server locally or connect to your Atlas cluster.

2. Create the database and collection  
   You can do this manually in Compass or it will be created automatically when running the insert script.

3. Insert sample book data  
   Run the insert script to populate the collection:

 
4. Run queries  
Open queries.js and run the queries in MongoDB Compass Shell or your preferred Mongo shell.

5. View results  
Use MongoDB Compass to visualize documents and confirm query outputs.

---

## Features Implemented

### Task 1: MongoDB Setup
- Created a database named plp_bookstore
- Created a collection named books

### Task 2: Basic CRUD Operations
- Inserted 12 sample book documents with the specified fields.
- Queries to:
- Find books by genre
- Find books published after a certain year
- Find books by a specific author
- Update price of a specific book
- Delete a book by title

### Task 3: Advanced Queries
- Query books in stock and published after 2010
- Use projection to show only title, author, and price
- Sorting books by price (ascending and descending)
- Pagination using limit and skip (5 books per page)

### Task 4: Aggregation Pipelines
- Calculate average book price by genre
- Find the author with the most books
- Group books by publication decade and count them

### Task 5: Indexing
- Created single index on title
- Created compound index on author and published_year
- Demonstrated performance benefits using explain() method

---

## Usage Notes

- The scripts use MongoDB Node.js driver for inserting data.
- Queries in queries.js are written for use in MongoDB Compass Shell or mongosh.
- Screenshots included in the screenshots/ folder demonstrate successful query runs.

---

## Folder & File Summary

/plp_bookstore_project
│
├── insert_books.js # Script to insert sample books
├── queries.js # MongoDB queries for all tasks
├── screenshots/ # Query execution screenshots
├── README.md # This documentation file