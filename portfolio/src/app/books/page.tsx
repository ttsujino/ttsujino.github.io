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
        <div className="md:hidden space-y-0">
          {books.map((book) => (
            <article
              key={book.slug}
              className="border-b border-terminal-text/10 last:border-b-0"
            >
              <Link
                href={`/books/${book.slug}`}
                className="block hover:bg-terminal-text/5 transition-colors py-4"
              >
                <div className="space-y-2">
                  {/* タイトル */}
                  <div className="flex items-start gap-2">
                    <h2 className="text-base font-semibold text-terminal-white flex-1">
                      {book.title}
                    </h2>
                    {book.status === 'reading' && (
                      <span className="px-2 py-0.5 text-xs bg-[#5a5a2a] text-[#d4d47a] rounded whitespace-nowrap">
                        reading
                      </span>
                    )}
                  </div>
                  
                  {/* 著者 */}
                  <p className="text-sm text-terminal-text/70">
                    by {book.author}
                  </p>
                  
                  {/* 日付 */}
                  <div className="flex gap-4 text-xs text-terminal-text/60 font-mono">
                    <div>
                      <span className="text-terminal-text/50">Started: </span>
                      <time>{book.startDate || '-'}</time>
                    </div>
                    <div>
                      <span className="text-terminal-text/50">Finished: </span>
                      <time>{book.finishDate || '-'}</time>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {books.length === 0 && (
          <p className="text-terminal-text/60">No books yet.</p>
        )}
      </section>
    </PageTransition>
  );
}

