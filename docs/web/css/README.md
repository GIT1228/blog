## css

### css选择器

id选择器（#box），选择id为box的元素

类选择器（.one），选择类名为one的所有元素

标签选择器（div），选择标签为div的所有元素

后代选择器（#box div），选择id为box元素内部所有的div元素

⼦选择器（.one>one_1），选择⽗元素为.one的所有.one_1的元素

相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素

群组选择器（div,p），选择div、p的所有元素

伪类选择器

伪元素选择器

属性选择器

内联 > ID选择器 > 类选择器 > 标签选择器

#### 继承属性

在 css 中，继承是指的是给⽗元素设置⼀些属性，后代元素会⾃动拥有这些属性

关于继承属性，可以分成：

font:组合字体

font-family:规定元素的字体系列

font-weight:设置字体的粗细

font-size:设置字体的尺⼨

font-style:定义字体的⻛格

font-variant:偏⼤或偏⼩的字体

text-indent：⽂本缩进

text-align：⽂本⽔平对刘

line-height：⾏⾼

word-spacing：增加或减少单词间的空⽩

letter-spacing：增加或减少字符间的空⽩

text-transform：控制⽂本⼤⼩写

direction：规定⽂本的书写⽅向

color：⽂本颜⾊

caption-side：定位表格标题位置

border-collapse：合并表格边框

border-spacing：设置相邻单元格的边框间的距离

empty-cells：单元格的边框的出现与消失

table-layout：表格的宽度由什么决定

list-style-type：⽂字前⾯的⼩点点样式

list-style-position：⼩点点位置

list-style：以上的属性可通过这属性集合

quotes：设置嵌套引⽤的引号类型 

cursor：箭头可以变成需要的形状

#### ⽆继承的属性

display

⽂本属性：vertical-align、text-decoration

盒⼦模型的属性：宽度、⾼度、内外边距、边框等

背景属性：背景图⽚、颜⾊、位置等

定位属性：浮动、清除浮动、定位position等

⽣成内容属性：content、counter-reset、counter-increment

轮廓样式属性：outline-style、outline-width、outline-color、outline

⻚⾯样式属性：size、page-break-before、page-break-after

### 盒⼦模型

当对⼀个⽂档进⾏布局（layout）的时候，浏览器的渲染引擎会根据标准之⼀的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为⼀个个矩形的盒⼦（box）

⼀个盒⼦由四个部分组成： content 、 padding 、 border 、 margin

content ，即实际内容，显示⽂本和图像

boreder ，即边框，围绕元素内容的内边距的⼀条或多条线，由粗细、样式、颜⾊三部分组成

padding ，即内边距，清除内容周围的区域，内边距是透明的，取值不能为负，受盒⼦的 background 属性影响

margin ，即外边距，在元素外创建额外的空⽩，空⽩通常指不能放其他元素的区域

盒⼦模型可以分成：

- W3C 标准盒⼦模型

  - 盒⼦总宽度 = width + padding + border + margin;

  - 盒⼦总⾼度 = height + padding + border + margin

- IE 怪异盒⼦模型

  - 盒⼦总宽度 = width + margin;

  - 盒⼦总⾼度 = height + margin;

box-sizing属性定义了引擎应该如何计算⼀个元素的总宽度和总⾼度

content-box 默认值，元素的 width/height 不包含padding，border，与标准盒⼦模型表现⼀致

border-box 元素的 width/height 包含 padding，border，与怪异盒⼦模型表现⼀致

inherit 指定 box-sizing 属性的值，应该从⽗元素继承

### BFC

即块级格式化上下⽂，它是⻚⾯中的⼀块渲染区域，并且有⼀套属于⾃⼰的渲染规则：

● 内部的盒⼦会在垂直⽅向上⼀个接⼀个的放置

● 对于同⼀个BFC的俩个相邻的盒⼦的margin会发⽣重叠，与⽅向⽆关。

● 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此

● BFC的区域不会与float的元素区域重叠

● 计算BFC的⾼度时，浮动⼦元素也参与计算

● BFC就是⻚⾯上的⼀个隔离的独⽴容器，容器⾥⾯的⼦元素不会影响到外⾯的元素，反之亦然

BFC ⽬的是形成⼀个相对于外界完全独⽴的空间，让内部的⼦元素不会影响到外部的元素

#### 触发条件

● 根元素，即HTML元素

● 浮动元素：float值为left、right

● overflow值不为 visible，为 auto、scroll、hidden

● display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid

● position的值为absolute或fixed

#### 应⽤场景

##### 防⽌margin重叠（塌陷）

