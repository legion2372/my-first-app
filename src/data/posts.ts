// src/data/posts.ts

export interface Post {
  id: number;      // 统一为数字
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;  // 关键：允许 image 存在
}

export const blogPosts: Post[] = [
  {
    id: 1,
    title: '我的第一篇正式博文——永不熄灭的代码',
    date: '2026-01-03',
    excerpt: '这是我用 React 搭建博客的第一步，记录了从零到一的完整过程。',
    category: '学习',
    image: '/images/test.jpg', 
    content: `内容内容内容...`
  },
  {
    id: 2,
    title: 'AMZ 运营实践',
    date: '2024-01-04',
    excerpt: '学习组件化开发的思维，让网页像搭积木一样简单。',
    category: '技术',
    content: `内容内容内容...`
  },
  {
    id: 3,
    title: '关于外贸 SOHO 实践',
    date: '2026-01-04',
    excerpt: '记录外贸创业初期的思考，如何利用数字化工具提升效率。',
    category: '技术',
    content: `内容内容内容...`
  },
  {
    id: 4, 
    title: 'Markdown 语法进阶指南',
    date: '2026-01-04',
    excerpt: '掌握 Markdown，让你的文章排版瞬间达到出版级水准。',
    category: '学习',
    content: `内容内容内容...`
  },
  {
    id: 5,
    title: '关于 search 框和 GitHub 的基础使用',
    date: '2026-01-06',
    excerpt: '记录学习搭建自己博客的思考，如何使用 git 来 push 上传来高效完成代码上线。',
    category: '学习',
    content: `内容内容内容...`
  }
];