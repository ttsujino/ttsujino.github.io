import PageTransition from "../../components/PageTransition";
import { getSortedNotesData } from "../../lib/notes";

export default function NotePage() {
  const notes = getSortedNotesData();

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-terminal-green mb-6">Reading List</h1>

        <div className="space-y-0">
          {notes.map((note) => (
            <article
              key={note.slug}
              className="relative"
            >
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-1 py-3 hover:bg-terminal-text/30 transition-colors peer"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-terminal-text transition-colors flex-1 truncate">
                    {note.title}
                  </span>
                  <time className="text-terminal-text/60 text-base font-mono whitespace-nowrap">
                    {note.date}
                  </time>
                </div>
              </a>
              
              {/* オーバーレイ表示 */}
              <div className="absolute left-0 right-0 top-full mt-1 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible transition-all duration-200 z-10 bg-[#1a1a1a] border border-terminal-text/20 rounded p-3 shadow-lg pointer-events-none">
                {note.excerpt && (
                  <p className="text-terminal-text/80 text-sm mb-2">
                    {note.excerpt}
                  </p>
                )}
                {note.tags && note.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-terminal-text/10 text-terminal-text/70 rounded border border-terminal-text/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {notes.length === 0 && (
          <p className="text-terminal-text/60">No notes yet.</p>
        )}
      </section>
    </PageTransition>
  );
}