两个 p 元素之间的距离为 100px ，发⽣了 margin 重叠（塌陷），以最⼤的为准，如果第⼀个P的margin 为80的话，两个P之间的距离还是100，以最⼤的为准。

前⾯讲到，同⼀个 BFC 的俩个相邻的盒⼦的 margin 会发⽣重叠

可以在 p 外⾯包裹⼀层容器，并触发这个容器⽣成⼀个 BFC ，那么两个 p 就不属于同⼀个 BFC ，

则不会出现 margin 重叠

##### 清除内部浮动

##### ⾃适应多栏布局

### 弹性盒布局模型

Flexible Box 简称 flex ，意为”弹性布局”，可以简便、完整、响应式地实现各种⻚⾯布局

采⽤Flex布局的元素，称为 flex 容器 container

它的所有⼦元素⾃动成为容器成员，称为 flex 项⽬ item

属性

- flex-direction: row | row-reverse | column | column-reverse; 

row（默认值）：主轴为⽔平⽅向，起点在左端

row-reverse：主轴为⽔平⽅向，起点在右端

column：主轴为垂直⽅向，起点在上沿。

column-reverse：主轴为垂直⽅向，起点在下沿

- flex-wrap:nowrap | wrap | wrap-reverse;

nowrap（默认值）：不换⾏

wrap：换⾏，第⼀⾏在下⽅

wrap-reverse：换⾏，第⼀⾏在上⽅

- flex-flow

是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap

justify-content: flex-start | flex-end | center | space-between | space-around;

flex-start（默认值）：左对⻬

flex-end：右对⻬

center：居中

space-between：两端对⻬，项⽬之间的间隔都相等

space-around：两个项⽬两侧间隔相等

- align-items: flex-start | flex-end | center | baseline | stretch;

flex-start：交叉轴的起点对⻬

flex-end：交叉轴的终点对⻬

center：交叉轴的中点对⻬

baseline: 项⽬的第⼀⾏⽂字的基线对⻬

stretch（默认值）：如果项⽬未设置⾼度或设为auto，将占满整个容器的⾼度

align-content:  flex-start | flex-end | center | space-between | space-around | stretch;

flex-start：与交叉轴的起点对⻬

flex-end：与交叉轴的终点对⻬

center：与交叉轴的中点对⻬

space-between：与交叉轴两端对⻬，轴线之间的间隔平均分布

space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔⽐轴线与边框的间隔⼤⼀倍

stretch（默认值）：轴线占满整个交叉轴

### 元素⽔平垂直居中的⽅法

- 利⽤定位+margin:auto

```css
.father{
 width:500px;
 height:300px;
 border:1px solid #0a3b98;
 position: relative;
 }
 .son{
 width:100px;
 height:40px;
 background: #f0a238;
 position: absolute;
 top:0;
 left:0;
 right:0;
 bottom:0;
 margin:auto;
 }
```

- 利⽤定位+margin:负值

```css
.father {
 position: relative;
 width: 200px;
 height: 200px;
 background: skyblue;
 }
 .son {
 position: absolute;
 top: 50%;
 left: 50%;
 margin-left:-50px;
 margin-top:-50px;
 width: 100px;
 height: 100px;
 background: red;
 }
```

- 利⽤定位+transform

```css
.father {
 position: relative;
 width: 200px;
 height: 200px;
 background: skyblue;
 }
 .son {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%,-50%);
 width: 100px;
 height: 100px;
 background: red;
 }
```



- table布局

设置⽗元素为 display:table-cell ，⼦元素设置 display: inline-block 。利⽤ vertica
l 和 text-align 可以让所有的⾏内块级元素⽔平垂直居中

```css
.father {
 display: table-cell;
 width: 200px;
 height: 200px;
 background: skyblue;
 vertical-align: middle;
 text-align: center;
 }
 .son {
 display: inline-block;
 width: 100px;
 height: 100px;
 background: red;
 }
```



- flex布局

```css
.father {
 display: flex;
 justify-content: center;
 align-items: center;
 width: 200px;
 height: 200px;
 background: skyblue;
 }
 .son {
 width: 100px;
 height: 100px;
 background: red;
 }
```



- grid布局

```css
.father {
 display: grid;
 align-items:center;
 justify-content: center;
 width: 200px;
 height: 200px;
 background: skyblue;
 }
 .son {
 width: 10px;
 height: 10px;
 border: 1px solid red
 }
```

内联元素居中布局

⽔平居中

● ⾏内元素可设置：text-align: center

● flex布局设置⽗元素：display: flex; justify-content: center

垂直居中

● 单⾏⽂本⽗元素确认⾼度：height === line-height

