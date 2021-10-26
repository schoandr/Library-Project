function findAccountById(accounts, id) {
  return accounts.find(account => account.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((prev, curr) => prev.name.last.toLowerCase() > curr.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    acc += book.borrows.filter(borrow => account.id == borrow.id).length
    return acc;
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const id = account.id;
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      let firstLast = {};
      authors.forEach(author => {
        if (author.id == book.authorId) {
          firstLast = author
        }
      })
      if ((borrow.id == id) && !borrow.returned) {
          book.author = firstLast;
          result.push(book);
      }
    })
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
