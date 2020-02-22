**Float：**（两份样例代码见[float文件夹](D:\ProgramCodes\BaiduFrontEndAcademy-HW\float)，代码中有很多可以学习的技巧，已做详细注释）

- ```css
  img {
    float: left;/*用来和环绕的元素保持下距离*/
    margin-right: 30px;
  }
  ```

- `float:left`的含义是：

  - 浮动元素会脱离正常的文档布局流，并吸附到其父容器的左边
  - 在正常布局中**位于该浮动元素之下的内容**（我的理解是在这个元素之后出现的元素），此时会围绕着浮动元素，填满其右侧的空间。

- float通常用于创建多列布局：

  - ```css
    /*实现响应式布局*/
    body {
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
    }
    ```

  - 当列变得非常窄时，显示文字就会变得很糟糕。切换回窄屏幕的单列布局通常是有意义的（如手机)，使用**媒体查询**可以实现这一功能.

  - 多列之间float的靠左靠右需要注意：

  - ```css
    不会出现问题
    div:nth-of-type(1) {
      width: 36%;
      float: left;
    }
    
    div:nth-of-type(2) {
      width: 30%;
      float: left;
      margin-left: 4%;
    }
    
    div:nth-of-type(3) {
      width: 26%;
      float: right;
    }
    ```

  - ```css
    顺序会变成：div1  div3  div2
    div:nth-of-type(1) {
      width: 36%;
      float: left;
    }
    
    div:nth-of-type(2) {
      width: 30%;
      float: right;
      margin-left: 4%;
    }
    
    div:nth-of-type(3) {
      width: 26%;
      float: right;
    }
    第二个<div>源代码顺序上比第三个<div>等级要高 (DOM上第二个<div>先出现并声明了float: right;) ，所以在浮动顺序上也会比第三个<div>等级要高。又因为两者同时像右浮动，第二个<div>就会更加地靠右。
    ```

- **清除浮动**：因为一个元素设置了浮动之后后面的元素都会浮动，想要“此处开始停止浮动”——这个元素和源码中**后面的元素**将不浮动。

  - ```css
    footer {
      clear: both;
    }
    ```

  - [`clear`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clear) 可以取三个值：

    - `left`：停止任何活动的左浮动
    - `right`：停止任何活动的右浮动
    - `both`：停止任何活动的左右浮动

- 整个宽度可能难以计算：eg.由于内边距和边界引入的额外宽度，一行容纳不下三列了，因此第三列下降到另外两列之下。

  - ```css
    {
      box-sizing: border-box;
    }
    ```

- 页脚正压在最长列上,需要先设置一个“**垫脚石**”之后，设置页脚的margin-top才能起作用。

  - ```html
    <div class="clearfix"></div>
    这一个是没有内容的，仅仅作为“垫脚石”
    ```

  - ```css
    .clearfix {
      clear: both;
    }
    ```

- 固定列的长度：

  ```
  .column {
    height: 550px;定长更好看
    overflow:auto;解决定长之后内容可能溢出的问题
  }
  ```

  