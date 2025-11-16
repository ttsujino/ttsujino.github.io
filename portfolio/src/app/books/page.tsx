import Link from "next/link";
import PageTransition from "../../components/PageTransition";
import { getSortedBooksData } from "../../lib/books";

export default function BooksPage() {
  const books = getSortedBooksData();

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-terminal-white mb-8">Books</h1>

        {/* デスクトップ表示 */}
        <div className="hidden md:block space-y-0">
          {books.map((book) => (
            <article
              key={book.slug}
              className="py-3"
            >
              <Link
                href={`/books/${book.slug}`}
                className="block px-1 py-0 hover:bg-terminal-text/30 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                  <span className="text-terminal-text transition-colors truncate">
                    {book.title}
                  </span>
                  {book.status === 'reading' && (
                    <span className="px-2 py-0.5 text-xs bg-[#5a5a2a] text-[#d4d47a] rounded whitespace-nowrap">
                      reading
                    </span>
                  )}
                </div>
                  <div className="flex justify-between items-center gap-4">
                    <div className="text-terminal-text/60 text-sm">
                      by {book.author}
                    </div>
                    <div className="text-terminal-text/60 text-sm font-mono whitespace-nowrap">
                      <span className="text-terminal-text/50">Started: </span>
                      <time className="inline-block w-[80px]">{book.startDate || ''}</time>
                      <span className="mx-2"> </span>
                      <span className="text-terminal-text/50">Finished: </span>
                      <time className="inline-block w-[80px]">{book.finishDate || ''}</time>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* モバイル表示 */}
        <div className="md:hidden space-y-4">
          {books.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}`}
              className="block bg-terminal-bg hover:bg-terminal-text/10 transition-colors p-4"
            >
              <div className="space-y-2">
                {/* タイトル */}
                <div className="flex items-center gap-2">
                <h2 className="text-base font-semibold text-terminal-white">
                  {book.title}
                </h2>
                  {book.status === 'reading' && (
                    <span className="px-2 py-0.5 text-xs bg-[#5a5a2a] text-[#d4d47a] rounded whitespace-nowrap">
                      reading
                    </span>
                  )}
                </div>
                
                {/* 著者と日付 */}
                <div className="flex justify-between items-center gap-4">
                <p className="text-sm text-terminal-text/70">
                  by {book.author}
                </p>
                  <div className="text-xs text-terminal-text/60 font-mono text-right">
                  {book.startDate && (
                    <div>
                      <span className="text-terminal-text/50">Started: </span>
                      <time>{book.startDate}</time>
                    </div>
                  )}
                  <div>
                    <span className="text-terminal-text/50">Finished: </span>
                    {book.finishDate && <time>{book.finishDate}</time>}
                  </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {books.length === 0 && (
          <p className="text-terminal-text/60">No books yet.</p>
        )}
      </section>
    </PageTransition>
  );
}

