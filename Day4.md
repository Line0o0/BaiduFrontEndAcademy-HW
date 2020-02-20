背景background设置：

- 希望背景色从元素中的文本向外少有延伸，需要增加padding

- 所有背景属性都不能继承

- background-image

- background-repeat:no-repeat/repeat-x/repeat-y

- background-position:

  - 两个值 (top、left、center、right)，仅规定了一个关键词，那么第二个值将是"center"。默认值为top left

  - x% y% 水平位置后垂直位置，仅规定了一个值，另一个值将是 50%。默认值为0% 0%

  - xpos ypos eg. background-position: 100px 100px;

  - 也可以1、3或者1、2结合。

    eg. top 30% right 20%; top 10px right 10px;

- background-attachment:(不能完全理解)

  - `scroll` is the default value. It scrolls with the main view, but stays fixed inside the local view.
  - `fixed` stays fixed no matter what. It's kind of like a physical window: moving around the window changes your perspective, but it doesn't change where things are outside of the window.
  - `local` was invented because the default `scroll` value acts like a fixed background. It scrolls both with the main view *and* the local view. There are some [pretty cool things](http://lea.verou.me/2012/04/background-attachment-local/) you can do with it.

- background-size：

  - contain：浏览器会将图像调整为合适的大小以适合框内。在这种情况下，如果图像的长宽比与盒子的长宽比不同，则最终可能会在图像的两侧或顶部和底部出现间隙，即框可能不能铺满。
  - cover：浏览器将使图像足够大，以使其完全覆盖方框区域，同时仍保留其宽高比。在这种情况下，某些图像可能会出现在盒子外面。即分为两步，首先调整大小使得和框的大小接近，但要稍大；然后再用图片把框铺满。