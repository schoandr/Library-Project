function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter = 0;
  books.forEach(book => {
    if (book.borrows.some(borrow => !borrow.returned)) {
      counter++}
  })
  return counter;
}

function getMostCommonGenres(books) {
  const genre = []
  books.forEach(book => {
    let found = genre.find((accElement => accElement.name === book.genre))
    if (!found) {
      let name = book.genre
      let count = 1
      genre.push({name, count})
    } else {
      found.count++
    }
  })
  const sorted = genre.sort((prev, curr) => prev.count > curr.count ? -1 : 1)
  return sorted.slice(0,5)
}

function getMostPopularBooks(books) {
  const mostPopular = books.map(book => {
    const count = book.borrows.length
    const name = book.title
    return {name, count}
  })
  mostPopular.sort((prev, curr) => curr.count - prev.count)
  return mostPopular.slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  const popularAuthor = books.map(book => {
    const found = authors.filter(author => author.id == book.authorId)
    const name = `${found[0].name.first} ${found[0].name.last}`
    const count = book.borrows.length
    return {name, count}
  })
  popularAuthor.sort((prev, curr) => curr.count - prev.count)
  console.log(popularAuthor)
  return popularAuthor.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
