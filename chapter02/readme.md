# WebGL 入门

## WebGL 辅助函数 - getWebGLContext

在获取 WebGL 绘图上下文时，`canvas.getContext()` 函数接收的参数，在不同的浏览器会有所不同，
故使用 `getWebGLContext` 来隐藏不同浏览器之间的差异。

## 设置 canvas 背景色 - clearColor

获取 WebGL 绘图上下文后，使用 `clearColor` 来设置背景色，用背景色清空 `canvas` 绘图区域。
**在清空绘图区域之前也得指定背景颜色**

```bash
gl.clearColor(red, blue, green, alpha)

// 如背景色被指定为黑色
gl.clearColor(0.0, 0.0, 0.0, 1.0) 
```

在二维图形中，颜色分量值在 0～255 之间。由于 WebGL 继承自 OpenGL，颜色分量值的取值范围遵循 OpenGL 的取值，区间为 0.0～1.0。

## 清空 canvas - clear

`gl.clear(gl.COLOR_BUFFER_BIT)` **清空绘图区域，实际是清空颜色缓存区(color buffer)**

**gl.clear 参数**

| buffer  | 说明 | 相关函数 |
| ------------- | ------------- | ------------- |
| gl.COLOR_BUFFER_BIT  | 颜色缓存区  | gl.clearColor() |
| gl.DEPTH_BUFFER_BIT  | 深度缓冲区  | gl.clearDepth() |
| gl.STENCIL_BUFFER_BIT  | 模版缓冲区  | gl.clearStencil() |

默认参数 gl.clearColor(0.0, 0.0, 0.0, 0.0), gl.clearDepth(1.0), gl.clearStencil(0)