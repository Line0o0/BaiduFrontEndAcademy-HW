[TOC]



### Flex

- 设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

- Webkit 内核的浏览器，必须加上-webkit前缀。

  ```css
  .box{
    display: -webkit-flex; /* Safari */
    display: flex;
  }
  ```

  

#### 基本概念

- 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。
- 它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
- 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。
  - 主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；主轴方向默认为row(自左向右)。
  - 交叉轴的开始位置叫做cross start，结束位置叫做cross end。交叉轴默认为column（自上向下）。
- 项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。



#### 容器的属性

##### flex-direction：决定主轴的方向（即项目的排列方向）

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。



##### flex-wrap：如果一条轴线排不下，如何换行。

- `nowrap`（默认）：不换行。
- `wrap`：换行，第一行在上方。![image-20200224113329672](C:\Users\TDD35\AppData\Roaming\Typora\typora-user-images\image-20200224113329672.png)
- `wrap-reverse`：换行，第一行在下方。![image-20200224113316055](C:\Users\TDD35\AppData\Roaming\Typora\typora-user-images\image-20200224113316055.png)



##### flex-flow：`flex-direction`和`flex-wrap`简写

- 默认值为`row nowrap`。



##### justify-content：项目在主轴上的对齐方式

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png" alt="img" style="zoom: 50%;" />

- 默认值是 flex-start
- space-around每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。



##### align-items：项目在交叉轴上如何对齐

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

<img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png" alt="img" style="zoom:50%;" />

其中：

- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。（即设置了高度就不会默认stretch)
- 在stretch时，如果父容器在交叉轴方向上没有固定宽度（即高度），则所有 flex 项将变得与最长的 flex 项一样长（即高度保持一致）。

##### align-content:多根轴线的对齐方式

- 如果项目只有一根轴线，该属性不起作用。

- ```css
  .box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch(默认值);
  }
  ```

  <img src="http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="img" style="zoom:50%;" />

- 和align-items相似，align-items是项目在交叉轴方向的对齐，align-content是主轴的内容(content)在交叉轴方向的对齐。
- 和align-items相同，stretch是默认值。



#### 项目的属性：

##### order:定义项目的排列顺序

- 数值越小，排列越靠前，默认为0。 

- ```css
  .item {
    order: 1;
  }
  ```



##### flex-grow:定义项目的放大比例

- 默认为`0`，即如果存在剩余空间，也不放大



##### flex-shrink:定义了项目的缩小比例

- 默认为1，即如果空间不足，该项目将缩小。
- 注意负值对该属性无效。



##### flex-basis：

- 定义了在分配多余空间之前，项目占据的主轴空间（main size，是包括了项目的margin和padding的），表示item至少的宽度。
- 浏览器满足各个项目的flex-basis之后再计算主轴是否有剩余空间。
- 默认值为auto，即项目的本来大小。



##### flex: flex-grow, flex-shrink 和 flex-basis的简写

- ```css
  article {
    flex: 1 200px;//flex-grow和flex-basis
  }
  ```

- 默认值为`0 1 auto`不放大要缩小basis按原来宽度。
- 两个快捷值：`auto` (`1 1 auto`) 和 none (`0 0 auto`)。
- 建议不要使用全写属性



##### align-self:允许单个项目有与其他项目不一样的对齐方式

- 可覆盖align-items属性
- 默认值为`auto`，表示继承父元素的`align-items`属性
- 如果没有父元素，则等同于stretch。



#### flex嵌套

- 设置一个元素为flex项目，那么他同样成为一个 flex 容器，它的孩子(直接子节点)也表现为 flexible box



#### 补充：

- 想设置行内元素为 flexible box，也可以置 display 属性的值为 inline-flex。