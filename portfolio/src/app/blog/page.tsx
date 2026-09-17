import Link from "next/link";
import PageTransition from "../../components/PageTransition";
import { getSortedPostsData } from "../../lib/posts";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-black mb-6">All Posts</h1>

        <div className="space-y-0">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="py-3"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 px-1 py-0"
              >
                <span className="text-black flex-1 truncate">
                  {post.title}
                </span>
                <time className="text-black text-base font-mono whitespace-nowrap">
                  {post.date}
                </time>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-black">No posts yet.</p>
        )}
      </section>
    </PageTransition>
  );
}

