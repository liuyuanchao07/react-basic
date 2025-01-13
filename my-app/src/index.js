import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "normalize.css"
import store from "./store";
// import ThemeContext from "./ThemeContext";
import { Provider } from "react-redux";
/*
  react-redux最大的特点就是 让redux的操作更简单一些
  + react-redux中自己创建了上下文对象 并且可以把store当在上下文中
    在组件使用的时候我们无需在自己获取store了 它可以帮我们获取到
  + 组件中我们想获取公共状态信息进行绑定 无需再基于上下文获取store
    也无需自己再基于getState获取公共状态 直接基于react-redux提供的connent函数处理即可
    也不需要手动把让组件的更新的方法放在事件池中了 react-redux内部自动处理了
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //  <ThemeContext.Provider value={{ store }}>
  //    <App />
  //  </ThemeContext.Provider>
  <Provider store={store}>
    <App />
  </Provider>
);