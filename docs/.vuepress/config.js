module.exports = {
  title: '言凡',
  description: '个人博客，欢迎参观',
  base: "/",
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] },
  },
  themeConfig: {
	lang: "简体中文",
	repo: 'wangchunfan/vuepress_blog',
	docsDir: "docs",
	editLinks: true,
    nav: [
      { text: '算法与数据结构', 
		items: [
		  { text: 'LeetCode', link: '/algorithm/LeetCode/' },
		  { text: '剑指offer', link: '/algorithm/剑指offer/' }
		]
	  },
      { text: '读书笔记', link: '/note/' },
      { text: '一些想法', link: '/idea/' }
    ],
	sidebarDepth: 2,
	sidebar: {
	  "/algorithm/LeetCode/": [
			"",
			"21.合并两个有序链表"
	  ],
	  "/algorithm/剑指offer/": [
		""
	  ],
	  "/note/": [
		""
	  ],
	  "/idea/": [
		""
	  ]
	}
  }
}