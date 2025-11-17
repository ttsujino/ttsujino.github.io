import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  content?: string;
}

export function getSortedPostsData(): PostData[] {
  // postsディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  // postsディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      // ファイル名から.mdを削除してslugとして使用
      const slug = fileName.replace(/\.mdx?$/, '');

      // ファイルの内容を読み込む
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // gray-matterを使用してメタデータセクションをパース
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || '',
      };
    });

  // 日付でソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  let fileContents: string;
  
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch {
    // .mdが見つからない場合は.mdxを試す
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    fileContents = fs.readFileSync(mdxPath, 'utf8');
  }

  // gray-matterを使用してメタデータセクションをパース
  const matterResult = matter(fileContents);

  // remarkを使用してMarkdownをHTMLに変換（シンタックスハイライト付き）
  const processedContent = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title || slug,
    date: matterResult.data.date || '',
    content: contentHtml,
  };
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      return {
        slug: fileName.replace(/\.mdx?$/, ''),
      };
    });
}

