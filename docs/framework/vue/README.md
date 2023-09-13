## vue

### 生命周期

Vue⽣命周期总共可以分为8个阶段：创建前后, 载⼊前后,更新前后,销毁前销毁后，以及⼀些特殊场景的⽣命周期

| ⽣命周期      |                                    |
| ------------- | ---------------------------------- |
| beforeCreate  | 组件实例被创建之初                 |
| created       | 组件实例已经完全创建               |
| beforeMount   | 组件挂载之前                       |
| mounted       | 组件挂载到实例上去之后             |
| beforeUpdate  | 组件数据发⽣变化，更新之前         |
| updated       | 组件数据更新之后                   |
| beforeDestroy | 组件实例销毁之前                   |
| destroyed     | 组件实例销毁之后                   |
| activated     | keep-alive 缓存的组件激活时        |
| deactivated   | keep-alive 缓存的组件停⽤时调⽤    |
| errorCaptured | 捕获⼀个来⾃⼦孙组件的错误时被调⽤ |

#### beforeCreate -> created

初始化 vue 实例，进⾏数据观测

created

完成数据观测，属性与⽅法的运算， watch 、 event 事件回调的配置

可调⽤ methods 中的⽅法，访问和修改data数据触发响应式渲染 dom ，可通过 computed 和

watch 完成数据计算

此时 vm.$el 并没有被创建

#### created -> beforeMount

判断是否存在 el 选项，若不存在则停⽌编译，直到调⽤ vm.$mount(el) 才会继续编译

优先级： render > template > outerHTML

#### beforeMount

在此阶段可获取到 vm.el

此阶段 vm.el 虽已完成DOM初始化，但并未挂载在 el 选项上

#### beforeMount -> mounted

此阶段 vm.el 完成挂载， vm.$el 

⽣成的 DOM 

替换了 el 

选项所对应的 DOM

#### mounted

vm.el 已完成 DOM 

的挂载与渲染，此刻打印 vm.$el ，发现之前的挂载点及内容已被替换成新的DOM

#### beforeUpdate

更新的数据必须是被渲染在模板上的（ el 、 template 、 render 之⼀）

此时 view 层还未更新

若在 beforeUpdate 中再次修改数据，不会再次触发更新⽅法updated

完成 view 层的更新

若在 updated 中再次修改数据，会再次触发更新⽅法（ beforeUpdate 、 updated ）

#### beforeDestroy

实例被销毁前调⽤，此时实例属性与⽅法仍可访问

#### destroyed

完全销毁⼀个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器

并不能清除DOM，仅仅销毁实例

#### 使⽤场景分析

| ⽣命周期      | 使用场景                                                     |
| ------------- | ------------------------------------------------------------ |
| beforeCreate  | 执⾏时组件实例还未创建，通常⽤于插件开发中，执⾏⼀些初始化任务 |
| created       | 组件初始化完毕，各种数据可以使⽤，常⽤于异步数据获取         |
| beforeMount   | 未执⾏渲染、更新，dom未创建                                  |
| mounted       | 初始化结束，dom已创建，可⽤于获取访问数据和dom元素           |
| beforeUpdate  | 更新前，可⽤于获取更新前各种状态                             |
| updated       | 更新后，所有状态已是最新                                     |
| beforeDestroy | 销毁前，可⽤于⼀些定时器或订阅的取消                         |
| destroyed     | 组件已销毁，作⽤同上                                         |

created 是在组件实例⼀旦创建完成的时候⽴刻调⽤，这时候⻚⾯ dom 节点并未⽣成；

mounted 是在⻚⾯ dom 节点渲染完毕之后就⽴刻执⾏的。触发时机上 created 是⽐ mounted 要更早的，

两者的相同点：都能拿到实例对象的属性和⽅法。

讨论这个问题本质就是触发的时机，放在 mounted 中的请求有可能导致⻚⾯闪动（因为此时⻚⾯ dom 结构已经⽣成），但如果在⻚⾯加载前完成请求，则不会出现此情况。建议对⻚⾯内容的改动放在 created ⽣命周期当中。

### 组件通讯

常见的通信⽅案

1. 通过 props 传递

   ⽗组件传递数据给⼦组件

2. 通过 $emit 触发⾃定义事件

   ⼦组件传递数据给⽗组件

3. 使⽤ ref

   ⽗组件通过设置⼦组件 ref 来获取数据

4. EventBus

   兄弟组件传值

   创建⼀个中央事件总线 EventBus

   兄弟组件通过 $emit 触发⾃定义事件， $emit 第⼆个参数为传递的数值

   另⼀个兄弟组件通过 $on 监听⾃定义事件

5. *parent*或 root

   通过共同祖辈 $parent 或者 $root 搭建通信桥连

6. attrs 与 listeners

   祖先传递数据给⼦孙

   设置批量向下传属性 $attrs 和 $listeners

   包含了⽗级作⽤域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。

   可以通过 v-bind="$attrs" 传⼊内部组件

7. Provide 与 Inject

   在祖先组件定义 provide 属性，返回传递的值

   在后代组件通过 inject 接收组件传递过来的值

8. Vuex

   state 

   ⽤来存放共享变量的地⽅

   getter 

   可以增加⼀个 getter 派⽣状态，(相当于 store 中的计算属性），⽤来获得共享变量的值

   mutations 

   ⽤来存放修改 state 的⽅法。

   actions 

   也是⽤来存放修改state的⽅法，不过 action 

   是在 mutations 的基础上进⾏。常⽤来做⼀些异步操作

   v-if和v-for的优先级

### diff算法

diff 算法是⼀种通过同层的树节点进⾏⽐较的⾼效算法

其有两个特点：

⽐较只会在同层级进⾏, 不会跨层级⽐较

在diff⽐较的过程中，循环从两边向中间⽐较

diff 算法在很多场景下都有应⽤，在 vue 中，作⽤于虚拟 dom 

渲染成真实 dom 的新旧 VNode 节点⽐较

