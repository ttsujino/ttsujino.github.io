import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const booksDirectory = path.join(process.cwd(), 'books');

export interface BookData {
  slug: string;
  title: string;
  author: string;
  status?: 'reading' | 'completed';
  startDate?: string;
  finishDate?: string;
  content?: string;
}

export function getSortedBooksData(): BookData[] {
  // booksディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(booksDirectory)) {
    return [];
  }

  // booksディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(booksDirectory);
  
  const allBooksData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      // ファイル名から.mdを削除してslugとして使用
      const slug = fileName.replace(/\.mdx?$/, '');

      // ファイルの内容を読み込む
      const fullPath = path.join(booksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // gray-matterを使用してメタデータセクションをパース
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || slug,
        author: matterResult.data.author || '',
        status: matterResult.data.status as 'reading' | 'completed' | undefined,
        startDate: matterResult.data.startDate || '',
        finishDate: matterResult.data.finishDate || '',
      };
    });

  // startDateでソート（新しい順）
  return allBooksData.sort((a, b) => {
    const dateA = a.startDate || '';
    const dateB = b.startDate || '';
    if (dateA < dateB) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBookData(slug: string): Promise<BookData> {
  const fullPath = path.join(booksDirectory, `${slug}.md`);
  let fileContents: string;
  
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8');
  } catch {
    // .mdが見つからない場合は.mdxを試す
    const mdxPath = path.join(booksDirectory, `${slug}.mdx`);
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
    author: matterResult.data.author || '',
    status: matterResult.data.status as 'reading' | 'completed' | undefined,
    startDate: matterResult.data.startDate || '',
    finishDate: matterResult.data.finishDate || '',
    content: contentHtml,
  };
}

export function getAllBookSlugs() {
  if (!fs.existsSync(booksDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(booksDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      return {
        slug: fileName.replace(/\.mdx?$/, ''),
      };
    });
}

