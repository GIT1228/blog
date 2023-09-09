## 前端基础

### 数据类型

在  js 中，我们可以分成两种类型：

- 基本类型

- 复杂类型

#### 基本类型

**基本类型**主要为以下7种：

- Number

- String

- Boolean

- Undefined

- null
- bigint
- symbol

##### Number

数值最常⻅的整数类型格式则为⼗进制，还可以设置⼋进制（零开头）、⼗六进制（0x开头）

``` js
let intNum = 55 // 10进制的55
let num1 = 070 // 8进制的56
let hexNum1 = 0xA //16进制的10
```

浮点类型则在数值汇总必须包含⼩数点，还可通过科学计数法表示

```js
let floatNum1 = 1.1;
let floatNum2 = 0.1;
let floatNum3 = .1; // 有效，但不推荐
let floatNum = 3.125e7; // 等于 31250000
```

在数值类型中，存在⼀个特殊数值 NaN ，意为“不是数值”，⽤于表示本来要返回数值的操作失败了

（⽽不是抛出错误）

```js
console.log(0/0); // NaN
console.log(-0/+0); // NaN
```

##### Undefined

Undefined 类型只有⼀个值，就是特殊值 undefined 。当使⽤ var 或 let 声明了变量但没

有初始化时，就相当于给变量赋予了 undefined 值

``` js
let message;
console.log(message == undefined); // true
```

包含 undefined 值的变量跟未定义变量是有区别的

``` js
let message; // 这个变量被声明了，只是值为 undefined
console.log(message); // "undefined"
console.log(age); // 没有声明过这个变量，报错
```

##### String

字符串可以使⽤双引号（"）、单引号（'）或反引号（`）标示

``` js
let firstName = "John";
let lastName = 'Jacob';
let lastName = `Jingleheimerschmidt`
```

字符串是不可变的，意思是⼀旦创建，它们的值就不能变了

``` js
let lang = "Java";
lang = lang + "Script"; // 先销毁再创建
```

##### Null

Null 类型同样只有⼀个值，即特殊值 null,逻辑上讲， null 值表示⼀个空对象指针，这也是给 typeof 传⼀个 null 会返回 "object" 的原因

``` js
let car = null;
console.log(typeof car); // "object"
```

只要变量要保存对象，⽽当时⼜没有那个对象可保存，就可⽤ null 来填充该变量

##### Boolean

Boolean （布尔值）类型有两个字⾯值： true 和 false

通过 Boolean 可以将其他类型的数据转化成布尔值

规则如下：

|数据类型  | 数据类型    |数据类型  |

|数据类型   |数据类型   |""|

|Number| ⾮零数值（包括⽆穷值） 0 、| NaN|

| Object | 任意对象 |  null |

Undefined | N/A （不存在）| undefined |

| 数据类型  |    转换为 true 的值    | 转换为 false 的值 |
| :-------: | :--------------------: | :---------------: |
|  String   |       ⾮空字符串       |        ""         |
|  Number   | ⾮零数值（包括⽆穷值） |      0或NAN       |
|  Object   |        任意对象        |                   |
| Undefined |                        |     undefined     |
|   null    |                        |       null        |
|  symbol   |        任意数值        |                   |
|  bigint   | ⾮零数值（包括⽆穷值） |        0n         |

##### Symbol

Symbol （符号）是原始值，且符号实例是唯⼀、不可变的。符号的⽤途是确保对象属性使⽤唯⼀标识符，不会发⽣属性冲突的危险

``` js
let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();
console.log(genericSymbol == otherGenericSymbol); // false
let fooSymbol = Symbol('foo');
let otherFooSymbol = Symbol('foo');
console.log(fooSymbol == otherFooSymbol); // false
```

#### 引⽤类型

复杂类型统称为 Object ，我们这⾥主要讲述下⾯三种：

- Object

- Array

- Function

##### Object

创建 object 常⽤⽅式为对象字⾯量表示法，属性名可以是字符串或数值

``` js
let person = {
 name: "Nicholas",
 "age": 29,
 5: true
};
```

##### Array

 js 数组是⼀组有序的数据，但跟其他语⾔不同的是，数组中每个槽位可以存储任意类型的

数据。并且，数组也是动态⼤⼩的，会随着数据添加⽽⾃动增⻓

``` js
let colors = ["red", 2, {age: 20 }]
colors.push(2)
```

##### Function

