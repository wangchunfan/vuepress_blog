// 添加引用："@vuepress/core": "^1.2.0" 后可以使用
const { fs, path } = require('@vuepress/shared-utils')

function fileNameArray(root){
	return fs.readdirSync(path.resolve(__dirname, '..' + root))
			 .map(filename =>filename.slice(0, -3))
			 .filter(filename =>filename != "README")
			 .sort((a,b)=>{
				return parseInt(a.slice(0,a.indexOf('.'))) - parseInt( b.slice(0,b.indexOf(',')))  
			 })
}


module.exports = {
  title: '我的技术成长之路',
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
		{ text: '设计模式', link:  '/designpattern/' }
		// { text: '读书笔记', link: '/note/' },
		// { text: '一些想法', link: '/idea/' }
		],
	sidebar: {
		"/algorithm/剑指offer/": [
			{
				title: "剑指offer",
				collapsable: false,
				children: fileNameArray("/algorithm/剑指offer/")
			}
		],
		"/algorithm/LeetCode/": [
			{
				title: "LeetCode",
				collapsable: false,
				children: fileNameArray("/algorithm/LeetCode/")
			}
		],
	    '/designpattern/':[
			{
				title: "创建型",
				collapsable: false,
				children: fileNameArray('/designpattern/')
			}
		]
	  }
  }
}