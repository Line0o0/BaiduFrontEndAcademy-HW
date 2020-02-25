[TOC]

## 布局模型

在网页中，元素有三种布局模型：

- 流动模型（Flow） **默认的**
- 浮动模型 (Float)
- 层模型（Layer）



### 流动模型(Flow)

- **块状元素**都会在所处的**包含元素内**自上而下按顺序垂直延伸分布，因为在默认状态下，块状元素的宽度都为**100%**。实际上，块状元素都会以行的形式占据位置,但是每一个便签都显示着自己本来默认的那个宽高
- 在流动模型下，行内元素都会在所处的包含元素内从左到右水平分布显示，不会独占一行。



### 浮动模型(Float)

- 被设置了float的元素会脱离文档流。
- 其他元素会无视这个float元素，但是其他元素内的文本依然会为这个元素让出位置，环绕在周围，所以称为“部分无视”。（而absolute是脱离到新的一层，所以是“完全无视”）
- 特性：
  - 破坏性：会使父元素塌陷
  - 包裹性：普通的div如果没有设置宽度，它会撑满整个父容器，而如果给div设置了float之后，会突然变得紧凑了，其宽度会自动调整为包裹住内容宽度。（因为文字环绕图片比较好理解，但是如果想要让文字环绕一个div就只能用div来包裹文字了）
  - 清空格：因为eg.多个<img>标签会有换行，而浏览器识别换行为空格，设置为float会导致节点脱离文档流结构。（因为它都不属于文档流结构了，那么它身边的什么换行、空格就都和它没关系的，它就尽量的往一边去靠拢，能靠多近就靠多近，这就是清空格的本质）。



### 层模型(Layer)

##### 静态定位static：

- 默认是static
- left\top\right\bottom对其不起作用



##### 相对定位relative：

- 通过left\top\right\bottom修改起始位置（但好像只有top、left管用？），不能用来修改大小。
- **在使用相对定位时，就算元素被偏移了，但是他仍然占据着它没偏移前的空间。即挪出来的空间别人也不能用**



##### 绝对定位absolute：

- 设置的元素坐在它自己的层独立于一切，不再存在于正常文档布局流中。
- 可以用来创建不干扰页面上其他元素的位置的隔离的UI功能 。例如，弹出信息框和控制菜单；翻转面板；可以在页面上的任何地方拖放的UI功能。事实上除了static其他也都可以实现？？
- margins 仍会影响定位的元素。 然而margin collapsing不会。
- left\top\right\bottom含义和前面两个不同了，指定元素应距离包含元素的每条边的距离，而不是指定元素应该移入的方向。因此也就可以利用这几个属性**调整元素的大小**了。absolute的包含元素指最近的非static祖先元素的padding box



##### sticky定位：

- 基本上是相对位置和固定位置的混合体，它允许被定位的元素表现得像相对定位一样。
- 直到它滚动到某个阈值点（例如，从视口顶部起10像素）为止，此后它就变得固定，像固定定位一样了。



##### 包含元素是什么：完全取决于元素的position属性

- If the `position` property is `static`, `relative`, or **`sticky`**, the containing block is formed by the edge of the ***content box*** of the nearest ancestor element that is either **a block container** (such as an inline-block, block, or list-item element) or **establishes a formatting context** (such as a table container, flex container, grid container, or the block container itself).是最近的拥有“块级结构”的祖先元素的content box。

- If the `position` property is `absolute`, the containing block is formed by the edge of the ***padding box*** of the nearest ancestor element that has a `position` value other than `static` (`fixed`, `absolute`, `relative`, or `sticky`).最近的非static祖先元素的padding box。如果所有的父元素都没有显式地定义position属性（即都为static),那么绝对定位元素会被包含在初始块容器中（和浏览器视口一样的尺寸，并且<html>元素也被包含在这个容器里面，此时就和fixed有点像了）

- If the `position` property is `fixed`, the containing block is established by the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport) (in the case of continuous media) or the page area (in the case of paged media).

- 其他情况：

  If the `position` property is `absolute` or `fixed`, the containing block may also be formed by the edge of the *padding box* of the nearest ancestor element that has the following:

  1. A [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) or [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) value other than `none`
  2. A [`will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) value of `transform` or `perspective`
  3. A [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) value other than `none` or a `will-change` value of `filter` (only works on Firefox).
  4. A [`contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/contain) value of `paint` (eg. `contain: paint;`)



##### viewport:

- fixed定位时提到的viewport，即你能看得到的文档内容，即浏览器的窗口大小，缩放浏览器viewport大小也会改变。
- window.innerWidth、window.innerHeight就是**布局视口(layout viewport)**，浏览器的框架（即地址栏、书签栏等）不被认为是 viewport 的一部分.
- 宽度和高度的媒体查询不是相对于浏览器的宽度和高度而言的，实际上是相对于视口的，即主文档（document）中的窗口（window对象），但它也是嵌套浏览上下文（如对象，iframe和SVG）中元素父级的本身的大小。



##### Z-index：

- **只对非static有效。**如果在定位上下文中只有一个定位的元素（指其他都为static--默认值），它出现在顶部，因为定位的元素胜过未定位的元素。
- 有多个定位元素：源顺序中后定位的元素将赢得先定位的元素。
- 用z-index更改堆叠顺序，z-index无单位。
- 如果父元素z-index有效，那么子元素无论是否设置z-index都和父元素一致，会在父元素上方**（即使子元素的z-index比父元素还小也是在上方）**
- 如果父元素z-index失效（未定位或者使用默认值），那么定位子元素的z-index设置生效，这时候子元素的z-index若为负数则会被父元素覆盖（父元素z-index失效应该是默认为0）



## 对齐方式

#### 水平居中

##### 行内元素的水平居中