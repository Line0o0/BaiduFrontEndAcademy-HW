选择器补充：

- 相邻兄弟选择器（Adjacent sibling selector）：可选择紧接在另一元素后的元素（也**只选择这个**，并且**只选择一个**），且**二者必须是有相同父元素的**。

  ```html
  h1 + p {margin-top:50px;}
  ```

- 后代选择器（descendant selector）又称为包含选择器（很贴切的名字，都包进来了）。

  ```css
  h1 em {color:red;} 只对111起作用
  ```

  ```html
  <h1>This is a <em>111</em> heading</h1>
  <p>This is a <em>222</em> paragraph.</p>
  ```

  **和后代元素间隔可以是无限的。**

- 子元素选择器（Child selectors）：不希望选择任意的后代元素，而是希望缩小范围，只选择某个**子元素**（！！！**注意只能对子元素，孙子元素不行，故这也是和后代选择器的区分点**）所以是必须严格**按路径**的**子元素**。

  ```css
  h1 > strong {color:red;} 只对111起作用
  em > strong {color:red;} 只对333起作用
  h1 >em {color:red;} 对222、333起作用
  h1 >em >strong {color:red;} 可以嵌套多层 对333起作用
  ```

  ```html
  <h1>This is <strong>111</strong> <strong>111</strong> important.</h1>
  <h1>This is <em>222 <strong>333</strong></em> important.</h1>
  ```

- 伪类选择器(Pseudo-classes selectors):







- 选择器的结合用法：

  ```html
  html > body table + ul {margin-top:20px;}
  ```

  选择紧接在 table 元素后出现的所有兄弟 ul 元素，该 table 元素包含在一个 body 元素中，body 元素本身是 html 元素的子元素。

