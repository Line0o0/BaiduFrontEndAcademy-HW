1. 微信小程序那整套登陆流程严格意义上是哪种登陆SSO登陆流程的变体啊？是OAuth2.0的Authorization Code模式：[阮一峰-理解OAuth 2.0](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html?tdsourcetag=s_pctim_aiomsg)
2. 打包工具作用：

   - 管理资源
   - 擦屁股：做一些诸如兼容不同版本浏览器，翻译高级JS到低级JS，编译CSS的超集之类的工作。比如说你JS写箭头函数，ES6的import，浏览器是认不了的，只能转译成require，箭头函数解开成function(){}；有时候根据箭头函数的上下文，还要对解开的function(){}做this的重新绑定。
   - 以及为开发过程提供便利，比如HMR这种特性
   - 内置在开发环境里面，一般有脚手架生成。打包前的代码浏览器不能完全支持，打包后的代码浏览器能够完全支持且完全等价于你的source code。
   - 打包工具就像glue一样，粘合浏览器缓慢的脚步和JS标准委员会的大跃进
3. 脚手架

   - 很多程序员没有能力或者是懒，不可能每一个项目自己都配一遍打包工具，诸如vue-cli、create-react-app之类的命令性工具,就会帮你自动生成一套打包工具的配置出来给你.这一套打包工具的配置具有极强的通用性,也能够非常配合前端框架.所以使用脚手架就相当于自动生成一份配置文件给你
4. webpack和parcel区别：

   - webpack:
     - webpack其实相当于一个框架，里面按照一定规则定义了plugins和loader。通过组合一系列的Plugin和Loader完成整个打包工作。
     - 以Loader为例，本质上Loader会暴露出一个函数：`function Process(sourceCode) { return [compiledCode, jsMap]; }`，这个函数传入 (上一个loader处理完的) 源代码，要求你返回你这个Loader处理完之后的代码字符串以及处理后代码和原来代码之间的对应关系 JS-MAP文件。
     - 只需要保证在loader链中上一个Loader的输出能够被下一个Loader作为合法的输入接受，那你就可以通过组合一条Loader管道对源代码进行transform并最终得到你想要的结果。
     - Webpack的Plugin功能则更加强大，甚至能干预Webpack的Loader执行过程，不过本质上还是对源代码的变形。
     - Webpack有很多loader，每个loader专注于完成自己的本职工作，把多个loader组合成一起就能完成大量功能，同时保持每个loader短小精悍可以维护.
   - parcel：开箱即用:搞一套最最通用的Webpack配置,集成起来，所有代码都走一遍我这个通用的配置.
5. 框架是否内置了打包工具

   - 两种引东西的方式：
     - UMD(Universal Module Defination):如使用html tag引js文件
     - 像npm包管理工具引包的方式称为common.js
   - Vue有两种使用方式：第一种是用vue-cli起一个项目然后用webpack，第二种就是官网一开始的Tutorial让你直接用字符串模板的（先script标签引入Vue组件，直接传template: "xx"字符串模板到Vue实例里面mount的那种）。
   - 后者的话，你script标签引进来的vue框架，实际上已经是被vue开发团队在publish的时候进行过打包的了。框架被打包成单文件适合浏览器直接引入这种情况下就根本不需要打包。但是npm下回来的东西不行。
   - 好的开发者在package.json里面定义打包后的js，package.json 的main指向的是打包后的js。并且打包后的js有特殊处理的，webpack读到这个JS就会自动跳过编译流程，直接combine。

6. `npm init`是做什么？
   - 是在快速初始化一个 `package.json` 文件，如果想直接使用默认值，也可以使用 `npm init -y` 来极速初始化。
   - `而一个package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。
   - `package.json`文件就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。具体看[package.json各项配置的详细含义-阮一峰](https://javascript.ruanyifeng.com/nodejs/packagejson.html)。
