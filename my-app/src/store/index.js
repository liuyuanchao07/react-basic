/*
  redux: 公共状态管理方案

  1. 全局创建公共容器 存储各组件需要的公共信息
     容器存储两部分:
     + 各组件需要共享的信息
     + 事件池 存放能够让组件更新的方法
       特点:当公共状态一旦发生改变 会默认立即通知事件池中的方法执行
       这些方法执行主要目的就是让执行的组件更新 组件一更新就可以获取最新的状态值
  
  2. 创建容器的时候 需要传递reducer

  3. 在各组件中获取公共容器中的状态 渲染组件
     store.getState() 返回结果是一个对象

  4. 把让组件可以更新的方法放在公共容器的事件池中
     后期公共状态改了 事件池中的方法依次执行 对应的组件也更新 组件更新会从store容器中获取最新的公共状态
     store.subscribe()

  5. 修改公共容器中的状态不能直接修改
     + 需要基于dispatch派发通知reducer执行
     + 在reducer中去实现状态的修改

  除了这5步外还需要其他知识做配合:
  在根组件中导入store放在上下文中
*/

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer.js";
import reduxLogger from "redux-logger";

/* 创建store公共容器 */
const store = createStore(reducer, applyMiddleware(reduxLogger));

export default store;

