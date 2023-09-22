/*
I like to avoid using any if possible.
I find the solution - no compile error! :
Lab 13, 14 & 15
data.service.ts
*/
saveBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`/books/${book.isbn}`, book).pipe(
      tap(() => this.bookCache[book.isbn] = book)
    )
}
