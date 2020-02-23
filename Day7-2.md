静态定位static：

- 默认是static
- left\top\right\bottom对其不起作用





相对定位relative：

- 通过left\top\right\bottom修改起始位置（但好像只有top、left管用？），不能用来修改大小。





绝对定位absolute：

- 设置的元素坐在它自己的层独立于一切，不再存在于正常文档布局流中。

- 可以用来创建不干扰页面上其他元素的位置的隔离的UI功能 。例如，弹出信息框和控制菜单；翻转面板；可以在页面上的任何地方拖放的UI功能。

- margins 仍会影响定位的元素。 然而margin collapsing不会。

- left\top\right\bottom含义和前面两个不同了，指定元素应距离每个包含元素的边的距离，而不是指定元素应该移入的方向。因此也就可以利用这几个属性**调整元素的大小**了。

- 此处需要了解什么是包含元素？完全取决于元素的position属性。

  - If the `position` property is `static`, `relative`, or **`sticky`**, the containing block is formed by the edge of the ***content box*** of the nearest ancestor element that is either **a block container** (such as an inline-block, block, or list-item element) or **establishes a formatting context** (such as a table container, flex container, grid container, or the block container itself).是最近的拥有“块级结构”的祖先元素的content box。

  - If the `position` property is `absolute`, the containing block is formed by the edge of the ***padding box*** of the nearest ancestor element that has a `position` value other than `static` (`fixed`, `absolute`, `relative`, or `sticky`).最近的非static祖先元素的padding box。

  - If the `position` property is `fixed`, the containing block is established by the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport) (in the case of continuous media) or the page area (in the case of paged media).

  - 其他情况：

    If the `position` property is `absolute` or `fixed`, the containing block may also be formed by the edge of the *padding box* of the nearest ancestor element that has the following:

    1. A [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) or [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) value other than `none`
    2. A [`will-change`](https://developer.mozilla.org/en-US/docs/Web/CSS/will-change) value of `transform` or `perspective`
    3. A [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) value other than `none` or a `will-change` value of `filter` (only works on Firefox).
    4. A [`contain`](https://developer.mozilla.org/en-US/docs/Web/CSS/contain) value of `paint` (eg. `contain: paint;`)



viewport:

- fixed定位时提到的viewport，即你能看得到的文档内容，即浏览器的窗口大小，缩放浏览器viewport大小也会改变。
- window.innerWidth、window.innerHeight就是**布局视口(layout viewport)**，浏览器的框架（即地址栏、书签栏等）不被认为是 viewport 的一部分.
- 宽度和高度的媒体查询不是相对于浏览器的宽度和高度而言的，实际上是相对于视口的，即主文档（document）中的窗口（window对象），但它也是嵌套浏览上下文（如对象，iframe和SVG）中元素父级的本身的大小。



