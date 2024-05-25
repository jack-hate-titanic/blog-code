/*
 * @Author: 悦者生存 1002783067@qq.com
 * @Date: 2024-05-18 20:06:43
 * @LastEditors: 悦者生存 1002783067@qq.com
 * @LastEditTime: 2024-05-25 15:42:34
 * @FilePath: /blog-code/react/buildOwnReact/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 把渲染每一个任务做成一个单元
let nextUnitOfWork = null;
let wipRoot = null;

function commitRoot() {
  commitWork(wipRoot.child)
  wipRoot = null
}

function commitWork(fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  // 树形遍历
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

// 浏览器空闲时间执行
function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    // 链表遍历算法
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    shouldYield = deadline.timeRemaining() < 1
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
  requestIdleCallback(workLoop)
}

// 首次执行
requestIdleCallback(workLoop)

// 功能单一，创建dom
function createDom(fiber) {
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type)

  const isProperty = key => key !== "children"
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name]
    })

  return dom
}



// 生成新的工作单元
function performUnitOfWork(fiber) {
  // 添加DOM
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }
  // 为每一个自己点创建fiber
  const elements = fiber.props.children
  let index = 0
  let prevSibling = null
  while (index < elements.length) {
    const element = elements[index]
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }
    // 只有第一个子元素是子节点
    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevSibling.sibling = newFiber
    }
    prevSibling = newFiber
    index++
  }
  // 返回下一个节点
  if (fiber.child) {
    return fiber.child
  }
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === "object"
          ? child
          : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function render(element, container) {
   // 存储整个wipRoot
   wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
  }

    // 一开始的wipRoot既是第一个工作单元
  nextUnitOfWork = wipRoot
}

const Didact = {
  createElement,
  render,
}

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar1111</a>
    <b />
  </div>
)
const container = document.getElementById("root")
Didact.render(element, container)
