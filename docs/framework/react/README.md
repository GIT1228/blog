## react

### 特性

React，⽤于构建⽤户界⾯的 JavaScript 库，只提供了 UI 层⾯的解决⽅案

遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应⽤程序更⾼效使⽤虚拟 DOM 来有效地操作 DOM ，遵循从⾼阶组件到低阶组件的单向数据流

帮助我们将界⾯成了各个独⽴的⼩块，每⼀个块就是组件，这些组件之间可以组合、嵌套，构成整体⻚⾯

react 类组件使⽤⼀个名为 render() 的⽅法或者函数组件 return ，接收输⼊的数据并返回需要展示的内容

```react
class HelloMessage extends React.Component {
 render() {
 return <div>Hello {this.props.name}</div>;
 }
}
ReactDOM.render(
 <HelloMessage name="Taylor" />,
 document.getElementById("hello-example")
);
```

#### 函数式组件：

函数组件，顾名思义，就是通过函数编写的形式去实现⼀个 React 组件，是 React 中定义组件最简单的⽅式

```react
const Header = () => {
 return (
 <Jumbotron style={{ backgroundColor: "orange" }}>
 <h1>TODO App</h1>
 </Jumbotron>
 );
};
```

在 hooks 出来之前，函数组件就是⽆状态组件，不能保管组件的状态，不像类组件中调⽤ setState

如果想要管理 state 状态，可以使⽤ useState ，如下：

```react
const FunctionalComponent = () => {
 const [count, setCount] = React.useState(0);
 return (
 <div>
 <p>count: {count}</p >
 <button onClick={() => setCount(count + 1)}>Click</button>
 </div>
 );
};
```

在使⽤ hooks 情况下，⼀般如果函数组件调⽤ state ，则需要创建⼀个类组件或者 state 提升到

你的⽗组件中，然后通过 props 对象传递到⼦组件

##### 生命周期

在函数组件中，并不存在⽣命周期，这是因为这些⽣命周期钩⼦都来⾃于继承的 React.Component

所以，如果⽤到⽣命周期，就只能使⽤类组件

但是函数组件使⽤ useEffect 也能够完成替代⽣命周期的作⽤，这⾥给出⼀个简单的例⼦：

```react
const FunctionalComponent = () => {
 useEffect(() => {
 console.log("Hello");
 }, []);
 return <h1>Hello, World</h1>;
};
```

如果在 useEffect 回调函数中 return ⼀个函数，则 return 函数会在组件卸载的时候执⾏，正如 componentWillUnmount



#### 类组件

类组件，顾名思义，也就是通过使⽤ ES6 类的编写形式去编写组件，该类必须继承 React.Component

如果想要访问⽗组件传递过来的参数，可通过 this.props 的⽅式去访问

在组件中必须实现 render ⽅法，在 return 中返回 React 

对象，如下

```react
class Dashboard extends React.Component {
 constructor(props) {
 super(props);
 this.state = {};
 }
 render() {
 return (
 <div className="dashboard">
 <ToDoForm />
 <ToDolist />
 </div>
 );
 }
}
```

### state

⼀个组件的显示形态可以由数据状态和外部参数所决定，⽽数据状态就是 state ，⼀般在 constructor 中初始化

当需要修改⾥⾯的值的状态需要通过调⽤ setState 来改变，从⽽达到更新组件内部数据的作⽤，并且重新调⽤组件 render ⽅法，如下⾯的例⼦：

```react
class Button extends React.Component {
 constructor() {
 super();
 this.state = {
 count: 0,
 };
 }
 updateCount() {
 this.setState((prevState, props) => {
 return { count: prevState.count + 1 };
 });
 }
 render() {
 return (
 <button onClick={() => this.updateCount()}>
 Clicked {this.state.count} times
 </button>
 );
 }
}
```

setState 还可以接受第⼆个参数，它是⼀个函数，会在 setState 调⽤完成并且组件开始重新渲染时被调⽤，可以⽤来监听渲染是否完成