● 多⾏⽂本⽗元素确认⾼度：display: table-cell; vertical-align: middle

块级元素居中布局

⽔平居中

● 定宽: margin: 0 auto

● 绝对定位+left:50%+margin:负⾃身⼀半

垂直居中

● position: absolute设置left、top、margin-left、margin-top(定⾼)

● display: table-cell

● transform: translate(x, y)

● flex(不定⾼，不定宽)

● grid(不定⾼，不定宽)，兼容性相对⽐较差

### 两栏布局、三栏布局

两栏布局实现效果就是将⻚⾯分割成左右宽度不等的两列，宽度较⼩的列设置为固定宽度，剩余宽度由另⼀列撑满，

两栏布局⾮常常⻅，往往是以⼀个定宽栏和⼀个⾃适应的栏并排展示存在

实现思路也⾮常的简单：

● 使⽤ float 左浮左边栏

● 右边模块使⽤ margin-left 撑出内容块做内容展示

● 为⽗级元素添加BFC，防⽌下⽅元素⻜到上⽅内容

```css
.box{
 overflow: hidden; 添加BFC
 }
 .left {
 float: left;
 width: 200px;
 background-color: gray;
 height: 400px;
 }
 .right {
 margin-left: 210px;
 background-color: lightgray;
 height: 200px;
 }
```

flex弹性布局

```css
.box{
 display: flex;
 }
 .left {
 width: 100px;
 }
 .right {
 flex: 1;
 }
```

实现三栏布局中间⾃适应的布局⽅式有：

两边使⽤ float，中间使⽤ margin

```css
.wrap {
 background: #eee;
 overflow: hidden; <!-- ⽣成BFC，计算⾼度时考虑浮动的元素 -->
 padding: 20px;
 height: 200px;
 }
 .left {
 width: 200px;
 height: 200px;
 float: left;
 background: coral;
 }
 .right {
 width: 120px;
 height: 200px;
 float: right;
 background: lightblue;
 }
 .middle {
 margin-left: 220px;
 height: 200px;
 background: lightpink;
 margin-right: 140px;
 }
```



两边使⽤ absolute，中间使⽤ margin

```css
.container {
 position: relative;
 }
 
 .left,
 .right,
 .main {
 height: 200px;
 line-height: 200px;
 text-align: center;
 }
 .left {
 position: absolute;
 top: 0;
 left: 0;
 width: 100px;
 background: green;
 }
 .right {
 position: absolute;
 top: 0;
 right: 0;
 width: 100px;
 background: green;
 }
 .main {
 margin: 0 110px;
 background: black;
 color: white;
 }
```



两边使⽤ float 和负 margin

```css
.left,
 .right,
 .main {
 height: 200px;
 line-height: 200px;
 text-align: center;
 }
 .main-wrapper {
 float: left;
 width: 100%;
 }
 .main {
 margin: 0 110px;
 background: black;
 color: white;
 }
 .left,
 .right {
 float: left;
 width: 100px;
 margin-left: -100%;
 background: green;
 }
 .right {
 margin-left: -100px; /* 同⾃身宽度 */
 }
```



display: table 实现

```css
 .container {
 height: 200px;
 line-height: 200px;
 text-align: center;
 display: table;
 table-layout: fixed;
 width: 100%;
 }
 .left,
 .right,
 .main {
 display: table-cell;
 }
 .left,
 .right {
 width: 100px;
 background: green;
 }
 .main {
 background: black;
 color: white;
 width: 100%;
 }
```



flex实现

仅需将容器设置为 display:flex; ，

盒内元素两端对其，将中间元素设置为 100% 宽度，或者设为 flex:1 ，即可填充空⽩

盒内元素的⾼度撑开容器的⾼度

```css
.wrap {
 display: flex;
 justify-content: space-between;
 }
 .left,
 .right,
 .middle {
 height: 100px;
 }
 .left {
 width: 200px;
 background: coral;
 }
 .right {
 width: 120px;
 background: lightblue;
 }
 .middle {
 background: #555;
 width: 100%;
 margin: 0 20px;
 }
```



grid⽹格布局

### 回流跟重绘

在 HTML 中，每个元素都可以理解成⼀个盒⼦，在浏览器解析过程中，会涉及到回流与重绘：

● 回流：布局引擎会根据各种样式计算每个盒⼦在⻚⾯上的⼤⼩与位置

● 重绘：当计算好盒模型的位置、⼤⼩及其他属性后，浏览器根据每个盒⼦特性进⾏绘制

具体的浏览器解析渲染机制如下所示：

解析HTML，⽣成DOM树，解析CSS，⽣成CSSOM树