函数实际上是对象，每个函数都是 Function 类型的实例，⽽ Function 也有属性和⽅法，跟其他

引⽤类型⼀样

函数存在三种常⻅的表达⽅式：

- 函数声明
- 函数声明
- 箭头函数

``` js
function sum (num1, num2) {
 return num1 + num2;
}// 函数声明
let sum = function(num1, num2) {
 return num1 + num2;
};//函数声明
let sum = (num1, num2) => {
 return num1 + num2;
};//箭头函数
```

**⾼阶函数**: 通过接收其他函数作为参数或返回其他函数的函数

除了上述说的三种之外，还包括 Date 、 RegExp 、 Map 、 Set 等......

#### 存储区别

基本数据类型和引⽤数据类型存储在内存中的位置不同：

基本数据类型存储在栈中

引⽤类型的对象存储于堆中

当我们把变量赋值给⼀个变量时，解析器⾸先要确认的就是这个值是基本类型值还是引⽤类型值

#### 类型转换

虽然变量的数据类型是不确定的，但是各种运算符对数据类型是有要求的，如果运算⼦的类型与预期不符合，就会触发类型转换机制

常⻅的类型转换有：

- 强制转换（显示转换）

- ⾃动转换（隐式转换）

##### 显示转换

###### Number()

|  原始值   | 转换值 |
| :-------: | :----: |
| undefined |  NAN   |
|   null    |   0    |
|   true    |   1    |
|   false   |   0    |

``` js
Number(324) // 324
// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324
// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN
// 空字符串转为0
Number('') // 0
// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0
// undefined：转成 NaN
Number(undefined) // NaN
// null：转成0
Number(null) // 0
// 对象：通常转换成NaN(除了只包含单个数值的数组)
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```

###### parseInt()

parseInt 相⽐ Number ，就没那么严格了， parseInt 函数逐个解析字符，遇到不能转换的字符就停下来

``` js
parseInt('32a3') //32
```

###### String()

可以将任意类型的值转化成字符串

``` js
String(1) // "1"
//字符串：转换后还是原来的值
String("a") // "a"
//布尔值：true转为字符串"true"，false转为字符串"false"
String(true) // "true"
//undefined：转为字符串"undefined"
String(undefined) // "undefined"
//null：转为字符串"null"
String(null) // "null"
//对象
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```

复杂类型可以调用JSON.stringfy转成字符串

###### Boolean()

可以将任意类型的值转为布尔值，转换规则如下：

``` js
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
```

##### 隐式转换

发⽣隐式转换的场景：

⽐较运算（ == 、 != 、 >、 < ）、 if 、 while 需要布尔值地⽅

算术运算

除了上⾯的场景，还要求运算符两边的操作数不是同⼀类型

###### ⾃动转换为布尔值

在需要布尔值的地⽅，就会将⾮布尔值的参数⾃动转为布尔值，系统内部会调⽤ Boolean 函数

可以得出个⼩结：undefined、null、false、+0、-0、NaN、""

###### ⾃动转换成字符串

遇到预期为字符串的地⽅，就会将⾮字符串的值⾃动转为字符串

具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

常发⽣在 + 运算中，⼀旦存在字符串，则会进⾏字符串拼接操作

``` js
'5' + 1 // '51'
'5' + 1n // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```

###### ⾃动转换成数值

除了 + 有可能把运算⼦转为字符串，其他运算符都会把运算⼦⾃动转成数值

``` js
'5' - '2' // 3
'5' * '2' // 10
true - 1 // 0
false - 1 // -1
'1' - 1 // 0
'5' * [] // 0
false / '5' // 0
'abc' - 1 // NaN
null + 1 // 1
undefined + 1 // NaN
```

**null 转为数值时，值为 0 。 undefined 转为数值时，值为 NaN**



#### 数据结构

常⻅的数据结构：

数组（Array）:  一种列表，可以多维

栈（Stack）: 先进后出

队列（Queue）：先进先出

链表（Linked List）：等同于数组

字典 ：字典是⼀种以键-值对存储数据的数据结构，js中的Object类就是以字典的形式设计的。 js可以

通过实现字典类，让这种字典类型的对象使⽤起来更加简单，字典可以实现对象拥有的常⻅功能，并相

应拓展⾃⼰想要的功能，⽽对象在 js编写中随处可⻅，所以字典的作⽤也异常明显了。

 散列表（Hash table）：也称为哈希表，特点是在散列表上插⼊、删除和取⽤数据都⾮常快。

