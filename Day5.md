Box model outer display:

- block --霸道、默认
  - The box will extend in the inline direction to fill the space available in its container. In most cases this means that the box will become as wide as its container, filling up 100% of the space available.大多数时候会占据所有空间
  - The box will break onto a new line.
  - The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties are respected.这两个属性可用
  - Padding, margin and border will cause other elements to be pushed away from the box被挤压
  - Unless we decide to change the display type to inline, elements such as headings (e.g. `<h1>`) and `<p>` all use `block` as their outer display type by default.
- inline --内敛、局限于行内
  - The box will not break onto a new line.
  - The [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) and [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/height) properties will not apply.这两个属性不可用
  - Padding, margin and borders will apply but will not cause other inline boxes to move away from the box.
  - `<a>` element, used for links, `<span>`, `<em>` and `<strong>` are all examples of elements that will display inline by default.

Inner and outer display types:

- *outer* display type, which details whether the box is block or inline.
-  *inner* display type, which dictates how elements inside that box are laid out.By default, the elements inside a box are laid out in **[normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow)**, which means that they behave just like any other block and inline elements (as explained above).