### props

React 的核⼼思想就是组件化思想，⻚⾯会被切分成⼀些独⽴的、可复⽤的组件

组件从概念上看就是⼀个函数，可以接受⼀个参数作为输⼊值，这个参数就是 props ，所以可以把props 理解为从外部传⼊组件内部的数据

react 具有单向数据流的特性，所以他的主要作⽤是从⽗组件向⼦组件中传递数据

```react
class Welcome extends React.Component {
 render() {
 return <h1>Hello {this.props.name}</h1>;
 }
}
const element = <Welcome name="Sara" onNameChanged={this.handleName} />;
```

### 事件机制

React 基于浏览器的事件机制⾃身实现了⼀套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等

在 React 中这套事件机制被称之为合成事件

合成事件是 React 模拟原⽣ DOM 事件所有能⼒的⼀个事件对象，即浏览器原⽣事件的跨浏览器包装器

根据 W3C 规范来定义合成事件，兼容所有浏览器，拥有与浏览器原⽣事件相同的接⼝

#### 执⾏顺序

```react
import React from 'react';
class App extends React.Component{
 constructor(props) {
 super(props);
 this.parentRef = React.createRef();
 this.childRef = React.createRef();
 }
 componentDidMount() {
 console.log("React componentDidMount！");
 this.parentRef.current?.addEventListener("click", () => {
 console.log("原⽣事件：⽗元素 DOM 事件监听！");
 });
 this.childRef.current?.addEventListener("click", () => {
 console.log("原⽣事件：⼦元素 DOM 事件监听！");
 });
 document.addEventListener("click", (e) => {
 console.log("原⽣事件：document DOM 事件监听！");
 });
 }
 parentClickFun = () => {
 console.log("React 事件：⽗元素事件监听！");
 };
 childClickFun = () => {
 console.log("React 事件：⼦元素事件监听！");
 };
 render() {
 return (
 <div ref={this.parentRef} onClick={this.parentClickFun}>
 <div ref={this.childRef} onClick={this.childClickFun}>
 分析事件执⾏顺序
 </div>
 </div>
 );
 }
}
export default App;

/*输出顺序
原⽣事件：⼦元素 DOM 事件监听！
原⽣事件：⽗元素 DOM 事件监听！
React 事件：⼦元素事件监听！
React 事件：⽗元素事件监听！
原⽣事件：document DOM 事件监听！
*/
```

### ⽣命周期

 ⽣命周期 （Life Cycle） 的概念应⽤很⼴泛，特别是在经济、环境、技术、社会等诸多领域经常出现，其基本涵义可以通俗地理解为“从摇篮到坟墓” （Cradle-to-Grave） 的整个过程

跟 Vue ⼀样， React 整个组件⽣命周期包括从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等⼀系列过程

react16.4 之后的⽣命周期，可以分成三个阶段：

#### 创建阶段

​	创建阶段主要分成了以下⼏个⽣命周期⽅法：

- constructor

实例过程中⾃动调⽤的⽅法，在⽅法内部通过 super 关键字获取来⾃⽗组件的 props

在该⽅法中，通常的操作为初始化 state 状态或者在 this 上挂载⽅法

- getDerivedStateFromProps

该⽅法是新增的⽣命周期⽅法，是⼀个静态的⽅法，因此不能访问到组件的实例

执⾏时机：组件创建和更新阶段，不论是 props 变化还是 state 变化，也会调⽤在每次 render ⽅法前调⽤，第⼀个参数为即将更新的 props ，第⼆个参数为上⼀个状态的 state ，可以⽐较 props 和 state 来加⼀些限制条件，防⽌⽆⽤的state更新

该⽅法需要返回⼀个新的对象作为新的 state 或者返回 null 

表示 state 状态不需要更新

- render

类组件必须实现的⽅法，⽤于渲染 DOM 结构，可以访问组件 state 与 prop 属性

