背景background设置：

- 希望背景色从元素中的文本向外少有延伸，需要增加padding

- 所有背景属性都不能继承，但由于默认是透明的，所以不进行任何设置的话是可以看到父元素的背景的。

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
  - 或者两个值 第一个值指定图片宽度，第二个值指定高度



border边框设置：

- border-style

  - 边框绘制在“元素的背景之上”。因为有些边框是“间断的”（例如，点线边框或虚线框），元素的背景应当出现在边框的可见部分之间。元素的背景是内容、内边距和边框区的背景。

  - border-style:首先要设置这一项，边框才会显示。

  - | none    | 定义无边框。                                                 |
    | ------- | ------------------------------------------------------------ |
    | hidden  | 与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。 |
    | dotted  | 定义点状边框。在大多数浏览器中呈现为实线。                   |
    | dashed  | 定义虚线。在大多数浏览器中呈现为实线。                       |
    | solid   | 定义实线。                                                   |
    | double  | 定义双线。双线的宽度等于 border-width 的值。                 |
    | groove  | 定义 3D 凹槽边框。其效果取决于 border-color 的值。           |
    | ridge   | 定义 3D 垄状边框。其效果取决于 border-color 的值。           |
    | inset   | 定义 3D inset 边框。其效果取决于 border-color 的值。         |
    | outset  | 定义 3D outset 边框。其效果取决于 border-color 的值。        |
    | inherit | 规定应该从父元素继承边框样式。                               |

  - 单边属性：border-left-style

  - ```
    p {border-style: solid solid solid none;}
    p {border-style: solid; border-left-style: none;}
    ```

  ​    两种方式等价。必须把单边属性放在简写属性之后。

- border-width

  - 由于 border-style 的默认值是 none，如果没有声明样式，就相当于 border-style: none。**因此，如果您希望边框出现，就必须声明一个边框样式。**
  - 同样有单边属性：border-top-width等

- border-color 也有单边属性

  - transparent用于创建有宽度的不可见边框
  - 比如一个链接在没有hover的时候使其透明隐藏边框，在hover的时候显示改color为非透明来显示边框。
  - 实现某个半透明色：eg.白色半透明 rgba(255,255,255,0.5);

- border-radius 边框圆角



CSS列表：

- line-style-type:none;列表每一项的小标号样式
  - 罗马计数：lower-roman、upper-roman
  - 字母：lower-alpha、upper-alpha



链接样式：

- 四种状态

  - 未访问过的 (Unvisited) 的链接是蓝色的。
  - 访问过的 (Visited) 的链接是紫色的.
  - 悬停 (Hover) 在一个链接的时候鼠标的光标会变成一个小手的图标。
  - 选中 (Focus) 链接的时候，链接周围会有一个轮廓，你应该可以按 tab 来选中这个页面的链接 
  - 激活 (Active) 链接的时候会变成红色 (当你点击链接时，请尝试按住鼠标按钮。)

- 使用以下CSS属性关闭/更改默认样式：

  - [`color`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color) 文字的颜色
  - [`cursor`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor) 鼠标光标的样式，你不应该把这个关掉，除非你有非常好的理由。
  - [`outline`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline) 文字的轮廓 (轮廓有点像边框，唯一的区别是边框占用了盒模型的空间，而轮廓没有； 它只是设置在背景图片的顶部)。outline 是一个有用的辅助功能，所以在把它关掉之前考虑清楚；你至少应该将悬停 (hover) 状态的样式同时应用到选中 (focus) 状态上。

- 空规则集：

  ```css
  a {
  
  }
  
  a:link {
  
  //设置未访问时的样式
  
  }
  
  a:visited {
  
  }
  
  a:focus {
  
  }
  
  a:hover {
  
  }
  
  a:active {
  
  }
  ```

- 顺序是重要的，因为链接的样式是建立在另一个样式之上的，比如第一个规则的样式会应用到所有后续的样式，如果当一个链接被激活 (activated) 的时候，它也是处于悬停 (hover) 状态的。可以尝试这样帮助记忆：

  **L**o**V**e **F**ears **HA**te.



在链接中包含图标：

```html
<p>For more information on the weather, visit our <a href="weather.html">weather page</a>,
look at <a href="https://en.wikipedia.org/wiki/Weather">weather on Wikipedia</a>, or check
out <a href="http://www.extremescience.com/weather.htm">weather on Extreme Science</a>.</p>
```

```css
a[href*="http"] {
  background: url('pictures/external-link.png') no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

- 指定位置是 100% (background-position中的第一个参数：水平位置，另一个垂直位置没写默认是50%)使其出现在内容的右边，然后距离上方是 0 px
- 在链接上设置 padding-right ，为背景图片留出空间，所以我们不会和文本重叠。
- 如何只选中了外部链接的？如果正确写了 [HTML links](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) ，就应该只会在外部链接上使用绝对 URL，如果链接是链接你的站点的其他部分，那么使用相对链接是更加高效的。因此 "http" 文本应该只出现在外部链接上。
- 所以我们可以使用一个属性选择器 [attribute selector](https://developer.mozilla.org/zh-CN/Learn/CSS/Introduction_to_CSS/Selectors#Attribute_selectors): `a[href*="http"]` 选中 `a` 元素，但是只会选中那些拥有 `href` 属性，且属性的值包含 "http" 的`a`的元素。



样式化链接为按钮（网站的导航条等）

```html
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Pizza</a></li>
    <li><a href="#">Music</a></li>
    <li><a href="#">Wombats</a></li>
    <li><a href="#">Finland</a></li>
</ul>
```

```css
body,html {
  margin: 0;//不知道是不是必要？
  font-family: sans-serif;
}

ul {
  padding: 0;//删除了 <ul> 元素的默认的 padding
  width: 100%;//设置了它的宽度是外部容器  <body> (在这次条件下) 的 100% 。
}

li {
  display: inline;//<li> 元素通常默认是块元素，意味着它们各自会占用一行。inline会导致列表中的每项内容都会一起出现在同一行，它们现在表现得就像内联元素。
}

a {
  outline: none;
  text-decoration: none;
  display: inline-block;
   //设置 display 为 inline-block ，<a> 元素默认为内联元素
   //而且我们不希望它们像值为 block 时一样，线条超出自己的内容
   //我们确实想要控制它们的大小inline-block 允许我们这样做。
  width: 19.5%;
  margin-right: 0.625%;
   //width 为 19.5%，然后 margin-right 为 0.625%. 
   //你会注意到所有宽度加起来是 100.625%, 这样会让最后一个按钮溢出 <ul> 
  text-align: center;
  line-height: 3;// line-height 为 3，让按钮有一些高度 (这也具有垂直居中文本的优点)
    //注意行高其实也是赋予“行”这个元素高度，所以可以用这个属性调整按钮高度。
  color: black;
}

li:last-child a {
  margin-right: 0;//最后一个 <a>元素，然后删除了它的间距 (margin)，使其恢复到100%，故不会到下一行了
}

a:link, a:visited, a:focus {
  background: yellow;
}

a:hover {     
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```