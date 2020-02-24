var tabs = document.querySelectorAll('.info-box li a');
var panels = document.querySelectorAll('.info-box article');
//首先我们保存所有的选项卡和所有的面板引用到两个变量中，名为 tabs 和 panels，这样此后我们可以容易地为它们做事。

for(i = 0; i < tabs.length; i++) {
  var tab = tabs[i];
  setTabHandler(tab, i);
}
//使用 for 循环遍历所有的选项卡，并且在每一个上运行叫做setTabHandler() 的函数，此函数建立当每个选项卡被点击时应该发生的功能。 运行时， 函数会被传递选项卡，和一个索引数i 指明选项卡在tabs 数组中的位置。

//创建了一个 onclick 事件来处理点击，所以当标签被点击的时候，接下来会发生：
function setTabHandler(tab, tabPos) {
  tab.onclick = function() {
    for(i = 0; i < tabs.length; i++) {
      if(tabs[i].getAttribute('class')) {
        tabs[i].removeAttribute('class');
      }
    }
    //用一个 for 循环清除所有tab当前存在的类。

    tab.setAttribute('class', 'active');
    //当点击的时候在标签上创建了一个 active 类——从相关联的元素中继承了CSS的一些属性，具有和panels的样式相同的 color 和 background-color。

    for(i = 0; i < panels.length; i++) {
      if(panels[i].getAttribute('class')) {
        panels[i].removeAttribute('class');
      }
    }
    //用一个 for 循环清除所有panel当前存在的类。

    panels[tabPos].setAttribute('class', 'active-panel');
    //当标签被点击的时候在和标签相对应的面板上创建了一个 active-panel 类——从相关联的元素中继承了CSS的一些属性，使其 z-index 属性被设置为1，让它能位于所有的面板的上面。
  }
}