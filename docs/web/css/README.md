## css

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