为什么要设计这种数据结构呢？

⽤数组或链表存储数据，如果想要找到其中⼀个数据，需要从头进⾏遍历，因为不知道这个数据存储到

了数组的哪个位置。

散列表在 js中可以基础数组去进⾏设计。

数组的⻓度是预先设定的，所有元素根据和该元素对应的键，保存在数组的特定位置，这⾥的键和对象

的键是类型的概念。

使⽤散列表存储数组时，通过⼀个散列函数将键映射为⼀个数字，这个数字的范围是0到散列表的⻓度。

即使使⽤⼀个⾼效的散列函数，依然存在将两个键映射为同⼀个值得可能，这种现象叫做碰撞。常⻅碰

撞的处理⽅法有：开链法和线性探测法（具体概念有兴趣的可以⽹上⾃信了解）

使⽤条件：

可以⽤于数据的插⼊、删除和取⽤，不适⽤于查找数据

树（Tree）

 图（Graph）

 堆（Heap）

#### == 和 ===

等于操作符⽤两个等于号（ == ）表示，如果操作数相等，则会返回 true

等于操作符（==）在⽐较中会先进⾏类型转换，再确定操作数是否相等

遵循以下规则：

- 两个都为简单类型，字符串和布尔值都会转换成数值，再⽐较

- 简单类型与引⽤类型⽐较，对象转化成其原始类型的值，再⽐较

- 两个都为引⽤类型，则⽐较它们是否指向同⼀个对象

- null 和 undefined 相等

- 存在 NaN 则返回 false

全等操作符由 3 个等于号（ === ）表示，只有两个操作数在不转换的前提下相等才返回 true 。即类
型相同，值也需相同。

区别：相等操作符（==）会做类型转换，再进⾏值的⽐较，全等运算符不会做类型转换

#### 类型判断

##### typeof

typeof 操作符返回⼀个字符串，表示未经计算的操作数的类型

``` js
typeof 1 // 'number'
typeof '1' // 'string'
typeof 1n // 'bigint'
typeof undefined // 'undefined'
typeof true // 'boolean'
typeof Symbol() // 'symbol'
typeof null // 'object'
typeof [] // 'object'
typeof {} // 'object'
typeof console // 'object'
typeof console.log // 'function'
```

如果我们想要判断⼀个变量是否存在，可以使⽤ typeof ：(不能使⽤ if(a) ， 若 a 未声明，则报错)

``` js
if(typeof a != 'undefined'){
 //变量存在
}
```

##### instanceof

instanceof 运算符⽤于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

``` js
// 定义构建函数
let Car = function() {}
let benz = new Car()
benz instanceof Car // true
let car = new String('xxx')
car instanceof String // true
let str = 'xxx'
str instanceof String // false
```

**实现instanceof** 

``` js
function myInstanceof(left, right) {
 // 这⾥先⽤typeof来判断基础数据类型，如果是，直接返回false
 if(typeof left !== 'object' || left === null) return false;
 // getProtypeOf是Object对象⾃带的API，能够拿到参数的原型对象
 let proto = Object.getPrototypeOf(left);
 while(true) { 
 if(proto === null) return false;
 if(proto === right.prototype) return true;//找到相同原型对象，返回tru
e
 proto = Object.getPrototypeof(proto);
 }
```

typeof 与 instanceof 都是判断数据类型的⽅法，区别如下：

typeof 会返回⼀个变量的基本类型， instanceof 返回的是⼀个布尔值

instanceof 可以准确地判断复杂引⽤数据类型，但是不能正确判断基础数据类型

⽽ typeof 也存在弊端，它虽然可以判断基础数据类型（ null 除外），但是引⽤数据类型

中，除了 function 类型以外，其他的也⽆法判断

**实现全局通⽤的数据类型判断⽅法**

``` js
function getType(obj){
 let type = typeof obj;
 if (type !== "object") { // 先进⾏typeof判断，如果是基础数据类型，直接返回
 return type;
 }
 // 对于typeof返回结果是object的，再进⾏如下的判断，正则返回结果
 return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/,
'$1');
}
```

### 深拷⻉和浅拷⻉

基本类型数据保存在在栈内存中

引⽤类型数据保存在堆内存中，引⽤数据类型的变量是⼀个指向堆内存中实际对象的引⽤，存在栈中

#### 浅拷⻉

指的是创建新的数据，这个数据有着原始数据属性值的⼀份精确拷⻉

