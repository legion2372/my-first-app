// src/data/posts.ts

export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}

export const blogPosts: Post[] = [
  {
    id: '1',
    title: '我的第一篇正式博文——永不熄灭的代码',
    date: '2026-01-03',
    excerpt: '这是我用 React 搭建博客的第一步，记录了从零到一的完整过程。',
    category: '学习',
    content: `
### 🚀 开启 React 之旅
今天我成功把网站部署到了 **Vercel**。虽然中间遇到了 404 和 Token 错误，但在 Gemini 的帮助下都解决了！

#### 核心收获：
* **组件化思维**：理解了如何拆分布局。
* **自动化部署**：感受到了持续集成的威力。

> 编程最快乐的时刻，莫过于看到本地代码在公网上线的那一秒。
`
  },
  {
    id: '2',
    title: 'AMZ 运营实践',
    date: '2024-01-04',
    excerpt: '学习组件化开发的思维，让网页像搭积木一样简单。',
    category: '技术',
    content: `
### 运营与技术的交汇
React 的核心是组件。通过这次练习，我理解了路由（Router）是如何在不刷新页面的情况下切换内容的。

\`\`\`javascript
// 示例代码：简单的路由跳转
<Link to="/post/2">查看详情</Link>
\`\`\`

这种“搭积木”的感觉让开发变得非常高效。
`
  },
  {
    id: '3',
    title: '关于外贸 SOHO 实践',
    date: '2026-01-04',
    excerpt: '记录外贸创业初期的思考，如何利用数字化工具提升效率。',
    category: '技术',
    content: `
### SOHO 创业思考
在外贸 SOHO 的过程中，拥有一个自己的技术博客是非常重要的展示窗口。

#### 为什么选择自己搭建？
1. **完全掌控**：没有平台的限制。
2. **技术沉淀**：在搭建过程中学习前端技术。
3. **品牌效应**：给客户留下专业的印象。
`
  },
  {
    id: '4', // 修改了重复的 ID
    title: 'Markdown 语法进阶指南',
    date: '2026-01-04',
    excerpt: '掌握 Markdown，让你的文章排版瞬间达到出版级水准。',
    category: '学习',
    content: `
### 为什么使用 Markdown？
Markdown 是一种轻量级标记语言，它允许我们专注于内容而非排版。

#### 常用语法测试：
- **粗体** 与 *斜体*
- [点击访问我的博客](https://vercel.com)
- 代码块高亮显示

\`\`\`typescript
const blogName = "Raymond.Plog";
console.log(\`欢迎来到 \${blogName}\`);
\`\`\`
`
  },
   {
    id: '5',
    title: '关于search 框和git hub的基础使用',
    date: '2026-01-06',
    excerpt: '记录学习搭建自己博客的思考，如何使用git来push上传来高效完成代码上线。',
    category: '学习',
    content: `
### git思考
。
`
  }
];