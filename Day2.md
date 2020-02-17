**Web语义化：**

简单说来就是让机器可以读懂内容。为了让机器能够更好的理解Web上发布的各种内容，一种方法就是在发布内容的时候，就用机器可读的、被广泛认可的语义信息来描述内容，来降低机器处理 Web 内容的难度（HTML 本身就已经是朝这个方向迈出的一小步了）。这种方法就叫做**语义化**。

*语义网：让一切内容和包括对关系的描述都成为 Web 上的资源，都可以由唯一的 URI 定义，语义明确、机器可读。*

Web 语义化回归内容本身，将内容本身的语义合理地表述出来，再为不同的用户代理设计不同的样式描述，也就是我们说的内容与样式分离。这样我们在提供内容的时候，首先要做的就是将内容本身进行合理的描述，暂时不用考虑它的最终呈现会是什么样子。

HTML 规范其实一直在往语义化的方向上努力，许多元素、属性在设计的时候，就已经考虑了如何让各种用户代理甚至网络爬虫更好地理解 HTML 文档。HTML5 更是在之前规范的基础上，将所有表现层（presentational）的语义描述都进行了修改或者删除，增加了不少可以表达更丰富语义的元素。

**为什么这样的语义元素是有意义的？**因为它们被广泛认可。所谓语义本身就是对符号的一种**共识**，被认可的程度越高、**范围越广**，人们就越可以依赖它实现各种各样的功能。



**Semantic HTML：**

- 全局属性：

  - id属性--标示符 (用于引用)，不应依赖其语义处理相应元素

  - class属性--authors are encouraged to use values that describe the nature of the content

  - title 属性
    链接 - 描述目标信息
    图片 - 版权 / 描述
    引用 - 来源信息
    交互元素 - 操作指南
    ...
  - lang属性 内容的语言

- 元数据（metadata）：

  - head 元素--一组元数据
  - title 元素
    文档对外的标题
    窗口标题 / 历史记录 / 搜索结果标题 / ...
  - meta 元素
    1.name / http-equiv / charset
    2.name 属性决定种类，content 属性表示内容
    3.标准名称
      (application-name, author, description, generator, keywords)
    4.扩展名称 (WHATWG Wiki MetaExtensions)
      Baidu: mobile-agent, baiduspider
      Twitter: twitter:card, twitter:image, twitter:creator:id
      Google: application-url, google-site-verification, googlebot
      360: renderer (未注册)

- Link链接类型

  - 外部资源链接
    指向用来组成当前文档的外部资源，通常由 UA（User Agent）自动处理

  - 超链接
    用来「导航」到其他资源 (可以在 UA 中打开, 下载, ...)

  - 元素：link,a,area

    - link 元素
      元数据，用来描述文档本身与其他资源的关系
      必须包含 rel 及 href 属性
      <link rel="author license" href="/about">
      link + rel + author, link + rel + license 都有预定义的语义

      - rel="stylesheet"
        链接到样式表 (外部资源)

      - rel="alternate"
        链接到当前文档的其他形式 (超链接)

        <link rel="alternate" type="application/rss+xml" title="Matt Mullenweg " Feed" href="http://ma.tt/feed/" />

      - rel="alternate stylesheet"
        链接到可替换的样式表 (外部资源)(在firefox中支持快速切换样式表)

      - rel="prev", rel="next"
        链接到文档的前一篇 / 后一篇 / 前一页 / 后一页 (超链接)

        在生成站点目录、归档视图时很有帮助。

      - rel="icon"
        当前文档的 favicon (外部资源)

    - a元素

      存在 href 属性时为超链接
      缺少 href 属性时为链接占位符

      与 link 元素不同，a 元素代表的超链接都是显式的

      ```
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/news">News</a></li>
          <li><a>Examples</a></li>
        </ul>
      </nav>
      ```

- 区块（sections）




笔记尚未整理完：见http://justineo.github.io/slideshows/semantic-html/#/