import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const notesDirectory = path.join(process.cwd(), 'notes');

export interface NoteData {
  slug: string;
  title: string;
  url: string;
  date: string;
  excerpt: string;
  author?: string;
}

export function getSortedNotesData(): NoteData[] {
  // notesディレクトリが存在しない場合は空配列を返す
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  // notesディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(notesDirectory);
  
  const allNotesData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      // ファイル名から.mdを削除してslugとして使用
      const slug = fileName.replace(/\.mdx?$/, '');

      // ファイルの内容を読み込む
      const fullPath = path.join(notesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // gray-matterを使用してメタデータセクションをパース
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || slug,
        url: matterResult.data.url || '',
        date: matterResult.data.date || '',
        excerpt: matterResult.data.excerpt || '',
        author: matterResult.data.author,
      };
    });

  // 日付でソート（新しい順）
  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

