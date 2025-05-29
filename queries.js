// queries.js

// === Task 2: Basic CRUD ===

// Find all books in genre "Fiction"
db.books.find({ genre: "Fiction" })

// Books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// Books by George Orwell
db.books.find({ author: "George Orwell" })

// Update price of "1984"
db.books.updateOne({ title: "1984" }, { $set: { price: 15.99 } })

// Delete book titled "Moby Dick"
db.books.deleteOne({ title: "Moby Dick" })

// === Task 3: Advanced Queries ===

// In stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection: title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort by price (ascending)
db.books.find().sort({ price: 1 })

// Sort by price (descending)
db.books.find().sort({ price: -1 })

// Pagination: page 1
db.books.find().skip(0).limit(5)

// Pagination: page 2
db.books.find().skip(5).limit(5)

// === Task 4: Aggregation Pipelines ===

// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Group books by decade
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $substr: ["$published_year", 0, 3] },
          "0s"
        ]
      }
    }
  },
  { $group: { _id: "$decade", count: { $sum: 1 } } }
])

// === Task 5: Indexing ===

// Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Use explain to see performance
db.books.find({ title: "1984" }).explain("executionStats")