将DOM树和CSSOM树结合，⽣成渲染树(Render Tree)

Layout(回流):根据⽣成的渲染树，进⾏回流(Layout)，得到节点的⼏何信息（位置，⼤⼩）

Painting(重绘):根据渲染树以及回流得到的⼏何信息，得到节点的绝对像素

Display:将像素发送给GPU，展示在⻚⾯上

在⻚⾯初始渲染阶段，回流不可避免的触发，可以理解成⻚⾯⼀开始是空⽩的元素，后⾯添加了新的元素使⻚⾯布局发⽣改变

当我们对 DOM 的修改引发了 DOM ⼏何尺⼨的变化（⽐如修改元素的宽、⾼或隐藏元素等）时，浏览器需要重新计算元素的⼏何属性，然后再将计算的结果绘制出来

当我们对 DOM 的修改导致了样式的变化（ color 或 background-color ），却并未影响其⼏何属性时，浏览器不需重新计算元素的⼏何属性、直接为该元素绘制新的样式，这⾥就仅仅触发了重绘

#### 回流触发时机

回流这⼀阶段主要是计算节点的位置和⼏何信息，那么当⻚⾯布局和⼏何信息发⽣变化的时候，就需要回流，如下⾯情况：

添加或删除可⻅的DOM元素

元素的位置发⽣变化

元素的尺⼨发⽣变化（包括外边距、内边框、边框⼤⼩、⾼度和宽度等）

内容发⽣变化，⽐如⽂本变化或图⽚被另⼀个不同尺⼨的图⽚所替代

⻚⾯⼀开始渲染的时候（这避免不了）

浏览器的窗⼝尺⼨变化（因为回流是根据视⼝的⼤⼩来计算元素的位置和⼤⼩的）

#### 重绘触发时机

触发回流⼀定会触发重绘

可以把⻚⾯理解为⼀个⿊板，⿊板上有⼀朵画好的⼩花。现在我们要把这朵从左边移到了右边，那我们

要先确定好右边的具体位置，画好形状（回流），再画上它原有的颜⾊（重绘）

除此之外还有⼀些其他引起重绘⾏为：

● 颜⾊的修改

● ⽂本⽅向的修改

● 阴影的修改

由于每次重排都会造成额外的计算消耗，因此⼤多数浏览器都会通过队列化修改并批量执⾏来优化重排过程。浏览器会将修改操作放⼊到队列⾥，直到过了⼀段时间或者操作达到了⼀个阈值，才清空队列当你获取布局信息的操作的时候，会强制队列刷新，包括前⾯讲到的 offsetTop 等⽅法都会返回最新的数据，因此浏览器不得不清空队列，触发回流重绘来返回正确的值

#### 避免回流的经验

- 如果想设定元素的样式，通过改变元素的 class 类名 (尽可能在 DOM 树的最⾥层)

- 避免设置多项内联样式

- 应⽤元素的动画，使⽤ position 属性的 fixed 值或 absolute 值(如前⽂示例所提)

- 避免使⽤ table 布局， table 中每个元素的⼤⼩以及内容的改动，都会导致整个 table的重新计算

- 对于那些复杂的动画，对其设置 position: fixed/absolute ，尽可能地使元素脱离⽂档流，从⽽减少对其他元素的影响

- 使⽤css3硬件加速，可以让 transform 、 opacity 、 filters 这些动画不会引起回流重绘

- 避免使⽤ CSS 的 JavaScript表达式

### 预处理语⾔

扩充了 Css 语⾔，增加了诸如变量、混合（mixin）、函数等功能，让 Css 更易维护、⽅便。本质上，预处理是 Css 的超集

Css 预编译语⾔在前端⾥⾯有三⼤优秀的预编处理器，分别是：

- sass

2007 年诞⽣，最早也是最成熟的 Css 预处理器，拥有 Ruby 社区的⽀持和 Compass 这⼀最强⼤

的 Css 框架，⽬前受 LESS 影响，已经进化到了全⾯兼容 Css 

的 Scss

⽂件后缀名为 .sass 与 scss ，可以严格按照 sass 的缩进⽅式省去⼤括号和分号

- less

2009年出现，受 SASS 的影响较⼤，但⼜使⽤ Css 的语法，让⼤部分开发者和设计师更容易上⼿，

在 Ruby 社区之外⽀持者远超过 SASS

其缺点是⽐起 SASS 来，可编程功能不够，不过优点是简单和兼容 Css ，反过来也影响了 SASS 演变到了 Scss 的时代

- stylus