注意： 不要在 render ⾥⾯ setState , 否则会触发死循环导致内存崩溃

- componentDidMount

组件挂载到真实 DOM 节点后执⾏，其在 render ⽅法之后执⾏

此⽅法多⽤于执⾏⼀些数据获取，事件监听等操作

#### 更新阶段

- getDerivedStateFromProps

  该⽅法介绍同创建阶段一样

- shouldComponentUpdate

  ⽤于告知组件本身基于当前的 props 和 state 是否需要重新渲染组件，默认情况返回 true

  执⾏时机：到新的props或者state时都会调⽤，通过返回true或者false告知组件更新与否

  ⼀般情况，不建议在该周期⽅法中进⾏深层⽐较，会影响效率

  同时也不能调⽤ setState ，否则会导致⽆限循环调⽤更新

- render

  该⽅法介绍同创建阶段一样

- getSnapshotBeforeUpdate

  该周期函数在 render 后执⾏，执⾏之时 DOM 元素还没有被更新

  该⽅法返回的⼀个 Snapshot 值，作为 componentDidUpdate 第三个参数传⼊

  此⽅法的⽬的在于获取组件更新前的⼀些信息，⽐如组件的滚动位置之类的，在组件更新后可以根据这

  些信息恢复⼀些UI视觉上的状态

- componentDidUpdate

  执⾏时机：组件更新结束后触发

  在该⽅法中，可以根据前后的 props 和 state 的变化做相应的操作，如获取数据，修改 DOM 样式等

- 

#### 卸载阶段

- componentWillUnmount

  此⽅法⽤于组件卸载前，清理⼀些注册是监听事件，或者取消订阅的⽹络请求等

  ⼀旦⼀个组件实例被卸载，其不会被再次挂载，⽽只可能是被重新创建

### 组件通信

#### ⽗组件向⼦组件传递

由于 React 的数据流动为单向的，⽗组件向⼦组件传递是最常⻅的⽅式

⽗组件在调⽤⼦组件的时候，只需要在⼦组件标签内传递参数，⼦组件通过 props 属性就能接收⽗组

件传递过来的参数

```react
function EmailInput(props) {
 return (
 <label>
 Email: <input value={props.email} />
 </label>
 );
}
const element = <EmailInput email="123124132@163.com" />;
```



#### ⼦组件向⽗组件传递

⼦组件向⽗组件通信的基本思路是，⽗组件向⼦组件传⼀个函数，然后通过这个函数的回调，拿到⼦组

件传过来的值

⽗组件对应代码如下：

```react
class Parents extends Component {
 constructor() {
 super();
 this.state = {
 price: 0
 };
 }
 getItemPrice(e) {
 this.setState({
 price: e
 });
 }
 render() {
 return (
 <div>
 <div>price: {this.state.price}</div>
 {/* 向⼦组件中传⼊⼀个函数 */}
 <Child getPrice={this.getItemPrice.bind(this)} />
 </div>
 );
 }
}
```

⼦组件对应代码如下：

```react
class Child extends Component {
 clickGoods(e) {
 // 在此函数中传⼊值
 this.props.getPrice(e);
 }
 render() {
 return (
 <div>
 <button onClick={this.clickGoods.bind(this, 100)}>goods1</button>
 <button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>
 </div>
 );
 }
}
```



#### 兄弟组件之间的通信

如果是兄弟组件之间的传递，则⽗组件作为中间层来实现数据的互通，通过使⽤⽗组件传递

```react
class Parent extends React.Component {
 constructor(props) {
 super(props)
 this.state = {count: 0}
 }
 setCount = () => {
 this.setState({count: this.state.count + 1})
 }
 render() {
 return (
 <div>
 <SiblingA
 count={this.state.count}
 />
 <SiblingB
 onClick={this.setCount}
 />
 </div>
 );
 }
}
```



