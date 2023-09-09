## 浏览器知识点

### DOM

⽂档对象模型 (DOM) 是 HTML 和 XML ⽂档的编程接⼝

它提供了对⽂档的结构化的表述，并定义了⼀种⽅式可以使从程序中对该结构进⾏访问，从⽽改变⽂档的结构，样式和内容

任何 HTML 或 XML ⽂档都可以⽤ DOM 表示为⼀个由节点构成的层级结构

常见DOM操作：

- createElement：创建新元素，接受⼀个参数，即要创建元素的标签名

- createTextNode：创建⼀个⽂本节点

- createDocumentFragment：⽤来创建⼀个⽂档碎⽚，它表示⼀种轻量级的⽂档，主要是⽤来存储临时节点，然后把⽂档碎⽚的内容

  ⼀次性添加到 DOM 中

- createAttribute：创建属性节点，可以是⾃定义属性

- querySelector：传⼊任何有效的 css 选择器，即可选中单个 DOM 元素（⾸个）

- querySelectorAll：返回⼀个包含节点⼦树内所有与之相匹配的 Element 节点列表，如果没有相匹配的，则返回⼀个空节

  点列表

- innerHTML：不但可以修改⼀个 DOM 节点的⽂本内容，还可以直接通过 HTML ⽚段修改 DOM 节点内部的⼦树

- appendChild：把⼀个⼦节点添加到⽗节点的最后⼀个⼦节点

- insertBefore：把⼦节点插⼊到指定的位置，使⽤⽅法如下：

- setAttribute：在指定元素中添加⼀个属性节点，如果元素中已有该属性改变属性值

- removeChild：删除⼀个节点，⾸先要获得该节点本身以及它的⽗节点，然后，调⽤⽗节点的 removeChild 把⾃⼰删

  掉



### BOM

BOM (Browser Object Model)，浏览器对象模型，提供了独⽴于内容与浏览器窗⼝进⾏交互的对象，其作⽤就是跟浏览器做⼀些交互效果,⽐如如何进⾏⻚⾯的后退，前进，刷新，浏览器的窗⼝发⽣变化，滚动条的滚动，以及获取客户的⼀些信息如：浏览器品牌版本，屏幕分辨率。

Bom 的核⼼对象是 window ，它表示浏览器的⼀个实例。

在浏览器中， window 对象有双重⻆⾊，即是浏览器窗⼝的⼀个接⼝，⼜是全局对象

因此所有在全局作⽤域中声明的变量、函数都会变成 window 对象的属性和⽅法

### 事件模型

 js 中的事件，可以理解就是在 HTML ⽂档或者浏览器中发⽣的⼀种交互操作，使得⽹⻚具备互动性， 常⻅的有加载事件、⿏标事件、⾃定义事件等

由于 DOM 是⼀个树结构，如果在⽗⼦节点绑定事件时候，当触发⼦节点的时候，就存在⼀个顺序问题，这就涉及到了事件流的概念

事件流都会经历三个阶段：

● 事件捕获阶段(capture phase)

● 处于⽬标阶段(target phase)

● 事件冒泡阶段(bubbling phase)

#### 事件冒泡

是⼀种从下往上的传播⽅式，由最具体的元素（触发节点）然后逐渐向上传播到最不具体的那个节点，也就是 DOM 中最⾼层的⽗节点

#### 事件捕获

与事件冒泡相反，事件最开始由不太具体的节点最早接受事件, ⽽最具体的节点（触发节点）最后接受事件

### 事件循环EventLoop

js是单线程语言同一时间只能做一件事，如果一个任务进入阻塞状态，那么整个页面都会被阻塞，所以浏览器引入Event Loop（事件循环）来解决

js分两种任务，一种是同步任务，一种为异步任务，异步任务不会阻塞线程，会等所有同步任务执行完再执行。

同步任务：放到执行栈中执行

异步任务：放到任务队列中等待执行

#### 执行栈和任务队列

执行栈：先进后出执行

任务队列：先进先出（优先队列，微任务会插队在宏任务前面）

同步任务会被放到执行栈里执行，如果任务里面有任务，执行栈是一个栈结构，会先执行后面进入的任务，

所有同步任务执行完，切任务栈为空时，Event Loop会从任务队列里把队头的任务放到执行栈中执行

#### 微任务和宏任务

微任务和宏任务都属于异步任务；

微任务的优先级比宏任务高

微任务会在浏览器渲染前开始，宏任务在浏览器渲染后开始

微任务里有宏任务，会把宏任务放到执行栈中，执行完再执行下一任务；

微任务：promise

宏任务：setTimeout，事件

同步任务（执行栈）>微任务>宏任务

### 浏览器本地存储

#### cookie

Cookie ，类型为「⼩型⽂本⽂件」，指某些⽹站为了辨别⽤户身份⽽储存在⽤户本地终端上的数据。是为了解决 HTTP ⽆状态导致的问题

