**How does CSS actually work?**

- The browser loads the HTML (eg. receives it from the network).
- It converts the [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML) into a [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM) (*Document Object Model*). The DOM represents the document in the computer's memory. 
- The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images and videos ... and linked CSS! 
- The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets", e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree).
- The render tree is laid out in the structure it should appear in after the rules have been applied to it.
- The visual display of the page is shown on the screen (this stage is called painting).
- ![image-20200219185904699](C:\Users\TDD35\AppData\Roaming\Typora\typora-user-images\image-20200219185904699.png)



**How to debug CSS?**

[1.What are browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)

[2.Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)

[3.chrome调试](https://developers.google.com/web/tools/chrome-devtools/inspect-styles?utm_campaign=2016q3&utm_medium=redirect&utm_source=dcc)



Box model:

- block --霸道、默认
  - The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available.大多数时候会占据所有空间
  - The box will break onto a new line.
  - The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties are respected.
  - Padding, margin and border will cause other elements to be pushed away from the box被挤压
- inline --内敛、局限于行内
  - The box will not break onto a new line.
  - The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties will not apply.
  - Padding, margin and borders will apply but will not cause other inline boxes to move away from the box.
  - <a> element, used for links, <span>, <em> and <strong> are all examples of elements that will display inline by default.





字体大小：

- px
- em：1em 等于我们设计的当前元素的父元素上设置的字体大小
- rem：1`rem` 等于 HTML 中的根元素的字体大小， (i.e. <html>)
- 根元素默认大小为16px.可以一开始设置为10px,方便使用em和rem时的计算。 



为文本应用阴影：

- ```css
  text-shadow: 4px 4px 5px red;
  ```

  四个属性含义：

  - 阴影与原始文本的水平偏移，这个值必须指定。
  - 阴影与原始文本的垂直偏移。这个值必须指定。
  - 模糊半径 - 更高的值意味着阴影分散得更广泛。如果不包含此值，则默认为0，这意味着没有模糊。
  - 阴影的基础颜色。 如果没有指定，默认为 `black`.



文本对齐：text-align

- justify: 使文本展开，改变单词之间的差距，使所有文本行的宽度相同。你需要仔细使用，它可以看起来很可怕。特别是当应用于其中有很多长单词的段落时。如果你要使用这个，你也应该考虑一起使用别的东西，比如 [`hyphens`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/hyphens)，打破一些更长的词语。



行高：line-height

-  [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 属性设置文本每行之间的高，可以接受大多数单位 [length and size units](https://developer.mozilla.org/zh-CN/Learn/CSS/Introduction_to_CSS/Values_and_units#Length_and_size)

- 也可以设置一个无单位的值，作为乘数，通常这种是比较好的做法。无单位的值乘以 [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size) 来获得 `line-height`。建议1.5-2倍行距。



缩进text-indent:

- 一般来说，可以为所有块级元素应用 text-indent，但无法将该属性应用于行内元素，图像之类的替换元素上也无法应用 text-indent 属性.
- 如果想把一个行内元素的第一行“缩进”，可以用左内边距或外边距创造这种效果。

text-decoration:

- 用于设置文本的修饰线外观的
- [`text-decoration-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-line)，[`text-decoration-color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-color)和[`text-decoration-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration-style)三个的简写属性
- 下划线、上划线、贯穿线/删除线 或 波浪线等待