如果属性是基本类型，拷⻉的就是基本类型的值。如果属性是引⽤类型，拷⻉的就是内存地址

即浅拷⻉是拷⻉⼀层，深层次的引⽤类型则共享内存地址

``` js
function shallowClone(obj) {
 const newObj = {};
 for(let prop in obj) {
 if(obj.hasOwnProperty(prop)){
 newObj[prop] = obj[prop];
 }
 }
 return newObj;
}
```

在  js 中，存在浅拷⻉的现象有：

Object.assign

Array.prototype.slice() , Array.prototype.concat()

使⽤拓展运算符实现的复制

#### 深拷贝

深拷⻉开辟⼀个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改⼀个对象的属性，不会

改变另⼀个对象的属性

常⻅的深拷⻉⽅式有：

lodash.cloneDeep()

jQuery.extend()

JSON.stringify()：会忽略 undefined 、 symbol 和 函数

⼿写循环递归

``` js
function deepClone(obj, hash = new WeakMap()) {
 if (obj === null) return obj; // 如果是null或者undefined我就不进⾏拷⻉操作
 if (obj instanceof Date) return new Date(obj);
 if (obj instanceof RegExp) return new RegExp(obj);
 // 可能是对象或者普通的值 如果是函数的话是不需要深拷⻉
 if (typeof obj !== "object") return obj;
 // 是对象的话就要进⾏深拷⻉
 if (hash.get(obj)) return hash.get(obj);
 let cloneObj = new obj.constructor();
 // 找到的是所属类原型上的constructor,⽽原型上的 constructor指向的是当前类本身
 hash.set(obj, cloneObj);
 for (let key in obj) {
 if (obj.hasOwnProperty(key)) {
 // 实现⼀个递归拷⻉
 cloneObj[key] = deepClone(obj[key], hash);
 }
 }
 return cloneObj;
}
```



### 原型，原型链

#### 原型

 js 常被描述为⼀种基于原型的语⾔——每个对象拥有⼀个原型对象当试图访问⼀个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到⼀个名字匹配的属性或到达原型链的末尾准确地说，这些属性和⽅法定义在Object的构造器函数（constructor functions）之上的 prototype 属性上，⽽⾮实例对象本身

#### 原型链

原型对象也可能拥有原型，并从中继承⽅法和属性，⼀层⼀层、以此类推。这种关系常被称为原型链(prototype chain)，它解释了为何⼀个对象会拥有定义在其他对象中的属性和⽅法在对象实例和它的构造器之间建⽴⼀个链接（它是 __proto__ 属性，是从构造函数的 prototype 属性派⽣的），之后通过上溯原型链，在构造器中找到这些属性和⽅法

### 作⽤域

作⽤域，即变量（变量作⽤域⼜称上下⽂）和函数⽣效（能被访问）的区域或集合

换句话说，作⽤域决定了代码区块中变量和其他资源的可⻅性

我们⼀般将作⽤域分成：全局作⽤域、函数作⽤域、块级作⽤域

**全局作⽤域**

任何不在函数中或是⼤括号中声明的变量，都是在全局作⽤域下，全局作⽤域下声明的变量可以在程序

的任意位置访问

**函数作⽤域**

函数作⽤域也叫局部作⽤域，如果⼀个变量是在函数内部声明的它就在⼀个函数作⽤域下⾯。这些变量

只能在函数内部访问，不能在函数以外去访问

**块级作⽤域**

ES6引⼊了 let 和 const 关键字,和 var 关键字不同，在⼤括号中使⽤ let 和 const 声明的变

量存在于块级作⽤域中。在⼤括号之外不能访问这些变量

**作⽤域链**

当在  js 中使⽤⼀个变量的时候，⾸先  js 引擎会尝试在当前作⽤域下去寻找该

变量，如果没找到，再到它的上层作⽤域寻找，以此类推直到找到该变量或是已经到了全局作⽤域

如果在全局作⽤域⾥仍然找不到该变量，它就会在全局范围内隐式声明该变量(⾮严格模式下)或是直接报

错

### this对象

函数的 this 关键字在  js 中的表现略有不同，此外，在严格模式和⾮严格模式之间也会有⼀些差别

在绝⼤多数情况下，函数的调⽤⽅式决定了 this 的值（运⾏时绑定）

this 关键字是函数运⾏时⾃动⽣成的⼀个内部对象，只能在函数内部使⽤，总指向调⽤它的对象