#### ⽗组件向后代组件传递

⽗组件向后代组件传递数据是⼀件最普通的事情，就像全局数据⼀样

使⽤ **context** 提供了组件之间通讯的⼀种⽅式，可以共享数据，其他数据都能读取对应的数据

通过使⽤ React.createContext 创建⼀个 context

```react
const PriceContext = React.createContext('price')
```

context 创建成功后，其下存在 Provider 组件⽤于创建数据源， Consumer 组件⽤于接收数据，使⽤实例如下：

Provider 组件通过 value 属性⽤于给后代组件传递数据：

```react
<PriceContext.Provider value={100}>
</PriceContext.Provider>
```

如果想要获取 Provider 传递的数据，可以通过 Consumer 组件或者或者使⽤ contextType 属性接收，对应分别如下

```react
class MyClass extends React.Component {
 static contextType = PriceContext;
 render() {
 let price = this.context;
 /* 基于这个值进⾏渲染⼯作 */
 }
}
```

Consumer 组件：

```react
<PriceContext.Consumer>
 { /*这⾥是⼀个函数*/ }
 {
 price => <div>price：{price}</div>
 }
</PriceContext.Consumer>
```

#### ⾮关系组件传递

如果组件之间关系类型⽐较复杂的情况，建议将数据进⾏⼀个全局资源管理，从⽽实现通信，例如 redux 。

### React Router

在单⻚应⽤中，⼀个 web 项⽬只有⼀个 html ⻚⾯，⼀旦⻚⾯加载完成之后，就不⽤因为⽤户的操作

⽽进⾏⻚⾯的重新加载或者跳转，其特性如下：

改变 url 且不让浏览器像服务器发送请求

在不刷新⻚⾯的前提下动态改变浏览器地址栏中的URL地址

其中主要分成了两种模式：

hash 模式：在url后⾯加上#，如http://127.0.0.1:5500/home/#/page1

history 模式：允许操作浏览器的曾经在标签⻚或者框架⾥访问的会话历史记录

React Router 对应的 hash 模式和 history 模式对应的组件为：

HashRouter

BrowserRouter

这两个组件的使⽤都⼗分的简单，作为最顶层组件包裹其他组件，如下所示

```react
// 1.import { BrowserRouter as Router } from "react-router-dom";
// 2.import { HashRouter as Router } from "react-router-dom";
import React from 'react';
import {
 BrowserRouter as Router,
 // HashRouter as Router 
 Switch,
 Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Backend from './pages/Backend';
import Admin from './pages/Admin';
function App() {
 return (
 <Router>
 <Route path="/login" component={Login}/>
 <Route path="/backend" component={Backend}/>
 <Route path="/admin" component={Admin}/>
 <Route path="/" component={Home}/>
 </Router>
 );
}
export default App;
```

#### 实现原理

路由描述了 URL 与 UI 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（⽆需刷新⻚⾯）

下⾯以 hash 模式为例⼦，改变 hash 值并不会导致浏览器向服务器发送请求，浏览器不发出请求，也就不会刷新⻚⾯

hash 值改变，触发全局 window 对象上的 hashchange 事件。所以 hash 模式路由就是利⽤ hashchange 

事件监听 URL 的变化，从⽽进⾏ DOM 操作来模拟⻚⾯跳转

react-router 也是基于这个特性实现路由的跳转

### Redux

redux 是⽤于数据状态管理，⽽ react 是⼀个视图层⾯的库

如果将两者连接在⼀起，可以使⽤官⽅推荐 react-redux 库，其具有⾼效且灵活的特性

react-redux 将组件分成：

- 容器组件：存在逻辑处理

- UI 组件：只负责现显示和交互，内部不处理逻辑，状态由外部控制

通过 redux 将整个应⽤状态存储到 store 中，组件可以派发 dispatch ⾏为 action 给 store

其他组件通过订阅 store 中的状态 state 来更新⾃身的视图