作为⼀段⼀般不超过 4KB 的⼩型⽂本数据，它由⼀个名称（Name）、⼀个值（Value）和其它⼏个⽤于控制 cookie 有效期、安全性、使⽤范围的可选属性组成

但是 cookie 在每次请求中都会被发送，如果不使⽤ HTTPS 并对其加密，其保存的信息很容易被窃取，导致安全⻛险。举个例⼦，在⼀些使⽤ cookie 保持登录态的⽹站上，如果 cookie 被窃取，他⼈很容易利⽤你的 cookie 来假扮成你登录⽹站

Expires ⽤于设置 Cookie 的过期时间

```
Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

Max-Age ⽤于设置在 Cookie 失效之前需要经过的秒数（优先级⽐ Expires ⾼）

```
Max-Age=604800
```

Domain 指定了 Cookie 可以送达的主机名

Path 指定了⼀个 URL 路径，这个路径必须出现在要请求的资源的路径中才可以发送 Cookie⾸部

```
Path=/docs # /docs/Web/ 下的资源会带 Cookie ⾸部
```

标记为 Secure 的 Cookie 只应通过被 HTTPS 协议加密过的请求发送给服务端

通过上述，我们可以看到 cookie ⼜开始的作⽤并不是为了缓存⽽设计出来，只是借⽤了 cookie 的特性实现缓存

关于 cookie 的使⽤如下：

```
document.cookie = '名字=值';
```

关于 cookie 的修改，⾸先要确定 domain 和 path 属性都是相同的才可以，其中有⼀个不同得时候

都会创建出⼀个新的 cookie

```
Set-Cookie:name=aa; domain=aa.net; path=/ # 服务端设置
document.cookie =name=bb; domain=aa.net; path=/ # 客户端设置
```

最后 cookie 的删除，最常⽤的⽅法就是给 cookie 设置⼀个过期的事件，这样 cookie 过期后会被浏览器删除

#### localStorage

HTML5 新⽅法，IE8及以上浏览器都兼容

⽣命周期：持久化的本地存储，除⾮主动删除数据，否则数据是永远不会过期的

存储的信息在同⼀域中是共享的

当本⻚操作（新增、修改、删除）了 localStorage 的时候，本⻚⾯不会触发 storage 事件,但

是别的⻚⾯会触发 storage 事件。

⼤⼩：5M（跟浏览器⼚商有关系）

localStorage 本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致⻚⾯变卡

受同源策略的限制

缺点：

⽆法像 Cookie ⼀样设置过期时间

只能存⼊字符串，⽆法直接存对象

#### sessionStorage

sessionStorage 和 localStorage 使⽤⽅法基本⼀致，唯⼀不同的是⽣命周期，⼀旦⻚⾯（会

话）关闭， sessionStorage 将会删除数据

#### indexedDB

indexedDB 是⼀种低级API，⽤于客户端存储⼤量结构化数据(包括, ⽂件/ blobs)。该API使⽤索引来实现对该数据的⾼性能搜索

虽然 Web Storage 对于存储较少量的数据很有⽤，但对于存储更⼤量的结构化数据来说，这种⽅法不太有⽤。 IndexedDB 提供了⼀个解决⽅案

- 储存量理论上没有上限

- 所有操作都是异步的，相⽐ LocalStorage 同步操作性能更⾼，尤其是数据量较⼤时

- 原⽣⽀持储存 JS 的对象

- 是个正经的数据库，意味着数据库能⼲的事它都能⼲

#### 区别

● 存储⼤⼩： cookie 数据⼤⼩不能超过 4k ， sessionStorage 和 localStorage 虽然也有存储⼤⼩的限制，但⽐ cookie ⼤得多，可以达到5M或更⼤

● 有效时间： localStorage 存储持久数据，浏览器关闭后数据不丢失除⾮主动删除数据； sessionStorage 数据在当前浏览器窗⼝关闭后⾃动删除； cookie 设置的 cookie 过期时间之前⼀直有效，即使窗⼝或浏览器关闭

● 数据与服务器之间的交互⽅式， cookie 的数据会⾃动的传递到服务器，服务器端也可以写 cookie 到客户端； sessionStorage 和 localStorage 不会⾃动把数据发给服务器，仅在本地保存

#### 应⽤场景

- 标记⽤户与跟踪⽤户⾏为的情况，推荐使⽤ cookie

- 适合⻓期保存在本地的数据（令牌），推荐使⽤ localStorage

- 敏感账号⼀次性登录，推荐使⽤ sessionStorage

- 存储⼤量数据的情况、在线⽂档（富⽂本编辑器）保存编辑历史的情况，推荐使⽤ indexedDB

### 单点登录

单点登录（Single Sign On），简称为 SSO，是⽬前⽐较流⾏的企业业务整合的解决⽅案之⼀

SSO的定义是在多个应⽤系统中，⽤户只需要登录⼀次就可以访问所有相互信任的应⽤系统

SSO ⼀般都需要⼀个独⽴的认证中⼼（passport），⼦系统的登录均得通过 passport ，⼦系统本身将不参与登录操作

当⼀个系统成功登录以后， passport 将会颁发⼀个令牌给各个⼦系统，⼦系统可以拿着令牌会获取

各⾃的受保护资源，为了减少频繁认证，各个⼦系统在被 passport 授权以后，会建⽴⼀个局部会话，在⼀定时间内可以⽆需再次向 passport 发起认证

#### 实现

##### 同域名下的单点登录

cookie 的 domain 属性设置为当前域的⽗域，并且⽗域的 cookie 会被⼦域所共享。 path 属性默认为 web 应⽤的上下⽂路径

利⽤ Cookie 的这个特点，只需要将 Cookie 的 domain 属性设置为⽗域的域名（主域名），同时将 Cookie 的 path 属性设置为根路径，将 Session ID （或Token）保存到⽗域中。这样所有的⼦域应⽤就都可以访问到这个 Cookie

不过这要求应⽤系统的域名需建⽴在⼀个共同的主域名之下，如 tieba.baidu.com 和 map.baidu.com ，它们都建⽴在 baidu.com 这个主域名之下，那么它们就可以通过这种⽅式来实现单点登录

##### 不同域名下的单点登录

如果是不同域的情况下， Cookie 是不共享的，这⾥我们可以部署⼀个认证中⼼，⽤于专⻔处理登录请求的独⽴的 Web 服务

⽤户统⼀在认证中⼼进⾏登录，登录成功后，认证中⼼记录⽤户的登录状态，并将 token 写⼊ Cookie （注意这个 Cookie 是认证中⼼的，应⽤系统是访问不到的）

应⽤系统检查当前请求有没有 Token ，如果没有，说明⽤户在当前系统中尚未登录，那么就将⻚⾯跳转⾄认证中⼼

由于这个操作会将认证中⼼的 Cookie ⾃动带过去，因此，认证中⼼能够根据 Cookie 知道⽤户是否已经登录过了

如果认证中⼼发现⽤户尚未登录，则返回登录⻚⾯，等待⽤户登录

如果发现⽤户已经登录过了，就不会让⽤户再次登录了，⽽是会跳转回⽬标 URL ，并在跳转前⽣成⼀个 Token ，拼接在⽬标 URL 的后⾯，回传给⽬标应⽤系统

应⽤系统拿到 Token 之后，还需要向认证中⼼确认下 Token 的合法性，防⽌⽤户伪造。确认⽆误后，应⽤系统记录⽤户的登录状态，并将 Token 写⼊ Cookie ，然后给本次访问放⾏。（注意这个 Cookie 是当前应⽤系统的）当⽤户再次访问当前应⽤系统时，就会⾃动带上这个 Token ，应⽤系统验证 Token 发现⽤户已登录，于是就不会有认证中⼼什么事了

此种实现⽅式相对复杂，⽀持跨域，扩展性好，是单点登录的标准做法

##### 不同域名下的单点登录(⼆)

可以选择将 Session ID （或 Token ）保存到浏览器的 LocalStorage 中，让前端在每次向后端发送请求时，主动将 LocalStorage 的数据传递给服务端

这些都是由前端来控制的，后端需要做的仅仅是在⽤户登录成功后，将 Session ID （或 Token ）放在响应体中传递给前端

单点登录完全可以在前端实现。前端拿到 Session ID （或 Token ）后，除了将它写⼊⾃⼰的 LocalStorage 中之外，还可以通过特殊⼿段将它写⼊多个其他域下的LocalStorage 中

``` js
var token = result.data.token;
// 动态创建⼀个不可⻅的iframe，在iframe中加载⼀个跨域HTML
var iframe = document.createElement("iframe");
iframe.src = "http://app1.com/localstorage.html";
document.body.append(iframe);
// 使⽤postMessage()⽅法将token传递给iframe
setTimeout(function () {
 iframe.contentWindow.postMessage(token, "http://app1.com");
}, 4000);
setTimeout(function () {
 iframe.remove();
}, 6000);
// 在这个iframe所加载的HTML中绑定⼀个事件监听器，当事件被触发时，把接收到的token数据写⼊localStorage
window.addEventListener('message', function (event) {
 localStorage.setItem('token', event.data)
}, false);
```

前端通过 iframe + postMessage() ⽅式，将同⼀份 Token 写⼊到了多个域下的 LocalStorage 中，前端每次在向后端发送请求之前，都会主动从 LocalStorage 中读取 Token 并在请求中携带，这样就实现了同⼀份 Token 被多个域所共享

此种实现⽅式完全由前端控制，⼏乎不需要后端参与，同样⽀持跨域