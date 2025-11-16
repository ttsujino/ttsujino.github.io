import { notFound } from "next/navigation";
import Link from "next/link";
import PageTransition from "../../../components/PageTransition";
import { getBookData, getAllBookSlugs } from "../../../lib/books";

export async function generateStaticParams() {
  const books = getAllBookSlugs();
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export default async function BookDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let bookData;
  try {
    bookData = await getBookData(slug);
  } catch {
    notFound();
  }

  const getCategoryStyle = (category?: string) => {
    switch (category) {
      case 'soft skill':
        return 'bg-blue-900/30 text-blue-300 border border-blue-700/50';
      case 'hard skill':
        return 'bg-green-900/30 text-green-300 border border-green-700/50';
      case 'others':
        return 'bg-gray-700/30 text-gray-300 border border-gray-600/50';
      default:
        return 'bg-gray-700/30 text-gray-300 border border-gray-600/50';
    }
  };

  return (
    <PageTransition>
      <article className="space-y-6">
        {/* ヘッダー */}
        <header className="space-y-4 pb-6 border-b border-terminal-text/20">
          <Link
            href="/books"
            className="text-terminal-green hover:text-terminal-green/80 text-sm inline-block mb-4"
          >
            ← Back to all books
          </Link>
          <h1 className="text-3xl font-bold text-terminal-white">
            {bookData.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-terminal-text/80">
            <span>by {bookData.author}</span>
            {bookData.status === 'reading' && (
              <>
                <span>•</span>
                <span className="px-2 py-0.5 text-xs bg-[#5a5a2a] text-[#d4d47a] rounded">
                  reading
                </span>
              </>
            )}
          </div>
          {bookData.category && (
            <div className="text-sm text-terminal-text/80">
              <span className="text-terminal-text/50">category: </span>
              <span className={`px-2 py-0.5 text-xs rounded ${getCategoryStyle(bookData.category)}`}>
                {bookData.category}
              </span>
            </div>
          )}
          {(bookData.startDate || bookData.finishDate) && (
            <div className="text-sm text-terminal-text/70 space-y-1">
              {bookData.startDate && (
                <div>
                  <span className="text-terminal-text/50">Started: </span>
                  <time className="font-mono">{bookData.startDate}</time>
                </div>
              )}
              {bookData.finishDate && (
                <div>
                  <span className="text-terminal-text/50">Finished: </span>
                  <time className="font-mono">{bookData.finishDate}</time>
                </div>
              )}
            </div>
          )}
        </header>

        {/* コンテンツ */}
        <div
          className="prose prose-sm max-w-none font-mono prose-headings:font-bold prose-h1:text-2xl prose-h2:text-lg prose-h3:text-base prose-h4:text-sm"
          dangerouslySetInnerHTML={{ __html: bookData.content || "" }}
        />
      </article>
    </PageTransition>
  );
}