#### 绑定规则

##### 默认绑定

全局环境中定义 person 函数，内部使⽤ this 关键字

``` js
var name = 'Jenny';
function person() {
 return this.name;
}
console.log(person()); //Jenny
```

上述代码输出 Jenny ，原因是调⽤函数的对象在游览器中位 window ，因此 this 指

向 window ，所以输出 Jenny

严格模式下，不能将全局对象⽤于默认绑定，this会绑定到 undefined ，只有函数运⾏在⾮严格模式

下，默认绑定才能绑定到全局对象

##### 隐式绑定

函数还可以作为某个对象的⽅法调⽤，这时 this 就指这个上级对象

``` js
function test() {
 console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m(); // 1
```

这个函数中包含多个对象，尽管这个函数是被最外层的对象所调⽤， this 指向的也只是它上⼀级的对

象

##### new绑定

通过构建函数 new 关键字⽣成⼀个实例对象，此时 this 指向这个实例对象

``` js
function test() {
this.x = 1;
}
var obj = new test();
obj.x // 1
```

上述代码之所以能过输出1，是因为 new 关键字改变了 this 的指向

##### 显示修改

apply()、call()、bind() 是函数的⼀个⽅法，作⽤是改变函数的调⽤对象。它的第⼀个参数就表

示改变后的调⽤这个函数的对象。因此，这时 this 指的就是这第⼀个参数

三者都可以改变函数的 this 对象指向

三者第⼀个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null ，则默认指向全局 window

三者都可以传参，但是 apply 是数组，⽽ call 是参数列表，且 apply 和 call 是⼀次性传⼊参数，⽽ bind 可以分为多次传⼊

bind 是返回绑定this之后的函数， apply 、 call 则是⽴即执⾏

**bind实现**

``` js
Function.prototype.myBind = function (context) {
 // 判断调⽤对象是否为函数
 if (typeof this !== "function") {
 throw new TypeError("Error");
 }
 // 获取参数
 const args = [...arguments].slice(1),
 fn = this;
 return function Fn() {
 // 根据调⽤⽅式，传⼊不同绑定值
 return fn.apply(this instanceof Fn ? new fn(...arguments) : contex
t, args.concat(...arguments));
 }
}
```



##### 箭头函数

在 ES6 的语法中还提供了箭头函语法，让我们在代码书写时就能确定 this 的指向（编译时绑定）

``` js
const obj = {
 sayThis: () => {
 console.log(this);
 }
};
obj.sayThis(); // window 因为  js 没有块作⽤域，所以在定义 sayThis 的时
候，⾥⾯的 this 就绑到 window 上去了
const globalSay = obj.sayThis;
globalSay(); // window 浏览器中的 global 对象
```

优先级：new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级

### 闭包

⼀个函数和对其周围状态（lexical environment，词法环境）的引⽤捆绑在⼀起（或者说函数被引⽤包围），这样的组合就是闭包（closure）

也就是说，闭包让你可以在⼀个内层函数中访问到其外层函数的作⽤域

在  js 中，每当创建⼀个函数，闭包就会在函数创建的同时被创建出来，作为函数内部与外部连接起来的⼀座桥梁

``` js
function init() {
 var name = "Mozilla"; // name 是⼀个被 init 创建的局部变量
 function displayName() { // displayName() 是内部函数，⼀个闭包
 alert(name); // 使⽤了⽗函数中声明的变量
 }
 displayName();//displayName() 没有⾃⼰的局部变量。然⽽，由于闭包的特性，它可以访问到外部函数的变量
}
init();
```

使用场景

- 创建私有变量

- 延⻓变量的⽣命周期

  ⼀般函数的词法环境在函数返回后就被销毁，但是闭包会保存对创建时所在词法环境的引⽤，即便创建

  时所在的执⾏上下⽂被销毁，但创建时所在词法环境依然存在，以达到延⻓变量的⽣命周期的⽬的

### new

在  js 中， new 操作符⽤于创建⼀个给定构造函数的实例对象

``` js
function Person(name, age){
 this.name = name;
 this.age = age;
}
Person.prototype.sayName = function () {
 console.log(this.name)
}
const person1 = new Person('Tom', 20)
console.log(person1) // Person {name: "Tom", age: 20}
t.sayName() // 'Tom'
```

new 通过构造函数 Person 创建出来的实例可以访问到构造函数中的属性

