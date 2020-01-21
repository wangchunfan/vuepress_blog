// 添加引用："@vuepress/core": "^1.2.0" 后可以使用
// const { fs, path } = require('@vuepress/shared-utils')

// function fileNameArray(root){
// 	return fs.readdirSync(path.resolve(__dirname, '..' + root))
// 	.map(filename =>filename.slice(0, -3))
// }

// const OFFER = fileNameArray("/algorithm/剑指offer/")
// const LeetCode = fileNameArray("/algorithm/LeetCode/")

// 剑指offer
const OFFER = [
	"5. 从尾到头打印链表",
	"6. 重建二叉树",
	"7. 用两个栈实现队列",
	"8. 旋转数组的最小数字",
	"9. 斐波那契数列",
	"10. 二进制中1的个数",
	"11. 数值的整数次方",
	"12. 打印1到最大的n位数",
	"13. 在O1时间删除链表结点",
	"14. 调整数组顺序使奇数位于偶数前面",
	"15. 链表中倒数第k个结点",
	"16. 反转链表",
	"17. 合并两个排序的链表",
	"18. 树的子结构",
	"19. 二叉树的镜像",
	"20. 顺时针打印矩阵",
	"21. 包含min函数的栈",
	"22. 栈的压入、弹出序列",
	"23. 从上往下打印二叉树",
	"24. 二叉搜索树的后序遍历序列",
	"25. 二叉树中和为某一值的路径",
	"26. 复杂链表的复制",
	"27. 二叉搜索树与双向链表",
	"28. 字符串的排列",
	"29. 数组中出现次数超过一半的数字",
	"30. 最小的k个数",
	"31. 连续子数组的最大和",
	"32. 从1到n整数中1出现的次数",
	"33. 把数组排成最小的数",
	"34. 丑数",
	"35. 第一个只出现一次的字符",
	"36. 数组中的逆序对",
	"37. 两个链表的第一个公共结点",
	"38. 数字在排序数组中出现的次数",
	"39. 二叉树的深度",
	"40. 数组中只出现一次的数字",
	"41. 和为s的两个数字VS和为s的连续正数序列",
	"42. 翻转单词顺序VS左旋转字符串",
	"44. 扑克牌的顺子"
]
// LeetCode
const LeetCode = [
	"21. 合并两个有序链表",
	"28. 实现strStr()",
	"38. 报数",
	"58. 最后一个单词的长度",
	"67. 二进制求和",
	"74. 搜索二维矩阵",
	"88. 合并两个有序数组"
]

module.exports = {
  title: '言凡',
  description: '个人博客，欢迎参观',
  base: "/",
  port: "8000",
  markdown: {
    lineNumbers: true,
	toc: { includeLevel: [1, 2, 3] },
	config: md => {
		md.set({ html: true });
		md.use(require("markdown-it-katex"));
	  }
  },
  theme: 'reco',
  themeConfig: {
	// 评论功能
	vssueConfig: {
		platform: 'github-v4',
		owner: 'wangchunfan',
		repo: 'vuepress_blog',
		clientId: '6c70004f9186377c59d3',
		clientSecret: '91d2cc57032ef5b68c024a11c3061e4d334a4e7a',
	},
	//logo: '/logo.png',
	lang: "简体中文",
	// github 连接
	repo: 'wangchunfan/',
	// 在 GitHub 上编辑此页
	editLinks: true,
	editLinkText: "在 GitHub 上编辑此页",
	// 文档仓库和项目本身不在一个仓库
	docsRepo: 'wangchunfan/vuepress_blog',
	// 假如文档不是放在仓库的根目录下
	docsDir: 'docs',
	// 备案信息和项目开始时间
	// 备案
    record: '京ICP备20002380号-1',
    recordLink: 'http://beian.miit.gov.cn',
    // cyberSecurityRecord: '公安部备案文案',
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2019',
	// 侧边栏深度
	sidebarDepth: 2,
	// 导航栏连接
	nav: [
		{ 
			text: '算法与数据结构', 
			items: [
			{ text: '剑指offer', link: '/algorithm/剑指offer/' },
			{ text: 'LeetCode', link:  '/algorithm/LeetCode/' }
			]
		},
		// { text: '读书笔记', link: '/note/' },
		// { text: '一些想法', link: '/idea/' }
		],
	sidebar: {
		"/algorithm/剑指offer/": [
			{
				title: "剑指offer",
				collapsable: false,
				children: OFFER
			}
		],
		"/algorithm/LeetCode/": [
			{
				title: "LeetCode",
				collapsable: false,
				children: LeetCode
			}
	  	]
	  }
  }
}