/*
  错误边界是一个组件: https://zh-hans.legacy.reactjs.org/docs/error-boundaries.html
  部分UI的JavaScript错误不应该导致整个应用崩溃
  这种组件可以捕获发生在其子组件树任何位置的JavaScript错误 并且打印这些错误 同时展示降级UI

  要注意的是 错误边界只能用来捕获UI渲染时的错误 以下场景无法捕获
  + 事件处理
  + 异步代码
  + 服务器渲染
  + errorBoundary组件自身抛出的错误
  总之: 错误边界组件只能处理渲染子组件期间的“同步错误”
*/

import { Component } from "react";
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        // 需要维护一个状态 用来标记是否有错误
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError (error) { // 静态方法
        console.log(error);
        // 更新state 使用降级UI
        // 运行时间点: 渲染子组件的过程中 发生错误之后 更新页面之前
        return {
            hasError: true
        }
    }

    componentDidCatch(error, errorInfo) { // 实例方法
        // 可以在这里把错误日志上报给服务器
        // 运行时间点: 渲染子组件的过程中 发生错误 页面更新之后(不是之前) 此时整个应用已经崩溃了
        console.log("error =>", error);
        console.log("errorInfo =>", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // 有错误就自动渲染降级UI
            return (
                <div>Error Boundary</div>
            )
        }
        // 没有进入if说明没有错误 直接渲染子组件树
        return this.props.children;
    }
}

export default ErrorBoundary;