new 通过构造函数 Person 创建出来的实例可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）

new 关键字主要做了以下的⼯作：

- 创建⼀个新的对象 obj

- 将对象与构建函数通过原型链连接起来

- 将构建函数中的 this 绑定到新建的对象 obj 上

- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

**⼿写new**

``` js
function mynew(Func, ...args) {
 // 1.创建⼀个新对象
 const obj = {}
 // 2.新对象原型指向构造函数原型对象
 obj.__proto__ = Func.prototype
 // 3.将构建函数的this指向新对象
 let result = Func.apply(obj, args)
 // 4.根据返回值判断
 return result instanceof Object ? result : obj
}
```

### 执⾏上下⽂

执⾏上下⽂是⼀种对  js 代码执⾏环境的抽象概念，也就是说只要有  js 代码运⾏，那么它就⼀定是运⾏在执⾏上下⽂中

执⾏上下⽂的类型分为三种：

- 全局执⾏上下⽂：只有⼀个，浏览器中的全局对象就是 window 对象， this 指向这个全局对象

- 函数执⾏上下⽂：存在⽆数个，只有在函数被调⽤的时候才会被创建，每次调⽤函数都会创建⼀个

  新的执⾏上下⽂

- Eval 函数执⾏上下⽂： 指的是运⾏在 eval 函数中的代码，很少⽤⽽且不建议使⽤

执⾏上下⽂的⽣命周期包括三个阶段：创建阶段 → 执⾏阶段 → 回收阶段

### 防抖节流

本质上是优化⾼频率执⾏代码的⼀种⼿段

如：浏览器的 resize 、 scroll 、 keypress 、 mousemove 等事件在触发时，会不断地调⽤绑定在事件上的回调函数，极⼤地浪费资源，降低前端性能

为了优化体验，需要对这类事件进⾏调⽤次数的限制，对此我们就可以采⽤ 防抖（debounce） 和 节流（throttle） 的⽅式来减少调⽤频率

- 节流: n 秒内只运⾏⼀次，若在 n 秒内重复触发，只有⼀次⽣效
- 防抖: n 秒后在执⾏该事件，若在 n 秒内被重复触发，则重新计时

假设电梯有两种运⾏策略 debounce 和 throttle ，超时设定为15秒，不考虑容量限制

电梯第⼀个⼈进来后，15秒后准时运送⼀次，这是节流

电梯第⼀个⼈进来后，等待15秒。如果过程中⼜有⼈进来，15秒等待重新计时，直到15秒后开始运送，这是防抖

节流时间戳写法

``` js
function throttled1(fn, delay = 500) {
 let oldtime = Date.now()
 return function (...args) {
 let newtime = Date.now()
 if (newtime - oldtime >= delay) {
 fn.apply(null, args)
 oldtime = Date.now()
 }
 }
}
```

节流定时器写法

``` js
function throttled2(fn, delay = 500) {
 let timer = null
 return function (...args) {
 if (!timer) {
 timer = setTimeout(() => {
 fn.apply(this, args)
 timer = null
 }, delay);
 }
 }
}
```

结合写法

``` js
function throttled(fn, delay) {
 let timer = null
 let starttime = Date.now()
 return function () {
 let curTime = Date.now() // 当前时间
 let remaining = delay - (curTime - starttime) // 从上⼀次到现在，还剩下多少多余时间
 let context = this
 let args = arguments
 clearTimeout(timer)
 if (remaining <= 0) {
 fn.apply(context, args)
 starttime = Date.now()
 } else {
 timer = setTimeout(fn, remaining);
 }
 }
}
```

防抖

``` js
function debounce(func, wait) {
 let timeout;
 return function () {
 let context = this; // 保存this指向
 let args = arguments; // 拿到event对象
 clearTimeout(timeout)
 timeout = setTimeout(function(){
 func.apply(context, args)
 }, wait);
 }
}
```

#### 应⽤场景

防抖在连续的事件，只需触发⼀次回调的场景有：

● 搜索框搜索输⼊。只需⽤户最后⼀次输⼊完，再发送请求

● ⼿机号、邮箱验证输⼊检测

● 窗⼝⼤⼩ resize 。只需窗⼝调整完成后，计算窗⼝⼤⼩。防⽌重复渲染。

节流在间隔⼀段时间执⾏⼀次回调的场景有：

● 滚动加载，加载更多或滚到底部监听

● 搜索框，搜索联想功能