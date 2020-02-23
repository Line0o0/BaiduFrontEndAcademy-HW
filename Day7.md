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

- 选择器的结合用法：

  ```html
  html > body table + ul {margin-top:20px;}
  ```

  选择紧接在 table 元素后出现的所有兄弟 ul 元素，该 table 元素包含在一个 body 元素中，body 元素本身是 html 元素的子元素。

- 伪类选择器(Pseudo-classes):selects elements that are in a specific state, e.g. they are the first element of their type, or they are being hovered over by the mouse pointer.

  - `:last-child` `first-child`

  - `:only-child` 只在只有一个子元素的时候会生效。

  - `:invalid`：The **`:invalid`** CSS pseudo-class represents any `<input>` or other `<form>` element whose contents fail to [validate](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation).比如在填入不合适的表单内容是变化input框背景颜色。

    ```css
    /* Selects any invalid <input> */
    input:invalid {
      background-color: pink;
    }
    ```

- User-action pseudo classes:

  - `:hover` — mentioned above; this only applies if the user moves their pointer over an element, typically a link.

  - `:focus` — only applies if the user focuses the element using keyboard controls.

  - | Selector                                                     | Description                                                  |
    | :----------------------------------------------------------- | :----------------------------------------------------------- |
    | [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active) | Matches when the user activates (for example clicks on) an element. |
    | [`:any-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link) | Matches both the `:link` and `:visited` states of a link.    |
    | [`:blank`](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank) | Matches an [`` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) whose input value is empty. |
    | [`:checked`](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked) | Matches a radio button or checkbox in the selected state.    |
    | `:current`                                                   | Matches the element, or an ancestor of the element, that is currently being displayed. |
    | [`:default`](https://developer.mozilla.org/en-US/docs/Web/CSS/:default) | Matches the one or more UI elements that are the default among a set of similar elements. |
    | [`:dir`](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir) | Select an element based on its directionality (value of the HTML `dir` attribute or CSS `direction` property). |
    | [`:disabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled) | Matches user interface elements that are in an disabled state. |
    | [`:empty`](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) | Matches an element that has no children except optionally white space. |
    | [`:enabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled) | Matches user interface elements that are in an enabled state. |
    | [`:first`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first) | In [Paged Media](https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media), matches the first page. |
    | [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child) | Matches an element that is first among its siblings.         |
    | [`:first-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type) | Matches an element which is first of a certain type among its siblings. |
    | [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) | Matches when an element has focus.                           |
    | [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) | Matches when an element has focus and the focus should be visible to the user. |
    | [`:focus-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) | Matches an element with focus plus an element with a descendent that has focus. |
    | `:future`                                                    | Matches the elements after the current element.              |
    | [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) | Matches when the user hovers over an element.                |
    | [`:indeterminate`](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate) | Matches UI elements whose value is in an indeterminate state, usually [checkboxes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox). |
    | [`:in-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range) | Matches an element with a range when its value is in-range.  |
    | [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) | Matches an element, such as an ``, in an invalid state.      |
    | [`:lang`](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang) | Matches an element based on language (value of the HTML [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute). |
    | [`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child) | Matches an element which is last among its siblings.         |
    | [`:last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type) | Matches an element of a certain type that is last among its siblings. |
    | [`:left`](https://developer.mozilla.org/en-US/docs/Web/CSS/:left) | In [Paged Media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages), matches left-hand pages. |
    | [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link) | Matches unvisited links.                                     |
    | `:local-link`                                                | Matches links pointing to pages that are in the same site as the current document. |
    | [`:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is) | Matches any of the selectors in the selector list that is passed in. |
    | [`:not`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not) | Matches things not matched by selectors that are passed in as a value to this selector. |
    | [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) | Matches elements from a list of siblings — the siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match elements 1, 3, 5, 7, etc. All the odd ones.) |
    | [`:nth-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type) | Matches elements from a list of siblings that are of a certain type (e.g. `` elements) — the siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match that type of element, numbers 1, 3, 5, 7, etc. All the odd ones.) |
    | [`:nth-last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child) | Matches elements from a list of siblings, counting backwards from the end. The siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match the last element in the sequence, then two elements before that, then two elements before that, etc. All the odd ones, counting from the end.) |
    | [`:nth-last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type) | Matches elements from a list of siblings that are of a certain type (e.g. `` elements), counting backwards from the end. The siblings are matched by a formula of the form an+b (e.g. 2n + 1 would match the last element of that type in the sequence, then two elements before that, then two elements before that, etc. All the odd ones, counting from the end.) |
    | [`:only-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child) | Matches an element that has no siblings.                     |
    | [`:only-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type) | Matches an element that is the only one of its type among its siblings. |
    | [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional) | Matches form elements that are not required.                 |
    | [`:out-of-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range) | Matches an element with a range when its value is out of range. |
    | `:past`                                                      | Matches the elements before the current element.             |
    | [`:placeholder-shown`](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown) | Matches an input element that is showing placeholder text.   |
    | `:playing`                                                   | Matches an element representing an audio, video, or similar resource that is capable of being “played” or “paused”, when that element is “playing”. |
    | `:paused`                                                    | Matches an element representing an audio, video, or similar resource that is capable of being “played” or “paused”, when that element is “paused”. |
    | [`:read-only`](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only) | Matches an element if it is not user-alterable.              |
    | [`:read-write`](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write) | Matches an element if it is user-alterable.                  |
    | [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required) | Matches form elements that are required.                     |
    | [`:right`](https://developer.mozilla.org/en-US/docs/Web/CSS/:right) | In [Paged Media](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Pages), matches right-hand pages. |
    | [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) | Matches an element that is the root of the document.         |
    | [`:scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope) | Matches any element that is a scope element.                 |
    | [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid) | Matches an element such as an `` element, in a valid state.  |
    | [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) | Matches an element if it is the target of the current URL (i.e. if it has an ID matching the current [URL fragment](https://en.wikipedia.org/wiki/Fragment_identifier)). |
    | [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited) | Matches visited links.                                       |

- 伪元素(pseudo-element):they act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements.是增加了一个元素

  - start with a double colon `::` ，而伪类是单冒号。

  - `::first-line`

  - `::before、::after` 通常用来增加元素,元素内容可以写在CSS中

  - ```css
    .box::before {
        content: "This show before the other content."
    } 
    ```

  - 常用来insert an icon

    ```css
    .box::after {
        content: " ➥"
    }
    ```

  - 在处理float时也用来作为一个“垫脚石”

  - | Selector                                                     | Description                                                  |
    | :----------------------------------------------------------- | :----------------------------------------------------------- |
    | [`::after`](https://developer.mozilla.org/en-US/docs/Web/CSS/::after) | Matches a stylable element appearing after the originating element's actual content. |
    | [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) | Matches a stylable element appearing before the originating element's actual content. |
    | [`::first-letter`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter) | Matches the first letter of the element.                     |
    | [`::first-line`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line) | Matches the first line of the containing element.            |
    | [`::grammar-error`](https://developer.mozilla.org/en-US/docs/Web/CSS/::grammar-error) | Matches a portion of the document containing a grammar error as flagged by the browser. |
    | [`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) | Matches the portion of the document that has been selected.  |
    | [`::spelling-error`](https://developer.mozilla.org/en-US/docs/Web/CSS/::spelling-error) | Matches a portion of the document containing a spelling error as flagged by the browser. |

