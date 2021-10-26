function findAuthorById(authors, id) {
  return authors.find(author => author.id == id);
}

function findBookById(books, id) {
  return books.find(book => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  const result = []
  const returned = []
  const checkedOut = []
  books.forEach(book => {
    book.borrows.some(borrow => !borrow.returned) ? returned.push(book) : checkedOut.push(book)
  })
  result.push(returned, checkedOut)
  return result
}

function getBorrowersForBook(book, accounts) {
  const result = []
  book.borrows.forEach(borrow => {
    accounts.forEach(account => account.returned = borrow.returned)
    result.push(accounts.find(account => account.id == borrow.id))
  })
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
