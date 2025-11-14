import { notFound } from "next/navigation";
import Link from "next/link";
import PageTransition from "../../../components/PageTransition";
import { getPostData, getAllPostSlugs } from "../../../lib/posts";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  let postData;
  try {
    postData = await getPostData(slug);
  } catch {
    notFound();
  }

  return (
    <PageTransition>
      <article className="space-y-6">
        {/* ヘッダー */}
        <header className="space-y-4 pb-6 border-b border-terminal-text/20">
          <Link
            href="/blog"
            className="text-terminal-green hover:text-terminal-green/80 text-sm inline-block mb-4"
          >
            ← Back to all posts
          </Link>
          <h1 className="text-3xl font-bold text-terminal-white">
            {postData.title}
          </h1>
          <time className="text-terminal-text/60 text-sm font-mono block">
            {postData.date}
          </time>
        </header>

        {/* コンテンツ */}
        <div
          className="prose prose-base max-w-none font-mono prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base"
          dangerouslySetInnerHTML={{ __html: postData.content || "" }}
        />
      </article>
    </PageTransition>
  );
}