Stylus 是⼀个 Css 的预处理框架，2010 年产⽣，来⾃ Node.js 社区，主要⽤来给 Node 项⽬进⾏ Css 预处理⽀持

所以 Stylus 是⼀种新型语⾔，可以创建健壮的、动态的、富有表现⼒的 Css 。⽐较年轻，其本质上做的事情与 SASS/LESS 等类似

#### 基本使⽤

less和scss

```css
.box {
 display: block;
}
```

sass

```css
.box
 display: block
```

stylus

```css
.box
 display: block
```

##### 嵌套

三者的嵌套语法都是⼀致的，甚⾄连引⽤⽗级选择器的标记 & 也相同

区别只是 Sass 和 Stylus 可以⽤没有⼤括号的⽅式书写

```css
.a {
 &.b {
 color: red;
 }
}
```

##### 变量

less 声明的变量必须以 @ 开头，后⾯紧跟变量名和变量值，⽽且变量名和变量值需要使⽤冒号 : 分隔开

```css
@red: #c00;
strong {
 color: @red;
}
```

sass 声明的变量跟 less ⼗分的相似，只是变量名前⾯使⽤ $开头

```css
$red: #c00;
strong {
 color: $red;
}
```

stylus 声明的变量没有任何的限定，可以使⽤ 

$ 开头，结尾的分号 ; 可有可⽆，但变量与变量值之间需要使⽤ =

在 stylus 中我们不建议使⽤ @ 符号开头声明变量

```css
red = #c00
strong
 color: red
```

##### 作⽤域

Css 预编译器把变量赋予作⽤域，也就是存在⽣命周期。就像 js ⼀样，它会先从局部作⽤域查找变量，依次向上级作⽤域查找

sass 中不存在全局变量，所以，在 sass 中最好不要定义相同的变量名

```css
$color: black;
.scoped {
 $bg: blue;
 $color: white;
 color: $color;
 background-color:$bg;
}
.unscoped {
 color:$color;
}
//等于
.scoped {
 color:white;/*是⽩⾊*/
 background-color:blue;
}
.unscoped {
 color:white;/*⽩⾊（⽆全局变量概念）*/
}
```

less 与 stylus 的作⽤域跟 javascript 

⼗分的相似，⾸先会查找局部定义的变量，如果没有找到，会像冒泡⼀样，⼀级⼀级往下查找，直到根为⽌

```css
@color: black;
.scoped {
 @bg: blue;
 @color: white;
 color: @color;
 background-color:@bg;
}
.unscoped {
 color:@color;
}
//等于
.scoped {
 color:white;/*⽩⾊（调⽤了局部变量）*/
 background-color:blue;
}
.unscoped {
 color:black;/*⿊⾊（调⽤了全局变量）*/
}
```

##### 混⼊

混⼊（mixin）应该说是预处理器最精髓的功能之⼀了，简单点来说， Mixins 可以将⼀部分样式抽出，作为单独定义的模块，被很多选择器重复使⽤

可以在 Mixins 中定义变量或者默认参数

在 less 中，混合的⽤法是指将定义好的 ClassA 

中引⼊另⼀个已经定义的 Class ，也能使⽤够传递参数，参数变量为 @ 声明

```less
.alert {
 font-weight: 700;
}
.highlight(@color: red) {
 font-size: 1.2em;
 color: @color;
}
.heads-up {
 .alert;
 .highlight(red);
}
//等于
.alert {
 font-weight: 700;
}
.heads-up {
 font-weight: 700;
 font-size: 1.2em;
 color: red;
}
```

Sass 声明 mixins 时需要使⽤ @mixinn ，后⾯紧跟 mixin 的名，也可以设置参数，参数名为变量 $ 声明的形式

```scss
@mixin large-text {
 font: {
 family: Arial;
 size: 20px;
 weight: bold;
 }
 color: #ff0000;
}
.page-title {
 @include large-text;
 padding: 4px;
 margin-top: 10px;
}
```

stylus 中的混合和前两款 Css 预处理器语⾔的混合略有不同，他可以不使⽤任何符号，就是直接声明 Mixins 名，然后在定义参数和默认值之间⽤等号（=）来连接

```stylus
error(borderWidth= 2px) {
 border: borderWidth solid #F00;
 color: #F00;
}
.generic-error {
 padding: 20px;
 margin: 4px;
 error(); /* 调⽤error mixins */
}
.login-error {
 left: 12px;
 position: absolute;
 top: 20px;
 error(5px); /* 调⽤error mixins，并将参数$borderWidth的值指定为5px */
}
```

##### 代码模块化

模块化就是将 Css 代码分成⼀个个模块scss 、 less 、 stylus