import Link from "next/link";
import PageTransition from "../../components/PageTransition";
import { getSortedPostsData } from "../../lib/posts";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-white mb-6">All Posts</h1>

        <div className="space-y-0">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="py-3 hover:bg-terminal-text/5 transition-colors"
            >
              <div className="flex justify-between items-baseline gap-4">
                <time className="text-terminal-text/60 text-sm font-mono whitespace-nowrap">
                  {post.date}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-terminal-text hover:text-terminal-green transition-colors text-right flex-1"
                >
                  {post.title}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-terminal-text/60">No posts yet.</p>
        )}
      </section>
    </PageTransition>
  );
}

