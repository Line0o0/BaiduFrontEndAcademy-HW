[TOC]



##### Inner and outer display types:

- *outer* display type, which details whether the box is block or inline.
- *inner* display type, which dictates how elements **inside that box** are laid out.By default, the elements inside a box are laid out in **[normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)**, which means that they behave just like any other block and inline elements (as explained above).





##### Box model outer display:

- block --霸道、默认
  - The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available.大多数时候会占据所有空间
  - The box will break onto a new line.会单独换一行。多个block元素都会各自起一行。
  - The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties are respected.这两个属性可用，但即使设置了宽度，还是会独占一行。
  - Padding, margin and border will cause other elements to be pushed away from the box被挤压，即padding和margin都会起效果。
  - Unless we decide to change the display type to inline, elements such as headings (e.g. `<h1>`) and `<p>` all use `block` as their outer display type by default. 以及`<div>、<form>、<table>、<pre>、<dl>、<ol>、<ul>` (补充：*pre* 元素可定义预格式化的文本。被包围在*pre* 元素中的文本通常会保留空格和换行符。)
  
- inline --内敛、局限于行内
  - The box will not break onto a new line.
  - The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties will not apply.这两个属性不可用
  - 前后不会产生换行，一系列inline元素都在一行内显示，直到该行排满。
  - Padding, margin and borders will apply but will not cause other inline boxes to move away from the box.不会把其他元素挤出box
  - 水平方向的padding-left, padding-right, margin-left, margin-right可以手动 “疏远”同一行其他元素；但竖直方向的padding-top, padding-bottom, margin-top, margin-bottom不会让你这一行变宽，也就是说你可能会和上一行或者下一行重合。As belows:
  - <img src="C:\Users\TDD35\AppData\Roaming\Typora\typora-user-images\image-20200222181146629.png" alt="image-20200222181146629" style="zoom:67%;" />
  - `<a>` element, used for links, `<span>`, `<em>` and `<strong>` are all examples of elements that will display inline by default.以及`<label>、<input>、<select>、<textarea>、<img>、<br>`
  
- inline-block:

  - 既具有block的宽度高度特性又具有inline的同行特性。

  - 可以理解为不会另起一行，同时一行里面可以放多个块元素（可以设置width、height，也避免像inline的重合情况）As belows,相比inline的优势：

  - <img src="C:\Users\TDD35\AppData\Roaming\Typora\typora-user-images\image-20200222181132314.png" alt="image-20200222181132314" style="zoom:67%;" />

  - 只有显式添加width和height属性时，它的大小才会大于其内容，不然就只是包住内容而已。

  - 后面两句话用inline，很明显这两句话不会专门另起一行。

    ![image-20200221234427531](C:\Users\TDD35\AppData\Roaming\Typora\typora-user-images\image-20200221234427531.png)

  - 下面为inline-block:
  
    ![image-20200221234654428](C:\Users\TDD35\AppData\Roaming\Typora\typora-user-images\image-20200221234654428.png)
  
    



##### The standard CSS box model:

-  give a box a `width` and a `height` attribute, this defines the width and height of the **content box**.
- Any padding and border is then added to that width and height to get the total size taken up by the box.



##### The alternative CSS box model：

- use `box-sizing: border-box; `改为alternative model，因为浏览器默认The standard model

- width和height是整个box的尺寸，而非content box

- want all of your elements to use the alternative box model,set the `box-sizing` property on the `<html>` element, then set all other elements to inherit that value. As below:

- ```css
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  ```



##### Margin:

- pushes other elements away from the box.但也有可能会挤压box的大小。
- Setting a negative margin on one side of your box can cause it to overlap other things on the page.

###### Margin collapsing:

- 两个正的margin相邻取较大值
- 两个负的margin相邻取绝对值大的（反正就是要表现最大的变化）。
- 一正一负会两者相减



##### Padding:

- No negative.必须非负。
- padding也会显示background



##### margin:0 auto居中小技巧：

- 设置对象上下间距为0，左右自动
- 如果要让DIV布局居中浏览器中，加入margin:0 auto就不能加入[float](http://www.divcss5.com/rumen/r93.shtml)浮动样式，避免逻辑错误，造成布局既要向左或者向右float，又要居中，不兼容。
- 考虑兼容需要对低版本IE比如IE6和对标准比较严格浏览器在`<body>`设置`text-align:center`。

