## 编辑手册

> ### 目录
> - [成员信息文件](#--membersjson)
> - [新闻文件](#--newstxt)
> - [项目信息文件](#--projectsjson)

#### - [members.json](./members.json)
```json members.json
[
	{
		"_show", // 是否显示(必须), 可选值: true, false
		"avatar", // 头像(必须), 可选值: url, data+base64, none
		"name", // 姓名(必须)
		"aka", // 又名(可选)
		"role", // 身份(必须)
		"url" // 个人页面(可选)
	}
]
```

#### - [news.txt](./news.txt)
```text news.txt
<时间> <事件>
# 具体自行看文件内容
```

#### - [projects.json](./projects.json)
```json projects.json
[
	{
		"_status", // 项目状态(可选), 可选值: unknown(未知, 默认值), normal(正常), archived(停更), beta(公测)
		"_show", // 是否显示(必须), 可选值: true, false
		"title", // 项目名称/主标题(必须)
		"subTitle", // 副标题(可选)
		"info1", // 信息行1(可选)
		"info2", // 信息行2(可选)
		"repo", // 项目仓库(可选)
		"repotype", // 项目仓库类型(可选), 默认github
		"license", // 开源协议(可选)
	}
]
```
