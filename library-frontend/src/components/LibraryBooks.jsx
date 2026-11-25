import React, { useState } from 'react'
import LibraryCard from './LibraryCard'

const booksFromDb = [
  {
    code: "S1",
    name: 'Full Stack Development',
    price: 100
  },
  {
    code: "S2",
    name: 'Software Development',
    price: 190
  },
  {
    code: "S3",
    name: 'Software Engineering',
    price: 50
  }
]

function LibraryBooks() {
  const [books, setBooks] = useState(booksFromDb)


  // function captureBooks() {
  //   setBooks(booksFromDb)
  // }
  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {
          books.map(book => <LibraryCard bookInfo={book} />)
        }
      </ul>
      <div>
        <h3>The retail price for {books.length} books is {books.reduce((a, b) => a + b.price, 0)}</h3>

      </div>
    </div>

  )
}

export default LibraryBooks